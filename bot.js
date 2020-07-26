const Discord = require('discord.js');

const client = new Discord.Client(732749137975705680);

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if (message.content === 'ping') {

       message.reply('pong');

       }

});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.NzMyNzQ5MTM3OTc1NzA1Njgw.Xw5H0A.y0vHGGkEnz_qptBY3aWjDY6RWy0);//where BOT_TOKEN is the token of our bot
