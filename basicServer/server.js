var http = require('http');
var url = require('url');

function start(route, handle){
	function callback(request, response){
		console.log("request Received");
		var pathname = url.parse(request.url).pathname;
		console.log("Request for " + pathname + " received on the server.\n");

		route(pathname, handle, response);
	};
	http.createServer(callback).listen(8000);
	console.log("Server Started");
};

exports.start = start;