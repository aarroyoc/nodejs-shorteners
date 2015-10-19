bc.vc shortener
================

This module allows you to shorten your URLs using [bc.vc](http://bc.vc/?r=96749). Link and earn money!

## Installation

```
npm install bc.vc
```

## Usage

```
var bcvc=require("bc.vc")("YOUR_API_KEY","YOUR_UID_KEY"); // You will find your API key in Tools section.
// var bcvc=require("bc.vc")(); still works but you won't earn money

bcvc.short("http://adrianarroyocalle.github.io",function(url){
	console.log("Short URL is: "+url);
});

```
