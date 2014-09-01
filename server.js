
var express = require("express");
var siteAnalyzer = require("./siteAnalyzer.js");

var app = express();


app.get("/", function(req, res){
  res.send("Welcome! Try /site/{site} or /tech/{tech name}.");
});

app.get("/site/:site", function(req, res){
  res.json(siteAnalyzer.getJson(req.params.site));
});

var server = app.listen(3000, function(){
  console.log("Listening on port %d", server.address().port);
});