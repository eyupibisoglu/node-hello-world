

var express = require('express'); 
var app = express(); 

app.get('/', function(request, response)
{ 
	res.send('Hello World'); 
}); 

app.listen(3000);
