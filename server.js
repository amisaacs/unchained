/*
Example deployment can be seen at:
https://un-chained.herokuapp.com/home

Deployment Instructions (Recreating the steps JM taught me):
1. Clone https://github.com/amisaacs/unchained repository.
2. Remove .git folder in the folder where the project was cloned to.
3. Download heroku CLI.
4. Create heroku account.
5. Open GitBash in folder where the project was cloned to.
	a. Login to heroku account 
		$ heroku login
	b.	Create heroku app
		$heroku apps:create appname
			Will return a web url and a git url - save these.
			$git remote add heroku https://git.heroku.com/appname.git
			$git push heroku master
    6. Browser[ https://appname.herokuapp.com/ ]
	c. Initialize repository:
		$ git init . 
		$ git add . heroku
		$ git commit -m 'set up repository'
		$ git remote add 
		$ git remote -v
		$ git push remoteName master
		Copy url to appName
		*/


var PORT = process.env.PORT || 5000 ;
var http = require('http');
var fs = require('fs');

http.createServer(function (request, response) {
	if(request.url=='/home'){
		fs.readFile('./home.htm', function(error, content) { 
			if (error) {
				//response.writeHead(404, { 'Content-Type': 'text/html' });
				response.end('Bad stuff happened!');
			}
			else {
				response.writeHead(200, { 'Content-Type': 'text/html' });
				response.end(content, 'utf-8');
			} 
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