var http=require("http");

module.exports=function(apiKey,uid){
	if(!apiKey)
		apiKey="6256ed64ce9c6cae6b3ca09034ae3eaa";
	if(!uid)
		uid="96749";
	this.short=function(url,cb){
		var URL="http://bc.vc/api.php?key="+apiKey+"&uid="+uid+"&url="+encodeURIComponent(url);
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
