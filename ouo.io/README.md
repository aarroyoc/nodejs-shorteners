ouo.io shortener
================

This module allows you to shorten your URLs using [ouo.io](http://ouo.io/ref/kZrfrYdn). Link and earn money!

## Installation

```
npm install ouo.io
```

## Usage

```
var ouo=require("ouo.io")("YOUR_API_KEY""); // You will find your API key in Tools section.
// var ouo=require("ouo.io")(); still works but you won't earn money

ouo.short("http://adrianarroyocalle.github.io",function(url){
	console.log("Short URL is: "+url);
});

```
