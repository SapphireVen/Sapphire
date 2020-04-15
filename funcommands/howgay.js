const Discord = require('discord.js');

exports.run = async (client, message, args) => {

    const gay = new Discord.MessageEmbed()
        .setColor('#15dbf3')
        .setAuthor(`${Math.floor(Math.random() * 100 + 1)}% gay`)


    var options = [gay];
    var response = options[Math.floor(Math.random() * options.length)];
    message.channel.send(response).then().catch(console.error);

}