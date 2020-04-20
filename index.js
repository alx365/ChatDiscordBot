var cp = require("child_process");
var childProcess = cp.spawn("python", ["-i"]);
const Discord = require("discord.js");
const client = new Discord.Client();
require("dotenv").config();


client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity("` um mich zu aktivieren");
});



childProcess.stdout.setEncoding("utf8");

var data_line = "";

childProcess.stdin.write("source activate chatbot\n");

childProcess.stdin.write("python ~/Desktop/Chatbot/chatbot.py\n");


childProcess.stdout.on("data", function (data) {
  console.log(data)
  data_line += data;
  if (data_line[data_line.length - 1] == "\n") {
    // we've got new data (assuming each individual output ends with '\n')
    var res = data_line;
    data_line = ""; // reset the line of data

    console.log(res);
  }
});

client.on("message", (msg) => {
  if (msg.content.startsWith("`")) {
    var message = msg.content.replace('`', '')
    console.log(message)
    
  }
});


client.login(process.env.token);
