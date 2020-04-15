const Discord = require('discord.js');

exports.run = async (client, message, args) => {

    var embedcolor = '#ff4949'
    if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('you do not have the permissions to do that.')
    let duration = args[0]
    if (duration) return message.channel.setRateLimitPerUser(duration)

    let time = args[0]
    const slowmoderesponse = new Discord.MessageEmbed()
        .setColor(embedcolor)
        .setAuthor('Sapphire')
        .setDescription('This command is missing the argument: `Slowmode Interval`. Please make sure you are following the usage instructions:`-slowmode <interval>` \n\n*Note: this only turns on slowmode in the channel that this command is used.*')
    if (!time) return message.channel.send(slowmoderesponse)




}