// Calling the package
const Discord = require('discord.js');
const bot = new Discord.Client();
const client = new Discord.Client();

// Listener Event: Message Received ( This will run every time a message is received)
bot.on('message', message => {

    // variables
    const sender = message.author; // The person who sent the message
    const msg = message.content.toUpperCase(); // Takes the message, and makes it all uppercase
    const prefix = '>' // The text before commands, can be customized

    // Ping / Pong command
    if (msg === prefix + 'PING') {
        message.channel.send('Pong!') // Sends a message to the channel, with the contents: "Pong!"

    }
    
    // Bot Info command
    if (msg === prefix + '2P1') {
        message.channel.send('2 + 1 is TWENTY ONE! (Not really, blame my 4 year old associate!) *easteregg*')
    }

    // Status
     bot.user.setStatus('idle')

    // Game & Streaming
    


});
// Game & Status
bot.on('ready', () => {
    bot.user.setPresence({ status: 'online', game: { name: "Transferring to XeliBot Pro", type: 0 } })
})
// Login
bot.login(process.env.BOT_TOKEN); // Bot Token
