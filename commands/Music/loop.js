const Discord = require('discord.js');

module.exports = {
    name: "loop",
    aliases: ["rp"],
    category: "Music",
    description: "loops throught current song",
    timeout: 3000,
    usage: "[command]",
    author: "[CuSO4-c3c,Hiyoriii,Hellsnakes]",
    run: async (client, message, args) => {
        if (!message.member.voice.channel)
            return message.reply('Please join a voice channel!');
        let queue = client.distube.getQueue(message);
        if (message.member.guild.me.voice.channel.id !== message.member.voice.channel.id) {
            return message.reply('You are not on the same voice channel as me!');
        }
        if (!queue) {
            const queueError = new Discord.MessageEmbed()
                .setDescription("There is Nothing Playing")
                .setColor("RANDOM")
            return message.channel.send(queueError)
        }
        await client.distube.setRepeatMode(message, parseInt(args[0]));
        await message.react('🔁');
    }
}