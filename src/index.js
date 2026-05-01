const { Client, Events, GatewayIntentBits } = require('discord.js');
require ('dotenv').config({ path: "../.env"});

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once(Events.ClientReady, c => {
    console.log(`Listo! Iniciado como ${c.user.tag} estoy en servidores: ${client.guilds.cache.size}`);
});

client.login(process.env.TOKEN);