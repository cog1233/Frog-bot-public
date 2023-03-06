const { EmbedBuilder, SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('backflip')
		.setDescription('Makes you do a backflip!'),
	async execute(interaction) {
		const exampleEmbed = new EmbedBuilder()
        .setColor(0x77DD77)
        .setTitle(`${interaction.user.username}#${interaction.user.discriminator} is doing a backflip!`)
        .setImage('https://cdn.discordapp.com/attachments/963168488824922133/1032384666331783258/ezgif-2-2a153995e3.gif')
        await interaction.reply({ embeds: [exampleEmbed] });
	},
};