# simple api for builtwith.com

experiment with node scraping

**demo: http://buitwith-api.herokuapp.com/**

todo: details of each tech; websites using tech

***

### Currently Available Endpoints:

    GET /site/{site}

example: /site/uw.edu

    {
      "web-server": [
        "ApacheApache 2.2",
        "Apache 2.2"
      ],
      "email-services": [
        "SPF",
        "Microsoft Azure DNS"
      ],
      "content-management-systems": [
        "WordPress"
      ],
      "frameworks": [
        "DAV",
        "PHP"
      ],
      "analytics-and-tracking": [
        "Google AnalyticsGoogle Universal Analytics",
        "Google Universal Analytics"
      ],
      "javascript-libraries": [
        "html5shiv",
        "jQueryjQuery 1.9.1",
        "jQuery 1.9.1",
        "SWFObject",
        "jQuery Masonry",
        "Modernizr",
        "Backbone.js"
      ],
      "widgets": [
        "Yoast PluginsYoast Google Analytics for WordPress",
        "Yoast Google Analytics for WordPress",
        "Google Font API"
      ],
      "content-delivery-network": [
        "AJAX Libraries API"
      ],
      "aggregation-functionality": [
        "Really Simple Discovery",
        "RSS",
        "Live Writer Support"
      ],
      "document-information": [
        "HTML5 DocType",
        "Conditional Comments",
        "Viewport Meta",
        "Javascript",
        "Twitter Bootstrap",
        "Cascading Style Sheets",
        "Mobile Non Scaleable Content",
        "X-UA-Compatible",
        "Pinterest Domain Verify",
        "WAI-ARIA"
      ],
      "encoding": [
        "UTF-8"
      ],
      "server-information": [
        "Unix",
        "mod_sslmod_ssl 2.2.24",
        "mod_ssl 2.2.24",
        "OpenSSLOpenSSL 1.0.0",
        "OpenSSL 1.0.0"
      ],
      "css-media-queries": [
        "Device Width",
        "Device Pixel Ratio",
        "Min Width",
        "Max Width"
      ]
    }
