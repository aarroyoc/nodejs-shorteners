var http=require("http");

module.exports=function(apiKey){
	if(!apiKey)
		apiKey="kZrfrYdn";
	this.short=function(url,cb){
		var URL="http://ouo.io/api/"+apiKey+"?s="+encodeURIComponent(url);
		http.get(URL,function(response){
			var body = '';
			response.on('data', function(d) {
				body += d;
			});
			response.on('end', function() {
				cb(body);
			});
		});
	}
	return this;
}
