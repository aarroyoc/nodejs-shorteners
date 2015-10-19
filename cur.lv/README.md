cur.lv shortener (CoinURL.com)
================

This module allows you to shorten your URLs using [CoinURL.com](https://coinurl.com/index.php?ref=e0d0dc05a28d4c3cc3dd02b33d12c02f ). Link and earn money!

## Installation

```
npm install cur.lv
```

## Usage

```
var cur=require("cur.lv")("YOUR_UUID"); // You will find your UUID in your profile
// var cur=require("cur.lv")(); still works but you won't earn money

cur.short("http://adrianarroyocalle.github.io",function(url){
	console.log("Short URL is: "+url);
});

```
