const Discord = require('discord.js');

module.exports = (client, role) => {
    const rolecreatecolor = "#000000"

    // ─── DEFINED GUILDS ─────────────────────────────────────────────────────────────────────
    const gayzone = client.guilds.cache.get("GUILD ID");
    // ─────────────────────────────────────────────────────────────────────────────────

    // ─── GUILD LOGS ─────────────────────────────────────────────────────────────────────
    const gayzonelogs = client.channels.cache.get("CHANNEL ID");
    // ─────────────────────────────────────────────────────────────────────────────────


    const roledeleted = new Discord.MessageEmbed()
        .setColor(rolecreatecolor)
        .setDescription(`Role was deleted: ${role.name}.`)

        
    // ─── GUILDS ─────────────────────────────────────────────────────────────────────

    if (gayzone) {
        gayzonelogs.send(roledeleted)
    }


}
