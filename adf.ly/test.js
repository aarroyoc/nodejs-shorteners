var adfly=require("./index.js")("c4f156111522c0ee2cc595c1e0eaad53");

adfly.short("http://www.mozilla.org",function(url){
	console.log("Link: "+url);
});
