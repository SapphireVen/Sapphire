const Discord = require('discord.js');
const moment = require('moment');
const today = moment(new Date());

module.exports = (invite) => {
    const invitedeletedocolor = "#f70303"

    // ─── DEFINED GUILDS ─────────────────────────────────────────────────────────────────────
    const gayzone = invite.guilds.cache.get("699015211096473670");
    // ─────────────────────────────────────────────────────────────────────────────────

    // ─── GUILD LOGS ─────────────────────────────────────────────────────────────────────
    const gayzonelogs = invite.channels.cache.get("699324175965356184");
    // ─────────────────────────────────────────────────────────────────────────────────


    const invitedelete = new Discord.MessageEmbed()
        .setColor(invitedeletedocolor)
        .setDescription(`Invite was deleted at ${today.format('**LT**')}.`)


    // ─── GUILDS ─────────────────────────────────────────────────────────────────────

    if (gayzone) {
        gayzonelogs.send(invitedelete)
    }


}