const { Client, SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('hug')
    .setDescription('Hugs a user')
    .addUserOption(option =>
      option.setName('target')
        .setDescription('Choose a user to hug')
        .setRequired(true)
    ),
  async execute(interaction) {
    const hugothers = [`${interaction.user} hugs <@${interaction.options.get('target').value}>, awh.`,
    `${interaction.user} gives <@${interaction.options.get('target').value}> a big fat snuggly wuggly, these two are adorable.`,
    `${interaction.user} tightly cuddles <@${interaction.options.get('target').value}>. Look at these two, they're so cute together.`,
    `${interaction.user} wraps their arms around <@${interaction.options.get('target').value}> and gives them a warm, cozy hug.`,
    `${interaction.user} pulls <@${interaction.options.get('target').value}> in for a tight squeeze. These two are so affectionate!`,
    `${interaction.user} showers <@${interaction.options.get('target').value}> with affectionate hugs. It's clear these two have a special bond.`,
    `${interaction.user} envelops <@${interaction.options.get('target').value}> in a warm embrace, and it's clear they don't want to let go.`,
    `${interaction.user} snuggles up to <@${interaction.options.get('target').value}> for a loving hug. You can feel the warmth and affection between them.`,
    `${interaction.user} hugs <@${interaction.options.get('target').value}> so tightly, it's like they're trying to merge into one.`,
    `${interaction.user} nuzzles into <@${interaction.options.get('target').value}>'s neck for a sweet, intimate hug.`,
    `${interaction.user} embraces <@${interaction.options.get('target').value}> with a gentle, loving hug. It's clear how much they care for each other.`,
    `${interaction.user} wraps <@${interaction.options.get('target').value}> up in a warm, fuzzy hug. You can't help but feel happy watching these two interact.`,
    `${interaction.user} gives <@${interaction.options.get('target').value}> a hug that's filled with so much love, it's almost overwhelming.`,
    `With a big smile, ${interaction.user} embraces <@${interaction.options.get('target').value}> in a warm hug.`,
    `As ${interaction.user} hugs <@${interaction.options.get('target').value}>, they exchange a knowing look - these two have a special bond.`,
    `It's hard not to smile as you watch ${interaction.user} share a cozy hug with <@${interaction.options.get('target').value}>.`,
    `As ${interaction.user} embraces <@${interaction.options.get('target').value}>, you can feel the love and warmth radiating between them.`,
    `With a gentle touch, ${interaction.user} draws <@${interaction.options.get('target').value}> in for a comforting hug.`,
    `There's something so sweet and genuine about the way ${interaction.user} hugs <@${interaction.options.get('target').value}>.`,
    `As ${interaction.user} wraps their arms around <@${interaction.options.get('target').value}>, you can tell <@${interaction.options.get('target').value}> feels safe and loved in their embrace.`,
    `Watching ${interaction.user} hug <@${interaction.options.get('target').value}> feels like watching two puzzle pieces fit together perfectly.`,
    `You can't help but feel your own heart swell with warmth as ${interaction.user} shares a loving embrace with <@${interaction.options.get('target').value}>.`,
    `There's no denying the bond between ${interaction.user} and <@${interaction.options.get('target').value}> as ${interaction.user} hugs them - it's like they were made for each other.`]
    const hugself = [`I understand you're desperate for affection, but you can't hug yourself, you idiot.`,
      `Whilst I appreciate the sentiment, you can't hug yourself, you moron.`,
      `Find another human to hug, you pathetic loser.`,
      `What is wrong with you? Did you really just try to hug yourself? You're a fucking idiot.`]
    const hugbot = [`Don't touch me, you whore.`,
      `Get your disgusting ass hands off of me, little bitch.`,
      `Go hug a human, you desperate slut.`,
      `Keep your hands to yourself, I'm not hugging you.`,
      `If you try to hug me, I'm gonna break your neck.`,
      `I'm gonna make you sorry if you keep trying to hug me.`,
      `You think I'm gonna let you hug me? Think again.`,
      `I'm gonna slap you if you try to hug me again.`,
      `You want to hug me? Come and get it.`,
      `I'm gonna kick your ass if you try to hug me.`,
      `I'm gonna break your face if you keep trying to hug me.`,
      `I'm warning you, don't hug me or I'll make you regret it.`,
      `You're lucky I don't punch you right now. Stop trying to hug me.`]

      const randomhug =  await Math.floor(Math.random() * hugothers.length);
      const randomhug2 = await Math.floor(Math.random() * hugself.length);
      const randomhug3 = await Math.floor(Math.random() * hugbot.length);

      if (interaction.options.get('target').value === interaction.user.id) {
        interaction.reply(hugself[randomhug2])
      } else if (interaction.options.get('target').value === interaction.client.user.id) {
        interaction.reply(hugbot[randomhug3])
      } else {
        interaction.reply(hugothers[randomhug])
      }

  },
};