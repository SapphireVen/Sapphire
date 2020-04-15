const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  const embedColor = "#15dbf3"
  const embed = new Discord.MessageEmbed()
    .setColor(embedColor)
    .setDescription(`__**Sapphire's Features**__\n• Moderation\n• Memes\n\n**MODERATION COMMANDS REQUIRE MANAGE MESSAGES PERMISSION.**`)
    .setAuthor("Commands & Features")
    .addFields({
      name: 'Moderation Commands',
      value: '`-kick @user \n-ban @user \n-mute @user \n-unmute @user \n-lock (disables send messages for @everyone in current channel) \n-unlock (enables send messages for @everyone in current channel) \n-purge <integer>\n-slowmode <interval> `',
      inline: true
    }, {
      name: 'Fun Commands',
      value: '`-meme \n-8ball <question> \n-av/avatar @user \n-snipe \n-hack @user \n-howgay `'
    }, {
      name: 'Other',
      value: '`-whois @user`'
    })
    .addField('__**BOT PATCH NOTES (VERSION 0.001)**__', '• Added some moderation commands.')
    .setFooter("Remake of the Nexus bot. **CURRENTLY IN DEVELOPMENT!**")
  message.channel.send(embed).catch(console.error);


}