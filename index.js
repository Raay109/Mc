const bedrock = require('bedrock-protocol');

const bot = bedrock.createClient({
    host: 'blockbande.de',  
    port: 19132,            
    username: 'Botet',      
    offline: false
})

bot.on('spawn', (packet) =>{

    console.log('spawned'),
    bot.queue('text', {
        type: 'chat',
        needs_translation: false,
        source_name: bot.username,
        xuid: '',  // XUID des Spielers (optional)
        platform_chat_id: '',  // Plattform-Chat-ID (optional)
        filtered_message: '',  // Gefilterte Nachricht (optional)
        message: '/p h !raay2009'  // Nachricht, die gesendet werden soll
    });
});

// Fehlerbehandlung und Verbindungsereignisse
bot.on('error', (err) => {
    console.error('Error:', err);
});

bot.on('disconnect', (reason) => {
    console.log('Disconnected:', reason);
});
