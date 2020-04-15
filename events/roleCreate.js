const Discord = require('discord.js');

module.exports = (client, role) => {
    const rolecreatecolor = "#000000"

    // ─── DEFINED GUILDS ─────────────────────────────────────────────────────────────────────
    const gayzone = client.guilds.cache.get("699015211096473670");
    // ─────────────────────────────────────────────────────────────────────────────────

    // ─── GUILD LOGS ─────────────────────────────────────────────────────────────────────
    const gayzonelogs = client.channels.cache.get("699324175965356184");
    // ─────────────────────────────────────────────────────────────────────────────────


    const rolecreated = new Discord.MessageEmbed()
        .setColor(rolecreatecolor)
        .setDescription(`New role was created: ${role.toString()}.`)


    // ─── GUILDS ─────────────────────────────────────────────────────────────────────

    if (gayzone) {
        gayzonelogs.send(rolecreated)
    }
}