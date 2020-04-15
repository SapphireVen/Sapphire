const Discord = require('discord.js');

module.exports = (client, oldRole, newRole) => {
    if (oldRole.name === newRole.name) {
        return;
    }

    const rolecreatecolor = "#000000"

    // ─── DEFINED GUILDS ─────────────────────────────────────────────────────────────────────
    const gayzone = client.guilds.cache.get("699015211096473670");
    // ─────────────────────────────────────────────────────────────────────────────────

    // ─── GUILD LOGS ─────────────────────────────────────────────────────────────────────
    const gayzonelogs = client.channels.cache.get("699324175965356184");
    // ─────────────────────────────────────────────────────────────────────────────────


    const roleupdated = new Discord.MessageEmbed()
        .setColor(rolecreatecolor)
        .setDescription(`Role was updated from "${oldRole.name}" to "${newRole.name}".`)

        
    // ─── GUILDS ─────────────────────────────────────────────────────────────────────

    if (gayzone) {
        gayzonelogs.send(roleupdated)
    }





}