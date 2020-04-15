const snipes = require("../snipes.json")
const fs = require("fs");
const Discord = require('discord.js');

module.exports = (client, messageDelete) => {
    if (messageDelete.author.bot) return;

    // ─── DEFINED GUILDS ─────────────────────────────────────────────────────────────────────
    const gayzone = client.guilds.cache.get("699015211096473670");
    // ─────────────────────────────────────────────────────────────────────────────────

    // ─── GUILD LOGS ─────────────────────────────────────────────────────────────────────
    const gayzonelogs = client.channels.cache.get("699324175965356184");
    // ─────────────────────────────────────────────────────────────────────────────────

    const embedColor = '#f70303'
    const deleteembed = new Discord.MessageEmbed()
        .setColor(embedColor)
        .setAuthor(`${messageDelete.author.tag} ` + `(${messageDelete.author.id})`, messageDelete.author.displayAvatarURL({format: "png"}))
        .setDescription(`Message was deleted in <#${messageDelete.channel.id.toString()}> \n **Content:** ${messageDelete.content}`)
        .setTimestamp();


    snipes[`${messageDelete.channel.id}`] = [`${messageDelete}`, `${messageDelete.author.username}`];
    fs.writeFile("../snipes.json", JSON.stringify(snipes), (err) => {
        if (err) console.log(err)
    });

    
    // ─── GUILDS ─────────────────────────────────────────────────────────────────────

    if (gayzone) {
        gayzonelogs.send(deleteembed)
    }


}