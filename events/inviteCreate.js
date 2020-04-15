const Discord = require('discord.js');
const moment = require('moment');
const today = moment(new Date());

module.exports = (invite) => {
    const invitecreatedcolor = "#15dbf3"

    // ─── DEFINED GUILDS ─────────────────────────────────────────────────────────────────────
    const gayzone = invite.guilds.cache.get("699015211096473670");
    // ─────────────────────────────────────────────────────────────────────────────────

    // ─── GUILD LOGS ─────────────────────────────────────────────────────────────────────
    const gayzonelogs = invite.channels.cache.get("699324175965356184");
    // ─────────────────────────────────────────────────────────────────────────────────


    const invitecreate = new Discord.MessageEmbed()
        .setColor(invitecreatedcolor)
        .setDescription(`Invite was created at ${today.format('**LT**')}.`)

        
    // ─── GUILDS ─────────────────────────────────────────────────────────────────────

    if (gayzone) {
        gayzonelogs.send(invitecreate)
    }

    
}