'use strict';


var mongoose = require('mongoose'),
  Expensive = mongoose.model('Expensives');

exports.list_all_expensives = function(req, res) {
  Expensive.find({}, function(err, expensive) {
    if (err)
      res.send(err);
    res.json(expensive);
  });
};


exports.create_a_expensive = function(req, res) {
  var new_expensive = new Expensive(req.body);
  new_expensive.save(function(err, expensive) {
    if (err)
      res.send(err);
    res.json(expensive);
  });
};


exports.read_a_expensive = function(req, res) {
  Expensive.findById(req.params.taskId, function(err, expensive) {
    if (err)
      res.send(err);
    res.json(expensive);
  });
};


exports.update_a_expensive = function(req, res) {
  Expensive.findOneAndUpdate({_id: req.params.expensiveId}, req.body, {new: true}, function(err, expensive) {
    if (err)
      res.send(err);
    res.json(expensive);
  });
};


exports.delete_a_expensive = function(req, res) {
  Expensive.remove({
    _id: req.params.expensiveId
  }, function(err, expensive) {
    if (err)
      res.send(err);
    res.json({ message: 'Expensive successfully deleted' });
  });
};