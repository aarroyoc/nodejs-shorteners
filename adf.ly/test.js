var adfly=require("./index.js")();

adfly.short("http://www.mozilla.org",function(url){
	console.log("Link: "+url);
});
