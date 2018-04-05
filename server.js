var express = require('express');
var app = express();
var port = process.env.PORT || 3000

app.get('/', function(req, res){
	res.send('test');
});

app.listen(port, function(){
	console.log('Server starting at http://localhost:' + port);
});