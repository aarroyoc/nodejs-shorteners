LinkShrink.net shortener
================

This module allows you to shorten your URLs using [LinkShrink.net](http://linkshrink.net/ref=f6A6T). Link and earn money!

## Installation

```
npm install linkshrink.net
```

## Usage

```
var link=require("linkshrink.net")("YOUR_API_KEY"); // You will find your API key in Tools section.
// link bcvc=require("linkshrink.net")(); still works but you won't earn money

link.short("http://adrianarroyocalle.github.io",function(url){
	console.log("Short URL is: "+url);
});

```
