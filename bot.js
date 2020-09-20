const Discord = require('discord.js');
const client = new Discord.client();

client.on('ready', () => {
console.log('Ready!');

});

client.on('message', message () => {
  if(message.content == 'ping') {
    message.reply('Pong');
  }
 });
 
 client.login(process.env.BOT_TOKEN);
