'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var ExpensiveSchema = new Schema({
  name: {
    type: String,
    required: 'Entry with name of expensive'
  },
  value:{
      type: String,
      required: 'Entry with value of expensive'
  },
  created_date: {
    type: Date,
    default: Date.now
  },
  status: {
    type: [{
      type: String,
      enum: ['waiting-payment', 'paid out']
    }],
    default: ['waiting-payment']
  }
});

module.exports = mongoose.model('Expensives', ExpensiveSchema);