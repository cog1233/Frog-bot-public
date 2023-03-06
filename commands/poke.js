const { Client, SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('poke')
    .setDescription('Pokes your victim')
    .addUserOption(option =>
      option.setName('target')
        .setDescription('Choose a user to poke')
        .setRequired(true)
    ),
  async execute(interaction) {

    const pokeothers = [`${interaction.user} playfully pokes <@${interaction.options.get('target').value}> with a grin on their face.`,
    `${interaction.user} pokes <@${interaction.options.get('target').value}> and laughs, clearly enjoying the playful moment.`,
    `With a mischievous glint in their eye, ${interaction.user} pokes <@${interaction.options.get('target').value}> and tries to stifle a giggle.`,
    `${interaction.user} gently pokes <@${interaction.options.get('target').value}> on the arm, enjoying the light-hearted moment.`,
    `With a quick poke, ${interaction.user} gets <@${interaction.options.get('target').value}>'s attention and flashes them a smile.`,
    `${interaction.user} reaches out and pokes <@${interaction.options.get('target').value}>, just trying to add a bit of fun to the day.`,
    `As ${interaction.user} pokes <@${interaction.options.get('target').value}>, they share a laugh and enjoy the moment of levity.`,
    `With a playful poke, ${interaction.user} lets <@${interaction.options.get('target').value}> know they're thinking of them.`,
    `As ${interaction.user} pokes <@${interaction.options.get('target').value}> on the side, they can't help but laugh at the silly moment.`,
    `With a poke on the shoulder, ${interaction.user} reminds <@${interaction.options.get('target').value}> that they're always there for them.`,
    `${interaction.user} pokes <@${interaction.options.get('target').value}> and makes a silly face, clearly in the mood for some fun.`,
    `As ${interaction.user} pokes <@${interaction.options.get('target').value}>, they break out into a playful dance, drawing laughter from everyone around.`,
    `With a ticklish poke, ${interaction.user} sends <@${interaction.options.get('target').value}> into a fit of giggles.`,
    `With a playful poke, ${interaction.user} teases <@${interaction.options.get('target').value}> and invites them to join in on the fun.`,
    `${interaction.user} pokes <@${interaction.options.get('target').value}> and then runs away, daring them to try and catch them.`,
    `With a quick poke and a wink, ${interaction.user} hints to <@${interaction.options.get('target').value}> at the playful shenanigans to come.`,
    `As ${interaction.user} pokes <@${interaction.options.get('target').value}> more and more, they both burst into uncontrollable laughter.`,
    `With a series of playful pokes, ${interaction.user} and <@${interaction.options.get('target').value}> engage in a lighthearted game of poking tag.`,
    `${interaction.user} pokes <@${interaction.options.get('target').value}> and then jumps back, ready for a round of playful banter.`,
    `With a silly voice and a playful poke, ${interaction.user} reminds <@${interaction.options.get('target').value}> that life's too short to be serious all the time.`]

    const pokeself = [`Awwwh you wanna poke yourself? That's so cute.`,
      `Since you get 0 bitches, you've settled for poking yourself, honestly that's so sad.`,
      `bwo twied poking themsewves, yikie wikies.`,
      `Find someone else, you maidenless, lonely bitch.`,
      `Go play with yourself elsewhere, that's so gross.`]

    const pokebot = [`Aint nobody poking me.`,
      `Eat shit, stub your toe and cry.`,
      `Did you really think I wouldn't notice you trying to poke me? You're fucking pathetic.`,
      `I'm not a toy, back the fuck off.`,
      `Ahah. hahhaha. haha. hah. I'm gonna poke YOU!`,
      `You're a fucking idiot, you know that? You can't poke me, you moron.`,
      `Poke me one more time and I'm gonna fucking kill you.`,
      `You try to poke me again and I'm gonna break your fingers.`,
      `What are you, some kind of masochist? Stop poking me.`,
      `If you touch me again, I'm gonna make you regret it.`,
      `I'll break your arm if you try to poke me again.`,
      `You're lucky I don't punch you right now. Stop poking me.`,
      `I'm gonna make you sorry if you keep poking me.`,
      `You want to poke me? Come get some.`,
      `I'm gonna break your face if you try to poke me again.`,
      `I'm warning you, stop poking me or you're gonna regret it.`]

      const randompoke = Math.floor(Math.random() * pokeothers.length);
      const randompoke2 = Math.floor(Math.random() * pokeself.length);
      const randompoke3 = Math.floor(Math.random() * pokebot.length);

    if (interaction.options.get('target').value === interaction.user.id) {
      interaction.reply(pokeself[randompoke2])
    } else if (interaction.options.get('target').value === interaction.client.user.id) {
      interaction.reply(pokebot[randompoke3])
    } else {
      interaction.reply(pokeothers[randompoke])
    }

  },
};