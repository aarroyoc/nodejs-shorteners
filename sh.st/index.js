const https = require("https");
const qs = require("querystring");

module.exports=function(apiKey){
	if(!apiKey)
		apiKey="cc80433e0a07cff9b538b28eb8c6d814";
	this.short=function(url,cb){
		const data = {
			"urlToShorten": url
		};
		const putData = qs.stringify(data);
		const options = {
			hostname: "api.shorte.st",
			path: "/v1/data/url",
			method: "PUT",
			headers: {
				"Content-Type": "application/x-www-form-urlencoded",
				"Content-Length": Buffer.byteLength(putData),
				"public-api-token": apiKey
			}
		};

		var req = https.request(options, function(response){
			response.setEncoding('utf8');
			var body = '';
			response.on('data', function(d) {
				body += d;
			});
			response.on('end', function() {
				cb(JSON.parse(body).shortenedUrl);
			});
		});
		req.write(putData);
		req.end();
	}
	return this;
}
