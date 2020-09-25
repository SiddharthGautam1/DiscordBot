const Discord = require('discord.js');
const client = new Discord.Client();
 
const prefix = '-';
 

 

client.once('ready', () => {
    console.log('OPBot is ready to rock!');
});
 
client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;
 
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
 
    client.on('message', message =>{
        if(!message.content.startsWith(prefix) || message.author.bot) return;
    
        const args = message.content.slice(prefix.length).split(/ +/);
        const command = args.shift().toLowerCase();
    
        if(command === 'ping'){
            message.channel.send('pong!');
        }
        else if (command == 'godfather'){
            message.channel.send('My Godfather is the greatest of all time, @Sasuke Uchiha a.k.a Siddharth Gautam#7088');
        }
        else if(command == 'creator'){
            message.channel.send("I was created by the honoured Siddharth Gautam. Discord Id - Siddharth Gautam#7088. I was created at 12:17 pm (IST).");
        };
    });
    
});
 
client.login('NzU4OTIzMDQxNTg5Mjk3MjAy.X22AKQ.tfR39vDMKxzgSulJIFa4InDQF1I');
