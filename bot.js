const { Client, GatewayIntentBits } = require('discord.js');
const { EmbedBuilder } = require('discord.js');
require('dotenv').config()

const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
		GatewayIntentBits.GuildMembers,
	],
});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

// Set the prefix
const prefixes = ('f.', 'F.');
client.on("messageCreate", (message) => {
  // Exit and stop if it's not there
  if (!message.content.startsWith(prefixes)) return;

  if (message.content.startsWith(`f.backflip`)) {
    console.log(`${message.author.tag} did a backflip`)
    const exampleEmbed = new EmbedBuilder()
        .setColor(0x0099FF)
        .setTitle(`${message.author.tag} is doing a backflip!`)
        .setImage('https://cdn.discordapp.com/attachments/963168488824922133/1032384666331783258/ezgif-2-2a153995e3.gif')
        message.channel.send({ embeds: [exampleEmbed] });
  } else

  if (message.content.startsWith(`${prefixes}ping`)) {
    console.log(`${message.author.tag} pinged`)
    message.channel.send(`${client.ws.ping} MS`);
  } else

  if (message.content.startsWith(`${prefixes}zoom`)) {
    console.log(`${message.author.tag} zoomed`)
    const exampleEmbed = new EmbedBuilder()
        .setColor(0x0099FF)
        .setTitle(`ZOOM`)
        .setImage('https://cdn.discordapp.com/attachments/963168488824922133/1032630790737121350/200.gif')
        message.channel.send({ embeds: [exampleEmbed] });
  }

});
client.login(process.env.token);