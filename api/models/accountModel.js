'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var AccountSchema = new Schema({
  username: {
    type: String,
    required: 'Entry with account username'
  },
  password: {
    type: String,
    required: 'Entry with account password'
  },
  expensives: [{ type: Schema.Types.ObjectId, ref: 'Expensive' }]

});

module.exports = mongoose.model('Account', ExpensiveSchema);