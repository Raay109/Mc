const bedrock = require('bedrock-protocol');

const bot = bedrock.createClient({
    host: 'blockbande.de',  
    port: 19132,            
    username: 'Botet',      
    offline: false
})

bot.on('spawn', (packet) =>{
    console.log('erfolgreich auf den server gekommen'),
    bot.queue('text', {
        type: 'chat',
        needs_translation: false,
        source_name: bot.username,
        xuid: '',  // XUID des Spielers (optional)
        platform_chat_id: '',  // Plattform-Chat-ID (optional)
        filtered_message: '',  // Gefilterte Nachricht (optional)
        message: '/p h !raay2009'  // Nachricht, die gesendet werden soll
    })
});
bot.on('text', (packet)=>{


let message = packet.message;

message = message.replace(
/§[0-9a-fk-or]/gi, '');

// Regulären Ausdruck erstellen, um den Text zwischen | und : zu extrahieren
const regex = /\]\s*(.*?)\s*-/;
const match = message.match(regex);

if (match) {
 console.log(packet)
    const extractedText = match[1].trim(); // Extrahierter Text zwischen | und :
    if(message.startsWith(`[Nachricht] !Raay2009 -> Du: !tpa`)){
bot.queue('text', {
    type: 'chat',
    needs_translation: false,
    source_name: bot.username,
    xuid: '',
    platform_chat_id: '',
    filtered_message: '',
    message: `/tpa !Raay2009`
})
}



}
})
// Fehlerbehandlung und Verbindungsereignisse
bot.on('error', (err) => {
    console.error('Error:', err);
});

bot.on('disconnect', (reason) => {
    console.log('Disconnected:', reason);
});
