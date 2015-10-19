var http=require("http");

module.exports=function(apiKey){
	if(!apiKey)
		apiKey="A6T";
	this.short=function(url,cb){
		var URL="http://linkshrink.net/api.php?key="+apiKey+"&url="+encodeURIComponent(url);
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
