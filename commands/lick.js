const { Client, SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('lick')
    .setDescription('Use this to lick your prey ;)')
    .addUserOption(option =>
      option.setName('target')
        .setDescription('Choose a user to lick')
        .setRequired(true)
    ),
  async execute(interaction) {

    const lickothers = [`${interaction.user} sneakily licks <@${interaction.options.get('target').value}>'s nose, so adorable!`,
    `${interaction.user} affectionately licks <@${interaction.options.get('target').value}>'s face, what a sweetie!`,
    `${interaction.user} curiously licks <@${interaction.options.get('target').value}>'s ear, how silly!`,
    `${interaction.user} gives <@${interaction.options.get('target').value}> a friendly lick, making everyone in the room feel awkward!`,
    `${interaction.user} slobbers all over <@${interaction.options.get('target').value}>'s face, proving that dogs really are man's best friend.`,
    `${interaction.user} licks <@${interaction.options.get('target').value}> as a sign of affection, or maybe just because they taste like bacon.`,
    `${interaction.user} gives <@${interaction.options.get('target').value}> a loving lick, leaving a slobbery surprise that will make them think twice before leaving food out again.`,
    `${interaction.user} playfully licks <@${interaction.options.get('target').value}>, proving that sometimes the best way to show love is through a wet, sloppy kiss.`,
    `${interaction.user} enthusiastically licks <@${interaction.options.get('target').value}>, as if they were a tasty popsicle on a hot summer day.`,
    `${interaction.user} licks <@${interaction.options.get('target').value}> like it's their job, leaving them wondering if they should be paying for this kind of service.`,
    `${interaction.user} gives <@${interaction.options.get('target').value}> a big, slobbery kiss that makes them feel like they just got slimed by a giant snail.`,
    `${interaction.user} licks <@${interaction.options.get('target').value}> so much that they start to wonder if they've been mistaken for a giant lollipop.`,
    `${interaction.user} licks <@${interaction.options.get('target').value}> as if their life depends on it, which is a good thing, because it's the only way they'll get their daily dose of affection.`,
    `${interaction.user} licks <@${interaction.options.get('target').value}> with such enthusiasm, it's like they're trying to give them a full-body bath with their tongue.`,
    `${interaction.user} takes licking <@${interaction.options.get('target').value}> to a whole new level, proving that they're the ultimate multitasker by simultaneously giving kisses and cleaning up spills.`,
    `${interaction.user} licks <@${interaction.options.get('target').value}> as if they were a toad, which is both adorable and a little bit gross at the same time.`,
    `${interaction.user} licks <@${interaction.options.get('target').value}> so much, they start to feel like they're part of a bizarre ASMR video.`,
    `${interaction.user} gives <@${interaction.options.get('target').value}> a few playful licks, reminding them that sometimes the best things in life are a little bit messy.`,
    `<@${interaction.options.get('target').value}> giggles as ${interaction.user} licks their nose, tickling them in the process.`,
    `${interaction.user} gives <@${interaction.options.get('target').value}> a gentle lick on the hand, showing their appreciation for a good scratch.`,
    `<@${interaction.options.get('target').value}> can't help but smile as ${interaction.user} gives them a loving lick on the cheek.`,
    `${interaction.user} licks <@${interaction.options.get('target').value}>'s forehead, leaving behind a wet spot and a feeling of warmth.`,
    `<@${interaction.options.get('target').value}> laughs as ${interaction.user} playfully licks their toes, tickling them in the process.`,
    `${interaction.user} gives <@${interaction.options.get('target').value}> a few affectionate licks on the neck, showing their love in a unique way.`,
    `<@${interaction.options.get('target').value}> feels loved and comforted as ${interaction.user} licks their hair, almost like a grooming ritual.`,
    `${interaction.user} licks <@${interaction.options.get('target').value}>'s arm, leaving behind a trail of slobber and a feeling of closeness.`,
    `<@${interaction.options.get('target').value}> playfully scolds ${interaction.user} for giving them a slobbery lick on the nose, but secretly loves the attention.`,
    `${interaction.user} gives <@${interaction.options.get('target').value}> a few playful licks on the ear, making them feel like they have a furry little companion.`,]

    const lickself = [`Awwwh, you wanna lick yourself? That's so cute.`,
      `Licking yourself is kinda weirddd, find someone else to smear your saliva on!`,
      `Stop licking yourself, go put your so called brain to use.`,
      `Woah there, what are you doing.`,
      `Shouldd I let you lick yourselff? Hmmm, mmmm, no.`]

    const lickbot = [`Your breath stinks, get it the fuck away from me.`,
      `Aint no way bro just tried to lick me.`,
      `Do you have a licking kink?? Aw, cute. But I'm not the one. Sorry, not sorry.`,
      `Go lick yourself.`,
      `Go lick someone else, or I'm gonna start licking you. Jk, you wish. You desperate little bitch.`,
      `You lick me one more time and I'm gonna kick your ass.`,
      `I'm gonna sue you if you keep licking me.`,
      `Get the fuck away from me, you little pervert.`,
      `If you come near me with your tongue again, I'm gonna punch you.`,
      `You can just forget about licking me, it ain't gonna happen.`,
      `I'm gonna kick your ass if you try to lick me again.`,
      `What the hell is wrong with you? Stop licking me!`,
      `I'm gonna call the police if you don't stop licking me.`,
      `I swear to God, if you don't stop licking me I'm gonna fight you.`,
      `You want a licking? I'll give you one you won't forget.`]

    const randomlick = Math.floor(Math.random() * lickothers.length);
    const randomlick2 = Math.floor(Math.random() * lickself.length);
    const randomlick3 = Math.floor(Math.random() * lickbot.length);

    if (interaction.options.get('target').value === interaction.user.id) {
      interaction.reply(lickself[randomlick2])
    } else if (interaction.options.get('target').value === interaction.client.user.id) {
      interaction.reply(lickbot[randomlick3])
    } else {
      interaction.reply(lickothers[randomlick])
    }

  },
};