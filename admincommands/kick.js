const Discord = require("discord.js");

exports.run = async (client, message, args) => {

    var member = message.mentions.members.first();
    var embedColor = '#2dc7f5'
    var embedcolor = '#ff4949'

    if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('you do not have the permissions to do that.')
    const kickresponse = new Discord.MessageEmbed()
        .setColor(embedcolor)
        .setAuthor('Sapphire')
        .setDescription('This command is missing the argument: `@user`. Please make sure you are following the usage instructions:`-kick @user`')
    if (!member) return message.channel.send(kickresponse)

    const cantkickyourself = new Discord.MessageEmbed()
        .setColor(embedcolor)
        .setDescription('You can\'t kick yourself.')

    const kicklog = new Discord.MessageEmbed()
        .setColor(embedColor)
        .setDescription(`${message.mentions.members.first()} has been kicked by ${message.author}.`)

    if (member = message.author) return message.channel.send(cantkickyourself)
    member.kick().then((member) => {
        message.delete()
        message.channel.send(kicklog);

    }).catch(() => {
        message.channel.send("You cannot kick this person.");
    });
}