const Discord = require("discord.js");
const fs = require("fs");
const client = new Discord.Client();


fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    const event = require(`./events/${file}`)
    let eventName = file.split(".")[0];
    console.log(`**Attempting to load event ${eventName}**`);
    client.on(eventName, event.bind(null, client));
  });
});



fs.readdir("./commands/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/${file}`);
    let commandName = file.split(".")[0];
    console.log(`Attempting to load command ${commandName}`);
    client.commands.set(commandName, props);
  });
});

fs.readdir("./admincommands/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props1 = require(`./admincommands/${file}`);
    let commandName2 = file.split(".")[0];
    console.log(`Attempting to load command ${commandName2}`);
    client.commands.set(commandName2, props1);
  });
});

fs.readdir("./funcommands/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props2 = require(`./funcommands/${file}`);
    let commandName3 = file.split(".")[0];
    console.log(`Attempting to load command ${commandName3}`);
    client.commands.set(commandName3, props2);
  });
});

client.on("ready", () => {
  client.user.setStatus('Online')
  client.user.setActivity("ACTIVITY);
  console.log("BOT NAME has come online.");
});

client.login("TOKEN");
