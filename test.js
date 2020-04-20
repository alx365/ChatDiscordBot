const { spawn } = require('child_process')
const shell = spawn('sh"',[], { stdio: 'inherit' })
shell.stdout.on('data',function (data) {
    console.log(data.toString())
});
shell.on('close',(code)=>{console.log('[shell] terminated :',code)})
shell.stdin.write('kdialog --msgbox "LOLSU!\n"')
//shell.send("echo losu")