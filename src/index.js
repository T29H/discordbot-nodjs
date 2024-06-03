require('dotenv').config();

const { Client, IntentsBitField } = require('discord.js');

const client = new Client({
    intents: [
		IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.GuildMembers,
		IntentsBitField.Flags.MessageContent,
    ]
});

client.on('ready', (c) => {
    console.log(`🌠 ${c.user.tag} online!`)
});

client.on('messageCreate', (message) => {
    if (message.content === 'hello') {
        message.reply('Hey!');
    }
    console.log(message);
});

client.login(process.env.DISCORD_TOKEN);