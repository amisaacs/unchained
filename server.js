var PORT = process.env.PORT || 5000 ;
var http = require('http');
http.createServer(function (request, response) {
    //console.log('request ', request.url);
	response.write('('+ request.url + ')');
	if(request.url=='/home'){
		fs.readFile('./home.htm', function(error, content) {
			if (error) {
				response.writeHead(404, { 'Content-Type': 'text/html' });
				response.end('Bad stuff happened! Error code: ' + error.code + '\n' );
			}
			else {
				response.writeHead(200, { 'Content-Type': 'text/html' });
				response.end(content, 'utf-8');
			}
		});
	}
	else if(request.url == '/manic'){
		response.write('You are manic.  Take a chill pill!');
	}
	else{
		response.write('No Go');
	}
    response.end("[HEROKU_NODEJS_MINIMAL]");
}).listen(PORT);