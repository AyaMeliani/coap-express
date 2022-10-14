const express = require('express');
const coap = require('./client.js');
const app = express();
const port = 3000;


app.use(express.json());

app.get('/temp1', (request, res) => {
    console.log(request.body);
    const payload = {service:"1"};
    coap.req.write(JSON.stringify(payload));
    res.send('Temp of service 1 is 15');

});

app.get('/temp2', (request, res) => {
    console.log(request.body);
    const payload = {service:"2"};
    coap.req.write(JSON.stringify(payload));

    
    res.send('temp of service 2 is 32');
});


app.listen(port, () => console.log(`Hello world app listening on port ${port}!`))