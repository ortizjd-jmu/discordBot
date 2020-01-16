const Discord = require("discord.js");
const bot = new Discord.Client();
const TOKEN = "Place Token here";

// Bot responds to "!code" and sends the correct code
bot.on("message", function (message) {
  if (message.channel.type === "dm") {
    message.author.send("Nice Try. Please use the proper channel.");
  } else if (message.content == "!code") {
    var fs = require("fs");

    // Bot pulls code from InviteCode.txt file and sends the data to the user
    fs.readFile(
      "C://Program Files (x86)/Steam/steamapps/common/Stardew Valley/Mods/Always On Server/InviteCode.txt",
      "utf8",
      function (err, data) {
        if (err) throw err;
        console.log(data);
        message.author.send(data);
      }
    );
  }
});

bot.login(TOKEN);