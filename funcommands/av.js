const Discord = require('discord.js');

exports.run = async (client, message, args) => {

    var embedcolor = '#ff4949'
    var member = message.mentions.users.first();


    var missingargs = new Discord.MessageEmbed()
        .setColor(embedcolor)
        .setAuthor('Nexus')
        .setDescription('This command is missing the argument: `@user`. Please make sure you are following the usage instructions:`-av @user`')

    if (!member) return message.channel.send(missingargs)


    const avatarEmbed = new Discord.MessageEmbed()
        .setColor('#15dbf3')
        .setAuthor(member.tag, member.displayAvatarURL({
            format: "png"
        }), )

        .setImage(member.displayAvatarURL({
            size: 1024,
            format: "png"
        }));
    if (member) return message.channel.send(avatarEmbed)

}