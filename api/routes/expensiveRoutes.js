'use strict';

module.exports = function(app) {
  var noobFinances = require('../controllers/expensiveController');

  app.route('/expensives')
    .get(noobFinances.list_all_expensives)
    .post(noobFinances.create_a_expensive);

  app.route('/expensives/:taskId')
    .get(noobFinances.read_a_expensive)
    .put(noobFinances.update_a_expensive)
    .delete(noobFinances.delete_a_expensive);
};
