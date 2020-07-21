const Discord = require("discord.js");

const client = new Discord.Client();

client.on('ready', async () => {

console.log(`Logged in as ${client.user.username}, ready to get this bread.`);

});


client.login(process.env.astreminix)
