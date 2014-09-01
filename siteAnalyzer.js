var request = require('request');
var cheerio = require('cheerio');

function formatTitleStr(str){
  return str.toLowerCase().replace(/\s/g, "-");
}

function getJson(site, res){
  request('https://builtwith.com/' + site, function (error, response, html) {
    if (!error && response.statusCode == 200) {
      //console.log(html);
      var $ = cheerio.load(html);
      var data = {};
      var lastTitle = "default";
      $(".container .row .span8 div").each(function(i, u){
        if($(u).hasClass("techItem")){
          var item = $(u).find("h3 a+a");
          data[lastTitle].push($(item).text());
        }
        else {
          var title = $(u).find("ul li span");
          lastTitle = formatTitleStr($(title).text());
          data[lastTitle] = [];
        }
      })
      res.json(data)
    }
    else {
      res.writeHead(400);
      res.end();
    }
  });
}

module.exports = {
  getJson: getJson
}

