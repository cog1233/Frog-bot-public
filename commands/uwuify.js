const { Client, SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('uwuify')
    .setDescription('UwUify a message')
    .addStringOption(option =>
      option.setName('message')
        .setDescription('The message to uwuify')
        .setRequired(true)
    ),
  async execute(interaction) {
    const message = interaction.options.getString('message');
    const uwuify1 = message.replace(/\. /g, '~ ')
    const uwuify2 = uwuify1.replace(/, /g, '~ ')
    const uwuify3 = uwuify2.replace(/- /g, '~ ')
    const uwuify4 = uwuify3.replace(/\? /g, '~ ')
    const uwuify5 = uwuify4.replace(/hurt/g, 'hUWUrt')
    const uwuify6 = uwuify5.replace(/kill/g, 'hwuwrt')
    const uwuify7 = uwuify6.replace(/you/g, 'you<3')
    const uwuify8 = uwuify7.replace(/r/g, 'w')
    const uwuify9 = uwuify8.replace(/l/g, 'w')
    const uwuify10 = uwuify9.replace(/uwu/g, 'UWU')
    const uwuify11 = uwuify10.replace(/owo/g, 'OWO')
    const uwuify12 = uwuify11.replace(/;-;/g, '(-_-)')
    const uwuify13 = uwuify12.replace(/-_-/g, '(-_-)')
    const uwuify14 = uwuify13.replace(/:o/g, '※(^o^)/※')
    const uwuify15 = uwuify14.replace(/:0/g, '※(^o^)/※')
    const uwuify16 = uwuify15.replace(/:\\\\\)/g, '(｡◕‿‿◕｡)')
    const uwuify17 = uwuify16.replace(/:>/g, '(｡◕‿‿◕｡)')
    const uwuify18 = uwuify17.replace(/:</g, '(︶︹︶)')
    const uwuify19 = uwuify18.replace(/:3/g, '(・3・)')
    const uwuify20 = uwuify19.replace(/:D/g, '(ﾉ◕ヮ◕)ﾉ*:・ﾟ✧')
    const uwuify21 = uwuify20.replace(/\._\./g, '(っ´ω`c)')
    const uwuify22 = uwuify21.replace(/fuck/g, 'fwick')
    const uwuify23 = uwuify22.replace(/shit/g, '*poops*')
    const uwuify24 = uwuify23.replace(/wtf/g, 'whawt the fwick')
    const uwuify25 = uwuify24.replace(/wth/g, 'whawt the hecc')
    const uwuify26 = uwuify25.replace(/hell/g, 'hecc')

    interaction.reply(uwuify26)
  },
};