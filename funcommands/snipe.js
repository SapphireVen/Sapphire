const Discord = require('discord.js');
const snipes = require("../snipes.json");
const fs = require('fs');

exports.run = async (client, message, args) => {

        var fileName = '../snipes.json';
        var file = require(fileName);
        let chn = `${message.channel.id}`;
        var snipechannel = snipes[chn];

        if (!snipechannel) {
            const failedsnipe = new Discord.MessageEmbed()
                .setColor("#000000")
                .setDescription(`There is nothing to snipe.`)
            message.channel.send(failedsnipe)
        } else {
            const snipeembed = new Discord.MessageEmbed()
                .setAuthor(`Sniped by: ${message.member.displayName}`)
                .setColor("#2dc7f5")
                .setDescription(`**${snipechannel[1]} said:** ${snipechannel[0]}`)

            message.channel.send(snipeembed)
            fs.writeFile(fileName, JSON.stringify(file, null, 2), function (error) {
                if (error) {
                    return console.log('oops');
                }
            });
        }
    }
