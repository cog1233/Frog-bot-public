const { Client, SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Pings the bot!'),
	async execute(interaction) {
		const ping = Date.now() - interaction.createdTimestamp;
    
    await interaction.reply(`Pong! Bot latency: ${ping}ms.`);
    
    console.log(`User ${interaction.user.username}#${interaction.user.discriminator} pinged the bot with a latency of ${ping}ms.`); 
    
	},
};