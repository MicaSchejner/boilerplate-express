var express = require('express');
var app = express();
console.log("Hello World");

absolutePath = __dirname + '/views/index.html';
publicPath = __dirname + '/public';
// app.get('/', function (req, res) {
//         res.send('Hello Express');    
//     });

app.get('/', function (req, res) {
    res.sendFile(absolutePath);
});

app.use('/public', express.static(publicPath));

app.get('/json', function (req, res) {
    res.json({ "message": "Hello json" })
    
})





 module.exports = app;
