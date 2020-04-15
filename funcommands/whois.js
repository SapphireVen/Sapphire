const Discord = require('discord.js');
const moment = require('moment');
const today = moment(new Date());

exports.run = async (client, message, args) => {

    var embedcolor = '#ff4949'
    let member = message.mentions.members.first() || message.member
    let mentioned = message.mentions.users.first();
    user = member.user;

    var missingargs = new Discord.MessageEmbed()
        .setColor(embedcolor)
        .setAuthor('Nexus')
        .setDescription('This command is missing the argument: `@user`. Please make sure you are following the usage instructions:`-av @user`')

    if (!mentioned) return message.channel.send(missingargs)


//${moment(mentioned.joinedAt).format("LT")
    const avatarEmbed = new Discord.MessageEmbed()
        .setColor('#15dbf3')
        .setAuthor(`${mentioned.tag}`, mentioned.displayAvatarURL({format: "png"}))
        .addFields(
            { name: 'Registered On:', value: `${moment(mentioned.createdAt).format("LL⁣")}` + "\n" + `${moment(mentioned.createdAt).format("LT")}`, inline: true },
            { name: 'Joined Server On:', value: `${moment(mentioned.joinedAt).format("LL⁣")}` + "\n" + `${moment(mentioned.joinedAt).format("LT⁣")}`, inline: true},
        )
        .addFields(
            { name: 'Status: ', value: `${mentioned.presence.status.charAt(0).toUpperCase()}` + `${mentioned.presence.status.charAt(1).toLowerCase()}` + `${mentioned.presence.status.charAt(2).toLowerCase()}` + `${mentioned.presence.status.charAt(3).toLowerCase()}` + `${mentioned.presence.status.charAt(4).toLowerCase()}` + `${mentioned.presence.status.charAt(5).toLowerCase()}` + `${mentioned.presence.status.charAt(6).toLowerCase()}`, inline: true},
            { name: 'Nickname: ', value: ` ${message.mentions.members.first().displayName}`},
            { name: 'User ID: ', value: ` ${message.mentions.members.first().id}`}, 

            
        )
        .addField("Roles: ", member.roles.cache.map(r => `${r}`).join(' | '), true)
        if (mentioned) return message.channel.send(avatarEmbed)

}