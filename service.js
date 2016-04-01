var express = require('express');
var app = express();
var port = process.env.SERVICE_PORT || 3000;
var serviceName = process.env.SERVICE_NAME;

app.get('/', function (req, res) {
    res.send('Hello World!\nI am ' + serviceName + '!\n');
});

app.listen(port, function () {
    console.log('Example app listening on port ' + port + '!');
});