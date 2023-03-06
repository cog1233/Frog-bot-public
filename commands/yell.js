const { Client, SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('yell')
    .setDescription('Yell at a meanie weanie')
    .addUserOption(option =>
      option.setName('target')
        .setDescription('Choose a user to yell at')
        .setRequired(true)
    ),
  async execute(interaction) {

    const yellothers = [`${interaction.user} screams at the top of their lungs towards <@${interaction.options.get('target').value}>, their voice echoing through the room.`,
    `${interaction.user} unleashes a furious bellow at <@${interaction.options.get('target').value}>, their veins throbbing from anger.`,
    `${interaction.user} shouts out a string of expletives at <@${interaction.options.get('target').value}>, their voice filled with rage.`,
    `${interaction.user} unleashes a deafening roar at <@${interaction.options.get('target').value}>, making them shrink in fear.`,
    `${interaction.user} lets out a furious cry of rage at <@${interaction.options.get('target').value}>, their face red from anger.`,
    `${interaction.user} screams in fury at <@${interaction.options.get('target').value}>, their voice filled with contempt.`,
    `${interaction.user} yells a string of slurs at <@${interaction.options.get('target').value}>, their voice filled with venom.`,
    `${interaction.user} unleashes an enraged yell at <@${interaction.options.get('target').value}>, their eyes bulging with anger.`,
    `${interaction.user} roars with anger at <@${interaction.options.get('target').value}>, their face contorted in a scowl.`,
    `${interaction.user} curses loudly towards <@${interaction.options.get('target').value}>, their face contorted in anger.`,
    `${interaction.user} unleashes a powerful yell of rage at <@${interaction.options.get('target').value}>, their voice booming from anger.`,
    `${interaction.user} unleashes an angry bellow at <@${interaction.options.get('target').value}>, their voice shaking with rage.`,
    `${interaction.user} screams with fury at <@${interaction.options.get('target').value}>, their face red from anger and disbelief.`,
    `${interaction.user} shouts a string of profanities at <@${interaction.options.get('target').value}>, their face contorted in rage.`,
    `${interaction.user} releases an angry roar of fury at <@${interaction.options.get('target').value}>, their face twisted in anger.`,
    `${interaction.user} lets out a loud and powerful yell of rage at <@${interaction.options.get('target').value}>, their voice filled with disgust.`,
    `${interaction.user} shouts out a string of menacing curses at <@${interaction.options.get('target').value}>, their eyes filled with contempt.`,
    `${interaction.user} growls an angry tirade at <@${interaction.options.get('target').value}>, their voice shaking with fury.`,
    `${interaction.user} shouts out a stream of insults at <@${interaction.options.get('target').value}>, their voice filled with malice.`,
    `${interaction.user} screams in rage towards <@${interaction.options.get('target').value}>, their veins pulsing with anger.`,
    `${interaction.user} unleashes a violent roar of anger at <@${interaction.options.get('target').value}>, their face contorted in rage.`,
    `${interaction.user} unleashes a powerful bellow of contempt towards <@${interaction.options.get('target').value}>, their eyes filled with hatred.`,
    `${interaction.user} screams in fury at <@${interaction.options.get('target').value}>, their voice devoid of compassion.`,
    `${interaction.user} lets out a menacing yell at <@${interaction.options.get('target').value}>, their face boiling over with rage.`,
    `${interaction.user} roars in anger towards <@${interaction.options.get('target').value}>, their face reddening with fury.`,
    `${interaction.user} yells a stream of violent curses at <@${interaction.options.get('target').value}>, their face twisted in rage.`,
    `${interaction.user} bellows a string of expletives at <@${interaction.options.get('target').value}>, their voice filled with ire.`,
    `${interaction.user} shouts furiously towards <@${interaction.options.get('target').value}>, their face red with anger.`,
    `${interaction.user} unleashes an angry scream of disdain at <@${interaction.options.get('target').value}>, their voice shaking with rage.`,
    `${interaction.user} releases a powerful bellow of rage at <@${interaction.options.get('target').value}>, their face twisted in a scowl.`,
    `${interaction.user} screams a tirade of expletives at <@${interaction.options.get('target').value}>, their veins throbbing with hatred.`,
    `${interaction.user} shouts a string of curses at <@${interaction.options.get('target').value}>, their eyes bulging with contempt.`,
    `${interaction.user} roars in contempt at <@${interaction.options.get('target').value}>, their voice filled with rage.`,
    `${interaction.user} unleashes a powerful yell of contempt at <@${interaction.options.get('target').value}>, their face twisted in anger.`,
    `${interaction.user} screams in fury towards <@${interaction.options.get('target').value}>, their voice shaking with rage.`,
    `${interaction.user} shouts a stream of slurs at <@${interaction.options.get('target').value}>, their face boiling with rage.`,
    `${interaction.user} lets out an angry bellow of rage at <@${interaction.options.get('target').value}>, their voice booming with anger.`,
    `${interaction.user} yells a string of profanities at <@${interaction.options.get('target').value}>, their eyes blazing with anger.`,
    `${interaction.user} screams a tirade of insults at <@${interaction.options.get('target').value}>, their face filled with anger.`,
    `${interaction.user} unleashes an angry roar of fury at <@${interaction.options.get('target').value}>, their face reddening with rage.`,
    `${interaction.user} bellows an angry tirade at <@${interaction.options.get('target').value}>, their mouth frothing as they speak.`,
    `${interaction.user} shouts a string of obscenities at <@${interaction.options.get('target').value}>, their voice laced with hatred.`,
    `${interaction.user} yells a stream of profanity at <@${interaction.options.get('target').value}>, their voice filled with malice.`,
    `${interaction.user} roars profanities at <@${interaction.options.get('target').value}>, their veins bulging with rage.`,
    `${interaction.user} screams expletives at <@${interaction.options.get('target').value}>, their voice shaking with anger.`,
    `${interaction.user} unleashes a powerful yell of rage at <@${interaction.options.get('target').value}>, their face devoid of emotion.`,
    `${interaction.user} releases an angry bellow of contempt towards <@${interaction.options.get('target').value}>, their voice dripping with venom.`,
    `${interaction.user} unleashes a powerful scream of disgust at <@${interaction.options.get('target').value}>, their expression twisted in rage.`,
    `${interaction.user} hollers out a string of curses at <@${interaction.options.get('target').value}>, their face contorted with rage.`,
    `${interaction.user} bellows in contempt towards <@${interaction.options.get('target').value}>, their face flooding with fury.`,
    `${interaction.user} yells a streak of obscenities at <@${interaction.options.get('target').value}>, their face contorted in anger.`,
    `${interaction.user} shouts out a tirade of expletives at <@${interaction.options.get('target').value}>, their voice laced with hatred.`,
    `${interaction.user} screams a stream of violent curses at {target9}, their veins throbbing with anger.`,
    `${interaction.user} unleashes a deafening yell of fury at <@${interaction.options.get('target').value}>, their eyes bulging with rage.`,
    `${interaction.user} roars a tirade of profanity at <@${interaction.options.get('target').value}>, their face reddening with fury.`,
    `<@${interaction.options.get('target').value}> is bombarded with a stream of expletives, as their voice is filled with rage.`,
    `A vicious tirade of insults is hurled at <@${interaction.options.get('target').value}>, with a contorted face of contempt.`,
    `A deafening bellow of hatred is unleashed towards <@${interaction.options.get('target').value}>, with a face filled with malice.`,
    `${interaction.user} screams a string of obscenities at <@${interaction.options.get('target').value}>, with a shaking voice of anger.`,
    `<@${interaction.options.get('target').value}> is shouted at with a stream of profanity, with a boiling face of rage from ${interaction.user}.`,
    `A tirade of expletives is bellowed at <@${interaction.options.get('target').value}>, with a dripping voice of venom from ${interaction.user}.`,
    `A powerful yell of contempt is let out towards <@${interaction.options.get('target').value}>, with a scowling face from ${interaction.user}.`,
    `${interaction.user} hollers out a stream of slurs at <@${interaction.options.get('target').value}>, with bulging eyes of hatred.`,
    `An angry roar of fury is released at <@${interaction.options.get('target').value}>, with throbbing veins of anger from ${interaction.user}.`,
    `${interaction.user} yells a string of menacing curses at <@${interaction.options.get('target').value}>, with a filled voice of ire.`,
    `${interaction.user} unleashes a powerful scream of rage at <@${interaction.options.get('target').value}>, with a twisted face of anger.`,
    `A stream of violent curses is screamed out at <@${interaction.options.get('target').value}>, with a voice filled with venom from ${interaction.user}.`,
    `${interaction.user} shouts a tirade of expletives at <@${interaction.options.get('target').value}>, with throbbing veins of anger.`,
    `A violent bellow of anger is released at <@${interaction.options.get('target').value}>, with bulging eyes of rage from ${interaction.user}.`,
    `${interaction.user} growls a stream of expletives at <@${interaction.options.get('target').value}>, with a reddening face of anger.`]

    const yellself = [`Yelling at yourself won't make your life better, you poor thing.`,
      `What an idiot, trying to yell himself out of depression, ha!`,
      `Yup, you are an idiot, trying to yell at yourself to make everything better, who do you think you are?`,
      `You think yelling at yourself would make you feel better? Wow, nobody even knows how much of a loser you are.`,
      `Yelling at yourself, what sort of madness is that? Find somebody else to yell at, you pathetic crybaby.`,
      `Hey, don't you think it's kinda pointless to yell at yourself? Nobody even knows how desperate you are.`,
      `How sad is your life, that even yelling at yourself doesn't make you feel better.`,
      `Yelling at yourself, oof, nobody even knows how lonely you are, nobody would even care.`,
      `Yelling at yourself won't get you anywhere, why don't you try finding somebody to talk to?`,
      `Maybe if you stop yelling at yourself and find somebody to confide in it'll make you feel better.`,
      `Makes sense that you're trying to yell at yourself, nobody even knows how sad and pathetic you are.`,
      `Yelling at yourself, you think that'll get you anywhere? Wow, nobody knows how stupid and desperate you are.`,
      `What a joke, you can't even yell at someone else and now you're trying to yell at yourself, unbelievable.`,
      `Yelling at yourself, oh wow, that's sad. Nobody even knows how vulnerable and insecure you are.`,
      `Y'know what? Maybe if you stop yelling at yourself and find somebody else to talk to it'll help a bit.`,
      `Yelling at yourself, so you're mad at someone else but you can't say it out loud, got it.`,
      `Yelling at yourself? Wow, why don't you stop and try seeking help, that nobody knows how uncool and depressed you are.`,
      `How sad are you, that you are so desperate to make yourself feel better, you resort to yelling at yourself?`,
      `Yelling at yourself won't help, maybe if you reach out to someone it'll make you feel better, brave man.`,
      `Why don't you stop yelling at yourself and start looking for help, yeah? That'll make you feel better.`,
      `Yelling at yourself isn't gonna help, why don't you try doing something with your time, something productive? That'll make you feel better.`]

    const yellbot = [`Yell at me one more time and I'm gonna fucking kill you!`,
      `I'm gonna break your face if you keep yelling at me.`,
      `What the fuck is wrong with you? Stop yelling at me!`,
      `If you think you can just come up and yell at me, you're wrong.`,
      `You're lucky I don't punch you right now. Stop yelling at me.`,
      `I'm gonna make you sorry if you keep yelling at me.`,
      `You want to yell? Come get some.`,
      `I'm gonna kick your ass if you try to yell at me again.`,
      `I swear to God, if you don't stop yelling at me I'm gonna fight you.`,
      `I'm gonna knock you the fuck out if you ever try to yell at me again.`,
      `You think you can just yell at me? Good luck with that.`,
      `You're a fucking idiot, you know that? You can't yell at me, you moron.`,
      `I'm not scared of your yelling, so give it up or else.`,
      `I'm gonna break your arm if you try to yell at me again.`,]

    const randomyell = Math.floor(Math.random() * yellothers.length);
    const randomyell2 = Math.floor(Math.random() * yellself.length);
    const randomyell3 = Math.floor(Math.random() * yellbot.length);

    if (interaction.options.get('target').value === interaction.user.id) {
      interaction.reply(yellself[randomyell2])
    } else if (interaction.options.get('target').value === interaction.client.user.id) {
      interaction.reply(yellbot[randomyell3])
    } else {
      interaction.reply(yellothers[randomyell])
    }

  },
};