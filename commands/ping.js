const Discord = require("discord.js");

exports.run = async (client, message, args) => {


    const embedColor = "#15dbf3"

    const embedfirst = new Discord.MessageEmbed()
        .setColor(embedColor)
        .setDescription(`Pinging...`)
    const msg = await message.channel.send(embedfirst)

    const embed = new Discord.MessageEmbed()
        .setColor(embedColor)
        .setDescription(`Your latency is ${Math.floor(msg.createdAt - message.createdAt)}\nAPI Latency is currently at ${Math.round(client.ws.ping)} ms.`)
    msg.edit(embed)

}