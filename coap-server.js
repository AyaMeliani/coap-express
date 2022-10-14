const coap = require('coap')
const server = coap.createServer()

let now = new Date()  
var time = 0
const path = '/temperature'

//const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

//var timeout = 0

server.on('request', async (req, res) => {
    console.log('received req')
    const payload = JSON.parse(req.payload.toString())

    if(('/'+req.url.split('/')[1])==path){

        if (req.method == 'GET'){
            if(payload.service=="1"){
                res.end("15")
            }
            if(payload.service=="2"){
                res.end("32")
            }
        }
    }   
})

// the default CoAP port is 5683
server.listen(() => {
    console.log('Server is up and running')
})