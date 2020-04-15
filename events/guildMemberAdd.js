const Discord = require('discord.js');

module.exports = (client, guildMember) => {
    const embedcolor = '#15dbf3'

    // ─── DEFINED GUILDS ─────────────────────────────────────────────────────────────────────
    const gayzone = client.guilds.cache.get("GUILD ID");
    // ─────────────────────────────────────────────────────────────────────────────────

    // ─── GUILD LOGS ─────────────────────────────────────────────────────────────────────
    const gayzonelogs = client.channels.cache.get("CHANNEL ID");
    // ─────────────────────────────────────────────────────────────────────────────────

    // ─── MEMBER COUNT CHANNELS ─────────────────────────────────────────────────────────────────────
    const gzmembercount = client.channels.cache.get('CHANNEL ID')
    let memberCount = gayzone.memberCount;
    // ─────────────────────────────────────────────────────────────────────────────────

    const memberaddembed = new Discord.MessageEmbed()
        .setThumbnail(guildMember.user.displayAvatarURL({
            format: "png"
        }))
        .setAuthor("Sapphire Join Logging")
        .setColor(embedcolor)


    // ─── GUILDS ─────────────────────────────────────────────────────────────────────

    if (gayzone) {
        const memberCount = gayzone.memberCount;
        memberaddembed.setDescription(`${guildMember.displayName} has joined the server  + `\n \n` + '`Server Member Count:`' + ` **${memberCount}**`)
        gzmembercount.setName("Member Count: " + `${memberCount}`)
        gayzonelogs.send(memberaddembed)
    }


}
