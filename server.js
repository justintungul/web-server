var express = require('express');
var app = express();
var PORT = 3000; //uppercase denotes a CONSTANT varialbe

var middleware = require('./middleware.js');

// Application-Level-Middleware
app.use(middleware.logger);

// Route-Level-Middleware
app.get('/about', middleware.requireAuthentication, function(req, res) {
	res.send('About Us!!!');
});

app.use(express.static(__dirname + '/public'));

app.listen(PORT, function () {
	console.log('Express server started on port ' + PORT + '!');
});