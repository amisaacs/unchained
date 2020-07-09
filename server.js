var PORT = process.env.PORT || 5000 ;
var http = require('http');
http.createServer(function (request, response) {
    console.log('request ', request.url);
    response.end("[HEROKU_NODEJS_MINIMAL]");
}).listen(PORT);