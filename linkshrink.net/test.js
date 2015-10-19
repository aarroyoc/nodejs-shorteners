var bcvc=require("./index.js")();

bcvc.short("http://www.mozilla.org",function(url){
	console.log("Link: "+url);
});
