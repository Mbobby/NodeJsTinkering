var http = require('http');
var url = require('url');

function start(route, handle){
	function callback(request, response){
		console.log("request Received");
		var pathname = url.parse(request.url).pathname;
		console.log("Request for " + pathname + " received on the server.\n");

		route(pathname, handle);

		response.writeHead(200, {'Content-Type': 'text/plain'});
		response.write("Welcome to Booby's page!! \n");
		response.end();
	};
	http.createServer(callback).listen(8000);
	console.log("Server Started");
};

exports.start = start;