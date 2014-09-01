
var express = require("express");
var siteAnalyzer = require("./siteAnalyzer.js");

var app = express();

app.get("/", function(req, res){
  res.send("Welcome! Try /site/{site}");
});

app.get("/site/:site", function(req, res){
  siteAnalyzer.getJson(req.params.site, res);
});

var server = app.listen(process.env.PORT || 3000, function(){
  console.log("Listening on port %d", server.address().port);
});