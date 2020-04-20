var adfly=require("./index.js")();

adfly.short("http://www.mozilla.org",function(url){
	console.log("Link: "+url);
});

adfly.short("http://mypage.com/gen?email=email&password=password", function(url){
	console.log("Link: "+url);
});
