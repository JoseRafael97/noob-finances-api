'use strict';

module.exports = function(app) {
  var noobFinances = require('../controllers/accountController');
  var config = require('../../config');

  app.route(config.version+'account')
    .get(noobFinances.list_all_accounts)
    .post(noobFinances.create_a_account);

};
