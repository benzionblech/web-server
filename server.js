var express = require('express');
var app = express();
var PORT = 3000;

var middleware = {
	requireAuthentication: function(req, res, next){
		console.log('Private route hit!')
		next();
	},
	logger: function(req, res, next) {
		console.log('Request: ' + req.method + ' ' + new Date().toString());
		next();
	}
}

app.use(middleware.requireAuthentication);
app.use(middleware.logger);

app.get('/about', function(req, res){
	res.send('about us!!');
})

app.use(express.static(__dirname + "/public"))


app.listen(PORT, function(){
	console.log('server has started at PORT ' + PORT);
});