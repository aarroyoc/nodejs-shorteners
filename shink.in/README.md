shink.in shortener
================

This module allows you to shorten your URLs using [Shink.in](http://shink.in/r/62630). Link and earn money!

## Installation

```
npm install shink.in
```

## Usage

```
var sh=require("shink.in")("YOUR_ID_KEY","YOUR_AUTH_TOKEN"); // You will find your keys in Tools -> API section.
// var sh=require("shink.in")(); still works but you won't earn money

sh.short("http://adrianarroyocalle.github.io",function(url){
	console.log("Short URL is: "+url);
},ADULT_MODE); // Adult mode can be false (default) or true

```
