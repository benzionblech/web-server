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

module.exports = middleware;