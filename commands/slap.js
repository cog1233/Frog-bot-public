const { Client, SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('slap')
    .setDescription('Slaps your victim')
    .addUserOption(option =>
      option.setName('target')
        .setDescription('Choose a user to slap')
        .setRequired(true)
    ),
  async execute(interaction) {

    const slapothers = [`${interaction.user} grabs <@${interaction.options.get('target').value}> and slaps them so hard, it echoes through the room.`,
    `${interaction.user} grabs <@${interaction.options.get('target').value}>'s face and viciously slaps them with all their might.`,
    `${interaction.user} throws out their hand and slaps <@${interaction.options.get('target').value}> hard enough to make their ears ring.`,
    `${interaction.user} delivers a harsh, violent slap to <@${interaction.options.get('target').value}>'s face.`,
    `${interaction.user} slaps <@${interaction.options.get('target').value}> with a loud crack, leaving a deep red mark on their skin.`,
    `${interaction.user} smacks <@${interaction.options.get('target').value}> with a loud, sharp slap, making them yelp in pain and curse.`,
    `${interaction.user} grabs <@${interaction.options.get('target').value}> and sends them flying with a hard slap.`,
    `${interaction.user} delivers an aggressive, brutal slap to <@${interaction.options.get('target').value}>'s cheek.`,
    `${interaction.user} punches <@${interaction.options.get('target').value}> in the face and yells profanities at them.`,
    `${interaction.user} slaps <@${interaction.options.get('target').value}> with enough force to make them stumble back.`,
    `${interaction.user} screams obscenities at <@${interaction.options.get('target').value}> before delivering a powerful, angry slap.`,
    `${interaction.user} delivers a hard, violent slap that leaves a deep red mark on <@${interaction.options.get('target').value}>'s skin.`,
    `${interaction.user} slaps <@${interaction.options.get('target').value}> with a loud thud, leaving a deep red mark on their face.`,
    `${interaction.user} knocks <@${interaction.options.get('target').value}> out with a hard slap.`,
    `${interaction.user} grabs <@${interaction.options.get('target').value}>'s face and violently slaps them with all their strength.`,
    `${interaction.user} slaps <@${interaction.options.get('target').value}> hard enough to make them see stars.`,
    `${interaction.user} delivers a harsh, vicious slap to <@${interaction.options.get('target').value}>'s face.`,
    `${interaction.user} smacks <@${interaction.options.get('target').value}> with a loud, sharp slap, making them yelp in pain and swear.`,
    `${interaction.user} knocks <@${interaction.options.get('target').value}> off their feet with a hard slap.`,
    `${interaction.user} delivers an intense, brutal slap to <@${interaction.options.get('target').value}>'s cheek.`,
    `${interaction.user} punches <@${interaction.options.get('target').value}> hard in the face and calls them demeaning names.`,
    `${interaction.user} slaps <@${interaction.options.get('target').value}> with enough force to make them fall down.`,
    `${interaction.user} screams expletives at <@${interaction.options.get('target').value}> before delivering a fierce, angry slap.`,
    `${interaction.user} delivers a hard, violent slap that leaves a burning red mark on <@${interaction.options.get('target').value}>'s skin.`,
    `${interaction.user} slaps <@${interaction.options.get('target').value}> with a loud thud, leaving a deep red welt on their face.`,
    `${interaction.user} slaps <@${interaction.options.get('target').value}> so hard, it leaves them dazed.`,
    `${interaction.user} brutally slaps <@${interaction.options.get('target').value}>'s face with all their strength.`,
    `${interaction.user} slaps <@${interaction.options.get('target').value}> hard enough to make them deafen.`,
    `${interaction.user} delivers a harsh, vicious slap to <@${interaction.options.get('target').value}>'s face with a string of curses.`,
    `${interaction.user} smacks <@${interaction.options.get('target').value}> with a loud, sharp slap, making them yelp in pain and swear profusely.`,
    `${interaction.user} knocks <@${interaction.options.get('target').value}> unconscious with a hard slap.`,
    `${interaction.user} delivers an aggressive, brutal slap to <@${interaction.options.get('target').value}>'s cheek with a string of curses.`,
    `${interaction.user} punches <@${interaction.options.get('target').value}> in the face and shouts a slur at them.`,
    `${interaction.user} slaps <@${interaction.options.get('target').value}> with enough force to make them fall to their knees.`,
    `${interaction.user} screams obscenities at <@${interaction.options.get('target').value}> before delivering a fierce, violent slap.`,
    `${interaction.user} slaps <@${interaction.options.get('target').value}> with a loud crack, leaving a red mark on their cheek.`,
    `${interaction.user} gives <@${interaction.options.get('target').value}> a hard slap across the face.`,
    `${interaction.user} slaps <@${interaction.options.get('target').value}> so hard, the sound echoes through the room.`,
    `${interaction.user} throws their hand out and lands a hard slap on <@${interaction.options.get('target').value}>'s face.`,
    `${interaction.user} grabs <@${interaction.options.get('target').value}> by the collar and delivers an angry slap to their face.`,
    `${interaction.user} slaps <@${interaction.options.get('target').value}> with so much force, it sends them reeling.`,
    `${interaction.user} grabs <@${interaction.options.get('target').value}>'s face and slaps them with all their might.`,
    `${interaction.user} delivers an aggressive slap to <@${interaction.options.get('target').value}>'s cheek, followed by a stern look.`,
    `${interaction.user} smacks <@${interaction.options.get('target').value}> with a loud slap, making them yelp in pain.`,
    `<@${interaction.options.get('target').value}> recoils in shock as ${interaction.user} slaps them hard.`,
    `${interaction.user} delivers a stinging slap to <@${interaction.options.get('target').value}>'s face.`,
    `${interaction.user} makes a loud, sharp sound as they slap <@${interaction.options.get('target').value}>.`,
    `<@${interaction.options.get('target').value}> cries out in pain as ${interaction.user} violently slaps them.`,
    `${interaction.user} quickly throws their hand out and slaps <@${interaction.options.get('target').value}> in the face.`,
    `${interaction.user} grabs <@${interaction.options.get('target').value}>'s collar and delivers a sharp slap to their face.`,
    `<@${interaction.options.get('target').value}> jumps back in surprise as ${interaction.user} slaps them hard.`,
    `${interaction.user} strikes <@${interaction.options.get('target').value}> across the face with an open palm, leaving a searing pain in their cheek.`,
    `${interaction.user} delivers a resounding slap to <@${interaction.options.get('target').value}>'s cheek, causing their head to jerk to the side.`,
    `${interaction.user} snaps their hand forward, slapping <@${interaction.options.get('target').value}> with a force that rattles their teeth.`,
    `${interaction.user} whips their hand through the air, landing a sharp slap on <@${interaction.options.get('target').value}>'s face that leaves a red welt.`,
    `${interaction.user} smacks <@${interaction.options.get('target').value}> hard in the face, causing their eyes to water and their nose to bleed.`,
    `${interaction.user} raises their hand and delivers a resolute slap to <@${interaction.options.get('target').value}>'s cheek, showing their disapproval.`,
    `${interaction.user} lands a swift and powerful slap to <@${interaction.options.get('target').value}>'s face, causing a loud crack to echo through the room.`,
    `${interaction.user} swings their hand with purpose, striking <@${interaction.options.get('target').value}> on the cheek with a loud thwack.`,
    `${interaction.user} sharply slaps <@${interaction.options.get('target').value}> across the face, causing their head to whip around and their eyes to widen in shock.`,
    `${interaction.user} delivers a firm and audible slap to <@${interaction.options.get('target').value}>'s face, leaving behind a stinging sensation and a faint red mark.`,
    `The sound of flesh meeting flesh echoes through the room as ${interaction.user} lands a hard slap on <@${interaction.options.get('target').value}>'s cheek.`,
    `${interaction.user} delivers a sharp blow to <@${interaction.options.get('target').value}>'s face, leaving a handprint that slowly turns red.`,
    `Without warning, ${interaction.user} strikes <@${interaction.options.get('target').value}> across the face with an open palm, sending them stumbling backwards.`,
    `In a fit of rage, ${interaction.user} slaps <@${interaction.options.get('target').value}> so hard that their head snaps to the side.`,
    `${interaction.user} backhands <@${interaction.options.get('target').value}> with a resounding crack, leaving a red mark on their cheek.`,
    `With a quick, decisive motion, ${interaction.user} slaps <@${interaction.options.get('target').value}> across the face, leaving them dazed and disoriented.`,
    `${interaction.user} smacks <@${interaction.options.get('target').value}> with an open palm, causing their head to whip around.`,
    `Without a word, ${interaction.user} delivers a stinging slap to <@${interaction.options.get('target').value}>'s face, leaving them reeling.`,
    `With a look of disgust, ${interaction.user} slaps <@${interaction.options.get('target').value}> across the face, making them flinch.`,
    `${interaction.user} lands a solid slap on <@${interaction.options.get('target').value}>'s cheek, causing them to stumble backwards in shock.`]

    const slapself = [`Why would you even think of slapping yourself? That's just sad.`,
      `You think slapping yourself will make you feel better? You're a joke.`,
      `What did you do to deserve a slap? You're a fucking loser.`,
      `You really want to slap yourself, you masochistic piece of shit?`,
      `Go ahead and slap yourself if you want, it won't make a difference anyway.`,
      `Slapping yourself won't make the pain go away, you fucking moron.`,
      `What, you think slapping yourself will help? You're an idiot.`,
      `Slapping yourself, are you trying to hurt yourself? You're a fucking loser.`,
      `You're so desperate for attention you're trying to slap yourself? That's pathetic.`,
      `Go ahead and slap yourself, it won't hurt any more than your feelings already are.`]

    const slapbot = [`I dare you to try and slap me. Just try it, I dare you.`,
      `What the fuck? You really think you can just come up and slap me like that?`,
      `You want a slap? Come get it.`,
      `You want to slap me, huh? Let's go!`,
      `I'm gonna slap you so hard you'll be seeing stars for weeks.`,
      `You're lucky I don't slap you right now, you little shit.`,
      `I'm gonna knock you the fuck out if you ever try to slap me again.`,
      `I'm not a punching bag, back off before I slap you!`,
      `You even think about slapping me and I'll fucking end you.`,
      `Try it and see what happens. I promise you won't like it.`]

      const randomslap = Math.floor(Math.random() * slapothers.length);
      const randomslap2 = Math.floor(Math.random() * slapself.length);
      const randomslap3 = Math.floor(Math.random() * slapbot.length);

    if (interaction.options.get('target').value === interaction.user.id) {
      interaction.reply(slapself[randomslap2])
    } else if (interaction.options.get('target').value === interaction.client.user.id) {
      interaction.reply(slapbot[randomslap3])
    } else {
      interaction.reply(slapothers[randomslap])
    }

  },
};