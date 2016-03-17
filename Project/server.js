var express = require("express");
var bodyParser = require("body-parser");
var app = express();

var Twit = require("twit");

var client = null;

function connectToTwitter(){
	client = new Twit({
		consumer_key	      :	"P4CAUvU8bYqSk5Vt4YvNinGOR",
		consumer_secret	    : "NDRZ5j8OF0a0InfaTdnHpBUrzixZfY7q4xaGFQHFGZbjQ5Gp7g",
		access_token	      : "178225758-hTCl9k1QKYBuWNjSt6v4vC8ow15bpAH6JJpPvhNY",
		access_token_secret	: "WKGdhWOjks6mbZ3dJs4nhnXg3mbS6vGcrfODvSq9bZtoO"
	})
}
//Make the client connect to Twitter
connectToTwitter();
//Additional code to allow CORS requests
//additional setup to allow CORS requests
var allowCrossDomain = function(req, response, next) {
	response.header('Access-Control-Allow-Origin', "http://localhost:8080");
	response.header('Access-Control-Allow-Methods', 'OPTIONS, GET,PUT,POST,DELETE');
	response.header('Access-Control-Allow-Headers', 'Content-Type');
	if ('OPTIONS' == req.method) {
		response.send(200);
	}
	else {
		next();
	}
};
app.use(allowCrossDomain);
//Parses the JSON object given in the body request
app.use(bodyParser());
//Return the Twitter timeline of the current user
app.get('/timeline', function (request, response) {
	response.header('Access-Control-Allow-Origin', '*');
	client.get('statuses/home_timeline', {}, function (err, reply) {
		if(err){
		response.send(404);
		}
		if(reply){
			response.json(reply);
		}
	});
});
app.get('/profile', function(request, response){
	response.header('Access-Control-Allow-Origin', '*');
	client.get('users/show', {screen_name: 'ahmed_eduonix'}, function (err, reply) {
		if(err){
			console.log('Error: ' + err);
			response.send(404);
		}
		if(reply){
		/// console.log('Reply: ' + reply);
			response.json(reply);
		}
	});
});
app.get('/search/:query', function (request, response) {
	response.header('Access-Control-Allow-Origin', '*');
	//search term is
	var searchTerm = request.params.query;
	client.get('search/tweets', { q: searchTerm, count: 100 }, function(err, reply) {
		if(err){
			console.log('Error: ' + err);
			response.send(404);
		}
		if(reply){
			// console.log('Reply: ' + reply);
			response.json(reply);
		}
	});
});
app.use(express.static(__dirname));
app.get('/',function(req,res){
	res.sendFile("index.html");
});
//start up the app on port 8080
app.listen(8080);
