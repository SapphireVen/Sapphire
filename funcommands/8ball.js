const Discord = require('discord.js');

exports.run = async (client, message, args) => {


    var embedcolor = '#ff4949'
    let replies = [":8ball: Yes.", ":8ball: No.", ":8ball: I don't know.", ":8ball: Ask again later.", ":8ball: Don't count on it.", ":8ball: Better not tell you now.", ":8ball: Without a doubt.", ":8ball: Most likely.", ":8ball: My sources say no."]
    let result = Math.floor((Math.random() * replies.length))
    let question = args.join(" ")


    var missingargs = new Discord.MessageEmbed()
        .setColor(embedcolor)
        .setAuthor('Sapphire')
        .setDescription('This command is missing the argument: `question`. Please make sure you are following the usage instructions:`-8ball <question>`')

    if (!args[0]) return message.channel.send(missingargs)


    const ballembed = new Discord.MessageEmbed()
        .setAuthor(message.author.username, message.author.displayAvatarURL({
            format: "png"
        }))
        .setColor("#15dbf3")
        .addField("__**Question**__", question)
        .addField("__**Answer**__", replies[result]);

    message.channel.send(ballembed)

}