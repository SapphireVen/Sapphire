const Discord = require("discord.js");

exports.run = async (client, message, args) => {


    var embedcolor = '#ff4949'

    const gRole = message.guild.roles.cache.find(role => role.name === 'Muted');
    const member = message.mentions.members.first();
    if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('you do not have the permissions to do that.')

    const muteinfo = new Discord.MessageEmbed()
        .setColor(embedcolor)
        .setAuthor('Sapphire')
        .setDescription('This command is missing the argument: `@user`. Please make sure you are following the usage instructions:`-unmute @user`')

    const missingmute = new Discord.MessageEmbed()
        .setColor(embedcolor)
        .setAuthor('Sapphire')
        .setDescription('This command is missing the role: `Muted`. Please make the muted role.')

    const mute = new Discord.MessageEmbed()
        .setColor('#15dbf3')
        .setDescription(`${message.mentions.members.first()} has been unmuted.`)

    if (!member) return message.channel.send(muteinfo)
    if (message.member.hasPermission('MUTE_MEMBERS'))
        if (!message.guild.roles.cache.find(role => role.name === 'Muted')) {
            message.channel.send(missingmute)
        }
    if (message.guild.roles.cache.find(role => role.name === 'Muted')) {
        member.roles.remove(gRole);
        message.delete()
        message.channel.send(mute)

    }
}