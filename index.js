const token = 'MTEzNDk1ODM0NDYwODY5MDE3Ng.GEs7bf.4kENKYhLjhPZei2d9yeYafI398y7wjXv14dS7c'; //Token that you saved in step 5 of this tutorial
const CLIENT_ID = 1134958344608690176
const { Client, Events, GatewayIntentBits } = require('discord.js');
// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// When the client is ready, run this code (only once)
// We use 'c' for the event parameter to keep it separate from the already defined 'client'
client.once(Events.ClientReady, c => {
	console.log(`Ready! Logged in as ${c.user.tag}`);
});

// Log in to Discord with your client's token
client.login(token);