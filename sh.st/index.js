var request=require("request");

module.exports=function(apiKey){
	if(!apiKey)
		apiKey="cc80433e0a07cff9b538b28eb8c6d814";
	this.short=function(url,cb){
		var URL="https://api.shorte.st/v1/data/url"
		request.put(URL,{
			form: {
				"public-api-token" : apiKey,
				"urlToShorten": url
			}
		},function(error,response,body){
			cb(JSON.parse(body).shortenedUrl);
		});
	}
	return this;
}
