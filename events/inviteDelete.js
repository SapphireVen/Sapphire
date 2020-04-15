const Discord = require('discord.js');

module.exports = (invite) => {
    const invitedeletedocolor = "#f70303"

    // ─── DEFINED GUILDS ─────────────────────────────────────────────────────────────────────
    const gayzone = invite.guilds.cache.get("GUILD ID");
    // ─────────────────────────────────────────────────────────────────────────────────

    // ─── GUILD LOGS ─────────────────────────────────────────────────────────────────────
    const gayzonelogs = invite.channels.cache.get("CHANNEL ID");
    // ─────────────────────────────────────────────────────────────────────────────────


    const invitedelete = new Discord.MessageEmbed()
        .setColor(invitedeletedocolor)
        .setDescription(`Invite was deleted.`)


    // ─── GUILDS ─────────────────────────────────────────────────────────────────────

    if (gayzone) {
        gayzonelogs.send(invitedelete)
    }


}
