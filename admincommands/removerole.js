const Discord = require('discord.js');

exports.run = async (client, message, args) => {

    var embedcolor = '#ff4949'
    var embedColor = '#15dbf3'
    var member = message.mentions.members.first();
    let role = message.guild.roles.cache.find(r => r.name == args[1]) || message.guild.roles.cache.find(r => r.id == args[1]) || message.mentions.roles.first()
    if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('you do not have the permissions to do that.')

    const invalidmember = new Discord.MessageEmbed()
        .setColor(embedcolor)
        .setAuthor('Sapphire')
        .setDescription('This command is missing the argument: `@user`. Please make sure you are following the usage instructions:`-removerole @user <rolename>`')
    if (!member) return message.channel.send(invalidmember)

    const invalidrole = new Discord.MessageEmbed()
        .setColor(embedcolor)
        .setAuthor('Sapphire')
        .setDescription('This command is missing the argument: `Role`. Please make sure you are following the usage instructions:`-removerole @user <rolename>`')
    if (!role) return message.channel.send(invalidrole)


    if (!member.roles.cache.has(role.id)) {
        return message.channel.send(`${member.displayName} doesn't have that role.`)
    } else {
        member.roles.remove(role.id)
        const succesfulladd = new Discord.MessageEmbed()
            .setColor(embedColor)
            .setDescription(`The role <@&${role.id}> has been succesfully removed from ${member.displayName}.`)
        message.channel.send(succesfulladd)
    }

}