var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var StockSchema = new Schema({
  symbol: String,
  quote: Object
});

module.exports = mongoose.model('Stock', StockSchema);
