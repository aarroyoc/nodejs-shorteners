var http=require("http");

module.exports=function(apiKey){
	if(!apiKey)
		apiKey="c4f156111522c0ee2cc595c1e0eaad53";
	this.short=function(url,cb){
		var URL="http://api.adf.ly/api.php?key="+apiKey+"&uid=4869054&advert_type=int&domain=adf.ly&url="+encodeURIComponent(url);
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
