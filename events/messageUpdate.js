const snipes = require("../snipes.json")
const fs = require("fs");
const Discord = require('discord.js');

module.exports = (client, oldMessage, newMessage) => {
    if (oldMessage.author.bot) return;

    // ─── DEFINED GUILDS ─────────────────────────────────────────────────────────────────────
    const gayzone = client.guilds.cache.get("699015211096473670");
    // ─────────────────────────────────────────────────────────────────────────────────

    // ─── GUILD LOGS ─────────────────────────────────────────────────────────────────────
    const gayzonelogs = client.channels.cache.get("699324175965356184");
    // ─────────────────────────────────────────────────────────────────────────────────

    const embedColor = '#f7d912'
    var updateembed = new Discord.MessageEmbed()
        .setColor(embedColor)
        .setThumbnail(newMessage.author.displayAvatarURL)
        .setAuthor(`${oldMessage.author.tag} ` + `(${oldMessage.author.id})`, oldMessage.author.displayAvatarURL({format: "png"}))
        .setDescription(`Message was edited in <#${newMessage.channel.id.toString()}>\n **Before:** ${oldMessage.content} \n**After:** ${newMessage.content}`)
        .setTimestamp()


    // ─── GUILDS ─────────────────────────────────────────────────────────────────────

    if (gayzone) {
        gayzonelogs.send(updateembed)
    }


}