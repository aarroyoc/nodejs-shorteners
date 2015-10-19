var http=require("http");

module.exports=function(uuid){
	if(!uuid)
		uuid="520ba3869fe2e836905105";
	this.short=function(url,cb){
		var URL="http://coinurl.com/api.php?uuid="+uuid+"&url="+encodeURIComponent(url);
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
