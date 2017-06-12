var http = require('http')
  , fs   = require('fs')
  , url  = require('url')
  , port = 8080
  ,express = require('express');


var app = express()
app.use(express.static('public'))
app.set('port', process.env.PORT || 3000);


//app.use(express.bodyParser());
app.listen(app.get('port'))

//-------------Files-------------
app.get('/', function(req, res) {
  res.sendFile('index.html', {"root": __dirname})
});

app.get('/logo.png', function(req, res) {
  res.sendFile('logo.png', {"root": __dirname})
});

app.get('/css', function(req, res) {
  res.sendFile('css', {"root": __dirname})
});

//-------------Files-------------
app.get('/README.md', function(req, res) {
  sendFile(res, 'README.md', 'text/html')
});