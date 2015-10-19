var http=require("http");

module.exports=function(id,auth){
	if(!id)
		id="62630";
	if(!auth)
		auth="37544c";
	this.short=function(url,cb,adult){
		var adultMode="0";
		if(adult)
			adultMode="1";
		var URL="http://shink.in/api/"+adultMode+"/id/"+id+"/auth_token/"+auth+"/url/"+encodeURIComponent(url);
		http.get(URL,function(response){
			var body = '';
			response.on('data', function(d) {
				body += d;
			});
			response.on('end', function() {
				var url=JSON.parse(body).hash;
				cb("http://shink.in/"+url);
			});
		});
	}
	return this;
}
