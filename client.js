var coap = require('coap');

var options = {
    host : 'localhost',
    method : 'get',
    pathname : "/temperature",
    options : {
        'Accept' : 'application/json'
    },
};


var responseBody = '';

var req = coap.request(options);

req.on('timeout',function(err){
    console.log('timeout')
})

req.on('response', function (res) {
    res.on('data', function () {
        responseBody += res.payload;
    });
    res.on('end', function () {
        console.log('The time is', responseBody);
    });
});



module.exports ={req};