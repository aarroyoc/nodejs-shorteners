Adf.ly shortener
================

This module allows you to shorten your URLs using [Adf.ly](http://adf.ly/?id=4869054). Link and earn money!

## Installation

```
npm install adf.ly
```

## Usage

```
var adfly=require("adf.ly")("YOUR_USER_ID","YOUR_PUBLIC_API_KEY"); // You will find your API key in adf.ly Tools section.
// var adfly=require("adf.ly")(); still works but you won't earn money

adfly.short("http://adrianarroyocalle.github.io",function(url){
	console.log("Short URL is: "+url);
});

```
