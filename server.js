var PORT = process.env.PORT || 5000 ;
var http = require('http');
http.createServer(function (request, response) {
    //console.log('request ', request.url);
	response.write('('+ request.url + ')');
	if(request.url=='/home'){
		response.write('You sent a request from home');
	}
	else if(request.url == '/manic'){
		response.write('You are manic.  Take a chill pill!');
	}
	else{
		response.write('No Go');
	}
    response.end("[HEROKU_NODEJS_MINIMAL]");
}).listen(PORT);