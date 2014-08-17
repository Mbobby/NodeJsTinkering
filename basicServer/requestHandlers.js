var exec = require("child_process").exec;

function start(response){
	console.log("Request to start passed to server");

	exec("ls -lah", function(error, stdout, stderr){
		response.writeHead(200, {'Content-Type': 'text/plain'});
		response.write(stdout);
		response.end();
	});
};

function upload(response){
	console.log("Request to upload passed to server");
	response.writeHead(200, {'Content-Type': 'text/plain'});
	response.write("Request received for Upload, but there are still no files to upload yet.");
	response.end();
};

exports.start = start;
exports.upload = upload;
