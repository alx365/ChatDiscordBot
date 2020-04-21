var cp = require("child_process");
//var childProcess = cp.spawn("python", ["-i"]);
const Discord = require("discord.js");
const client = new Discord.Client();
require("dotenv").config();
const fs = require('fs')
const os = require('os')

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity("` um mich zu aktivieren");
});

var channel;
client.on("message", (msg) => {
  if (msg.content.startsWith("`")) {
    channel = msg.channel
    var message = msg.content.replace('`', '')
    console.log(message)
    //console.log(channel)//.sendMessage("test")
    //childProcess.stdin.write("python ~/Desktop/Chatbot/chatbot.py " + message + "\n");
    fs.writeFile(os.homedir() + "/input", message, (err) => {
      if (err) throw err;
    })

    function readFile(){
      var file = null;
      var oldFile = file;
      file = fs.readFileSync(os.homedir + "/output")
      if(oldFile.toString() == file.toString()) { } else {
        
      }
    }
    
  }
});

client.login(process.env.token);
