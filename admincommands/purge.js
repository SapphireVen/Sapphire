const Discord = require('discord.js');

exports.run = async (client, message, args) => {


    var embedcolor = '#ff4949'
    if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('you do not have the permissions to do that.')
    const purgeresponse = new Discord.MessageEmbed()
        .setColor(embedcolor)
        .setAuthor('Nexus')
        .setDescription('This command is missing the argument: `number of messages`. Please make sure you are following the usage instructions: `-purge <number of messages>` \n\n*Note: you can only purge up to 100 messages.*')

    if (!args[0]) return message.channel.send(purgeresponse)
    message.delete()
    message.channel.bulkDelete(args[0]);

}