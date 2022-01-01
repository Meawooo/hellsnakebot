const Discord = require("discord.js");
const disbut = require('discord-buttons');

module.exports = {
    name: 'support',
    category: "Bot",
    description: "support for bot",
    timeout: 5000,
    usage: "[command]",
    author: "[ARAAN SHEIKH]",
    run: async (client, message, args) => {
       const embed = new Discord.MessageEmbed()
        .setTitle("Support")
        .setThumbnail(client.user.displayAvatarURL())
        .addField(`📩Email`,`araansheikh@gmail.com`)
        .setColor("RANDOM")
        const button = new disbut.MessageButton()
  .setStyle('url')
  .setURL('https://discords.com/bots/user/875768640320962650/') 
  .setLabel('Discord') 
  const button2 = new disbut.MessageButton()
  .setStyle('url')
  .setURL('https://instagram.com/araan_sheikh') 
  .setLabel('INSTAGRAM') 
  const button3 = new disbut.MessageButton()
  .setStyle('url')
  .setURL('https://twitter.com/araan_sheikh') 
  .setLabel('Twitter') 
  let row = new disbut.MessageActionRow()
        .addComponent(button)
        .addComponent(button2)
        .addComponent(button3)
message.channel.send("", { embed: embed, components: row })
    }
}
