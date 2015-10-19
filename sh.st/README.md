sh.st shortener (Shorte.st)
================

This module allows you to shorten your URLs using [Shorte.st](https://shorte.st/es/ref/b4113e532f). Link and earn money!

## Installation

```
npm install sh.st
```

## Usage

```
var shst=require("sh.st")("YOUR_API_KEY"); // You will find your API key in Tools section.
// var shst=require("sh.st")(); still works but you won't earn money

shst.short("http://adrianarroyocalle.github.io",function(url){
	console.log("Short URL is: "+url);
});

```
