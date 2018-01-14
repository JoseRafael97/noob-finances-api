'use strict';

module.exports = function(app) {
  var noobFinances = require('../controllers/accountController');
  var config = require('../../config');

  app.route(config.version+'authenticate')
    .post(noobFinances.authenticate);
};

