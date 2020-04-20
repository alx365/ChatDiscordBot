var cp = require('child_process');
var childProcess = cp.spawn('python', ['-i']);

childProcess.stdout.setEncoding('utf8')

var k = 0;
var data_line = '';

childProcess.stdout.on("data", function(data) {
  data_line += data;
  if (data_line[data_line.length-1] == '\n') {
    // we've got new data (assuming each individual output ends with '\n')
    var res = parseFloat(data_line);
    data_line = ''; // reset the line of data

    console.log('Result #', k, ': ', res);

    k++;
    // do something else now
    if (k < 5) {
      // double the previous result
      childProcess.stdin.write('2 * + ' + res + '\n');
    } else {
      // that's enough
      childProcess.stdin.end();
    }
  }
});


childProcess.stdin.write('print("test")\n');

/*
const { spawn } = require('child_process')
const shell = spawn('sh',[], { stdio: 'inherit' })
shell.on('close',(code)=>{console.log('[shell] terminated :',code)})
*/