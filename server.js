var PORT = process.env.PORT || 5000 ;
var http = require('http');
var fs = require('fs');

http.createServer(function (request, response) {
    //console.log('request ', request.url);
	if(request.url=='/home'){
		//response.write('('+ request.url + ')');
		fs.readFile('./home.htm', function(error, content) { //fs.readFile is an asynchronous method.JavaScript is asynchronous single thread - look up JavaScript execution model
			// response.write(error.code);
			if (error) {
				//response.writeHead(404, { 'Content-Type': 'text/html' });
				response.end('Bad stuff happened!');
			}
			else {
				// response.writeHead(200, { 'Content-Type': 'text/html' });
				response.end(content, 'utf-8');
			} 
			response.end('testing');
		});
	}
	else if(request.url == '/manic'){
		response.write('You are manic.  Take a chill pill!');
		response.end('Ending manic');
	}
	else{
		response.write('No Go');
		response.end('ending No Go');
	}
    //response.end("[HEROKU_NODEJS_MINIMAL]");
}).listen(PORT);