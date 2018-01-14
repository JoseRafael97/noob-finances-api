'use strict';

module.exports = function(app) {
  var noobFinances = require('../controllers/expensiveController');
  var config = require('../../config');

  app.route(config.version+'expensives')
    .get(noobFinances.list_all_expensives)
    .post(noobFinances.create_a_expensive);

  app.route(config.version+'expensives/:expensiveId')
    .get(noobFinances.read_a_expensive)
    .put(noobFinances.update_a_expensive)
    .delete(noobFinances.delete_a_expensive);
};
