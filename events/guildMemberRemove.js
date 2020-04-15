const Discord = require('discord.js');
const moment = require('moment');
const today = moment(new Date());

module.exports = (client, guildMember) => {
    const embedcolor = '#15dbf3'

    // ─── DEFINED GUILDS ─────────────────────────────────────────────────────────────────────
    const gayzone = client.guilds.cache.get("699015211096473670");
    // ─────────────────────────────────────────────────────────────────────────────────

    // ─── GUILD LOGS ─────────────────────────────────────────────────────────────────────
    const gayzonelogs = client.channels.cache.get("699324175965356184");
    // ─────────────────────────────────────────────────────────────────────────────────
    
    // ─── MEMBER COUNT CHANNELS ─────────────────────────────────────────────────────────────────────
    const gzmembercount = client.channels.cache.get('699630100575944807')
    let memberCount = gayzone.memberCount;
    // ─────────────────────────────────────────────────────────────────────────────────

    const memberaddembed = new Discord.MessageEmbed()
        .setThumbnail(guildMember.user.displayAvatarURL({
            format: "png"
        }))
        .setAuthor("Sapphire Leave Logging")
        .setColor(embedcolor)
        .addField("__**ROLES**__", `${guildMember.roles.cache.map(role => role.toString()).join(", ")}`)


    // ─── GUILDS ─────────────────────────────────────────────────────────────────────

    if (gayzone) {
        const memberCount = gayzone.memberCount;
        memberaddembed.setDescription(`${guildMember.displayName} has left the server on ` + today.format('**LL**') + ` at ` + today.format('**LT**.') + `\n \n` + '`Server Member Count:`' + ` **${memberCount}**`)
        gzmembercount.setName("Member Count: " + `${memberCount}`)
        gayzonelogs.send(memberaddembed)
    }


}