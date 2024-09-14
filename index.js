const {Authflow, Titles} = require('prismarine-auth')
const bedrock = require('bedrock-protocol')

//bedrock protocoll
const client = bedrock.createClient({
    host: 'blockbande.de',
    port: 19132,
    username: 'Botet',
    offline: false
})

client.on('chat', (packet) => {
client.write('/p h !Raay2009')
console.log('yes?')
})
