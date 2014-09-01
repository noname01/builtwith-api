var request = require('request');
var cheerio = require('cheerio');

function getJson(site, res){
  request('https://builtwith.com/' + site, function (error, response, html) {
    if (!error && response.statusCode == 200) {
      //console.log(html);
      var $ = cheerio.load(html);
      var data = {tech: []}
      $(".techItem h3").each(function(i, u){
        data.tech.push($(u).text().trim())
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

