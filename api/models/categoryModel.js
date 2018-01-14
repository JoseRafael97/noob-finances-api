'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var CategorySchema = new Schema({
  name: {
    type: String,
    required: 'Entry with category name'
  },
  description: {
    type: String,
    required: 'Entry with description'
  },

});

module.exports = mongoose.model('Category', CategorySchema);