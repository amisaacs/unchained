var PORT = process.env.PORT || 5000 ;
var http = require('http');
http.createServer(function (request, response) {
    //console.log('request ', request.url);
	if(request.url=='abc'){
		response.write('You sent a request from abc');
	}
	if(request.url == 'manic'){
		response.write('You are manic.  Take a chill pill!');
	}
    response.end("[HEROKU_NODEJS_MINIMAL]");
}).listen(PORT);