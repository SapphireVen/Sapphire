const Discord = require('discord.js');

module.exports = (client, oldMember, newMember) => {

    const removedrolecolor = '#f70303'
    const addedrolecolor = '#15dbf3'
    const removedRoles = oldMember.roles.cache.filter(role => !newMember.roles.cache.has(role.id));
    const addedRoles = newMember.roles.cache.filter(role => !oldMember.roles.cache.has(role.id));

    // ─── DEFINED GUILDS ─────────────────────────────────────────────────────────────────────
    const gayzone = client.guilds.cache.get("699015211096473670");
    // ─────────────────────────────────────────────────────────────────────────────────

    // ─── GUILD LOGS ─────────────────────────────────────────────────────────────────────
    const gayzonelogs = client.channels.cache.get("699324175965356184");
    // ─────────────────────────────────────────────────────────────────────────────────


    const roleadded = new Discord.MessageEmbed()
        .setColor(addedrolecolor)
        .setDescription(`The role(s) ${addedRoles.map(r => `<@&${r.id}>`)} was added to ${oldMember.displayName}.`)
        .setTimestamp();

    const roleremoved = new Discord.MessageEmbed()
        .setColor(removedrolecolor)
        .setDescription(`The role(s) ${removedRoles.map(r => `<@&${r.id}>`)} was removed from ${oldMember.displayName}.`)
        .setTimestamp();


    // ─── GUILDS ─────────────────────────────────────────────────────────────────────

    if (gayzone) {
        if (removedRoles.size > 0) gayzonelogs.send(roleremoved);
        if (addedRoles.size > 0) gayzonelogs.send(roleadded);
    }




}