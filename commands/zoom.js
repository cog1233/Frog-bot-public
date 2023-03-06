const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('zoom')
		.setDescription('Makes you zoom!'),
	async execute(interaction) {
    const exampleEmbed = new EmbedBuilder()
        .setColor(0x77DD77)
        .setTitle(`ZOOM`)
        .setImage('https://cdn.discordapp.com/attachments/963168488824922133/1032630790737121350/200.gif')
        await interaction.reply({ embeds: [exampleEmbed] });;
	},
};