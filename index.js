const Discord = require("discord.js");

const astreminix = new Discord.Client();

function sleep(ms) {
return new Promise(resolve => setTimeout(resolve, ms));
}

client.on('ready', async () => {

astreminix.on('ready', async () => {

console.log(`Logged in as ${astreminix.user.username}, ready to get this bread.`);

});


astreminix.login(process.env.astreminix)
