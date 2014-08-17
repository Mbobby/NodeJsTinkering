

function route(pathname, handle, response){
	console.log("About to request for " + pathname);
	if(typeof handle[pathname] === "function"){
		handle[pathname](response);
	}else{
		console.log("No request handler found for " + pathname);
	}
};

exports.route = route;