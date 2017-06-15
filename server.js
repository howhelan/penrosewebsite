var fs   = require('fs')
  , path  = require('path')
  , port = 8080
  , express = require('express');


var app = express();					// The express app
var PORT = process.env.PORT || 8080;	// Port to listen on

app.use(express.static('public'));
app.set('views', 'public');
app.set('view engine', 'pug');

//-------------Files-------------
// app.get('/', (req, res) => {
//   res.render('index');
// });

// app.get('/logo.png', function(req, res) {
//   res.sendFile('logo.png', {"root": __dirname})
// });

// app.get('/css', function(req, res) {
//   res.sendFile('css', {"root": __dirname})
// });

// //-------------Files-------------
// app.get('/README.md', function(req, res) {
//   sendFile(res, 'README.md', 'text/html')
// });

// Start the server
app.listen(PORT, () => {
	console.log(`Started listening on port ${PORT}`);
	console.log('Press Ctrl+C to quit\n');
});