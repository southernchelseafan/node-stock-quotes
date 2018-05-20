var request = require('request');
var mongoose = require('mongoose');
var config = require('../config.json');
var Stock = require('../models/stock');

module.exports = function(app) {
  mongoose.connect(config.mongodb);
  app.get('/quote/:symbol', function(req, res) {
    console.log('API key from config: ' + config.quotekey);
    request({
      headers: {
        'Content-Type': 'application/json'
      },
      uri: 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol='+ req.params.symbol + '&apikey=' + config.quotekey,
      method: 'GET'

    },
    function(error,response, body) {
      var stock = new Stock();
      stock.symbol = req.params.symbol
      stock.quote = body;

      stock.save(function(err) {
        if (err) {
          console.log('Failed to save quote: ' + err);
        }
        console.log('Saved quote to mongo');
        res.write(body);
        res.end();
      });

    })
  });
}
