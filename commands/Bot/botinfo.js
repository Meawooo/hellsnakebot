const { MessageEmbed } = require('discord.js');
const { version } = require('discord.js');
const os = require('os');

    module.exports = {
        name:"botinfo",
        category: "Bot",
        description: "Send detailed info about the client",
        timeout: 10000,
        usage: "[command]",
        run: async (client, message, args) => {
            const embed = new MessageEmbed()
                .setThumbnail(client.user.displayAvatarURL())
                .setTitle('Bot Stats')
                .setColor('RANDOM')
                .addFields(
                    {
                        name: '🔰 Author',
                        value: `${message.client.users.cache.get(require('../../config.json').Admin)?.tag}`,
                        inline: true
                    },
                    {
                        name: '🌐 Servers',
                        value: `Serving ${client.guilds.cache.size} servers.`,
                        inline: true
                    },
                    {
                        name: '📺 Channels',
                        value: `Serving ${client.channels.cache.size} channels.`,
                        inline: true
                    },
                    {
                        name: '👥 Users',
                        value: `Serving ${client.users.cache.size} users.`,
                        inline: true
                    },
                    {
                        name: '🎈 Join Date',
                        value: client.user.createdAt.toLocaleDateString("en-us"),
                        inline: true
                    },
                    {
                        name: '🛠 Discord.js Version',
                        value: `${version}`,
                        inline: true
                    },
                    {
                        name: '💎 Node.js Version',
                        value: `${process.version}`,
                        inline: true
                    },
                    {
                        name: '🖥 ARCH',
                        value: `\`${os.arch()}\``,
                        inline: true
                    },
                    {
                        name: '🖥 Platform',
                        value: `\`${os.platform()}\``,
                        inline: true
                    },
                    {
                        name: '⏳ Memory',
                        value: `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}mb`,
                        inline: true
                    },
                    {
                        name: '🖥 CPU',
                        value: `\`\`\`md\n${os.cpus().map(i => `${i.model}`)[0]}\`\`\``,
                        inline: true
                    },
                )   
            await message.channel.send(embed)
        }
    }