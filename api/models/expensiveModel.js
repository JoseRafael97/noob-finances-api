'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ExpensiveSchema = new Schema({
  name: {
    type: String,
    required: 'Entry with name of expensive'
  },
  description: {
    type: String,
  },
  value:{
    type: String,
    required: 'Entry with value of expensive'
  },
  register_date: {
    type: Date,
    required: 'Entry with date of expensive'
  },
  created_date: {
    type: Date,
    default: Date.now
  },
  status: {
    type: [{
      type: String,
      enum: ['pending', 'paid']
    }],
    default: ['pending']
  }
});

module.exports = mongoose.model('Expensive', ExpensiveSchema);