const Discord = require('discord.js');

module.exports = (invite) => {
    const invitecreatedcolor = "#15dbf3"

    // ─── DEFINED GUILDS ─────────────────────────────────────────────────────────────────────
    const gayzone = invite.guilds.cache.get("GUILD ID");
    // ─────────────────────────────────────────────────────────────────────────────────

    // ─── GUILD LOGS ─────────────────────────────────────────────────────────────────────
    const gayzonelogs = invite.channels.cache.get("CHANNEL ID");
    // ─────────────────────────────────────────────────────────────────────────────────


    const invitecreate = new Discord.MessageEmbed()
        .setColor(invitecreatedcolor)
        .setDescription(`Invite was created.`)

        
    // ─── GUILDS ─────────────────────────────────────────────────────────────────────

    if (gayzone) {
        gayzonelogs.send(invitecreate)
    }

    
}
