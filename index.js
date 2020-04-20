var cp = require('child_process');
var childProcess = cp.spawn('python', ['-i']);
const Discord = require('discord.js');
const client = new Discord.Client();
require('dotenv').config()

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});


childProcess.stdout.setEncoding('utf8')

var data_line = '';

childProcess.stdout.on("data", function(data) {
  data_line += data;
  if (data_line[data_line.length-1] == '\n') {
    // we've got new data (assuming each individual output ends with '\n')
    var res = data_line
    data_line = ''; // reset the line of data

    console.log(res);
  }
});


childProcess.stdin.write('source activate chatbot\n');

childProcess.stdin.write('python ~/Desktop/Chatbot/chatbot.py\n');
childProcess.stdin.on("data", function(data) {
  if(data.toString() == "You:"){
    childProcess.stdin.write("Hi\n")
  }
})



client.login(process.env.token);