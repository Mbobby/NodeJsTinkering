console.log("Server Started");
var http = require('http');
var fs = require('fs');

var callback = function(request, response){
	response.writeHead(200, {'Content-Type' : 'text/html'});
	fs.readFile('index.html', function(err, content){
		response.end(content);
		console.log("Server Stopped ");
	});
};

http.createServer(callback).listen(8000);