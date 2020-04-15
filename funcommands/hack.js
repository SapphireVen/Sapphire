const Discord = require('discord.js');

exports.run = async (client, message, args) => {

    var embedcolor = '#ff4949'
    var member = message.mentions.users.first();
    const missingargs = new Discord.MessageEmbed()
        .setColor(embedcolor)
        .setAuthor('Nexus')
        .setDescription('This command is missing the argument: `@user`. Please make sure you are following the usage instructions:`-hack @user`')
        if (!member) return message.channel.send(missingargs)
        else {
            msg = await message.channel.send(`▛ Hacking into ${member}'s account..`);
            setTimeout(() => {
                msg.edit(`▜ Grabbed username + discriminator (ID: ${member.id})`);
            }, 2000);

            setTimeout(() => {
                msg.edit(`▟ Grabbing last sent message..`);
            }, 2500);
            setTimeout(() => {
                msg.edit(`▛ Grabbed last sent message. **Content:** I wanna feel your cum in my mouth.`);
            }, 3500);
            setTimeout(() => {
                msg.edit(`▜ Sexual activity between minors detected. Calling the FBI...`);
            }, 4000);
            setTimeout(() => {
                msg.edit(`▟ FBI contacted. Departure to ${member}'s house has started.`);
            }, 4200);
            setTimeout(() => {
                msg.edit(`▛ Proceeding... Grabbing friends list...`);
            }, 4400);
            setTimeout(() => {
                msg.edit(`▜ No friends detected.`);
            }, 4500);
            setTimeout(() => {
                msg.edit(`▛ Grabbing IP address.`);
            }, 4600);
            setTimeout(() => {
                msg.edit(`▜ IP address received. Logging onto the darkweb to post IP...`);
            }, 4700);
            setTimeout(() => {
                msg.edit(`▟ IP has been posted on the dark web.`);
            }, 4800);
            setTimeout(() => {
                msg.edit(`▛ Grabbing entire history of pictures sent...`);
            }, 4950);
            setTimeout(() => {
                msg.edit(`▜ Pictures received... Posting them on reddit and the dark web.`);
            }, 5000);
            setTimeout(() => {
                msg.edit(`▟ Pictures posted on the dark web and reddit.`);
            }, 5600);
            setTimeout(() => {
                msg.edit(`▛ Logging out of account...`);
            }, 20000);
            setTimeout(() => {
                msg.edit(`100% real hack has been completed. Expected arrival of the FBI... **1 hour**. Best be prepared, ${member}. >:)`);
            }, 22000);
        }
    }