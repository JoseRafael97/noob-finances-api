'use strict';

var mongoose = require('mongoose'),
  Account = mongoose.model('Account');

exports.create_a_account = function(req, res) {
  var new_account = new Account(req.body);
  new_account.save(function(err, account) {
    if (err)
      res.send(err);
    res.json(account);
  });
};

exports.authenticate = function(req, res) {
    // find the user
    Account.findOne({
      name: req.body.name
    }, function(err, account) {
  
      if (err) throw err;
  
      if (!account) {
        res.json({ success: false, message: 'Authentication failed. User not found.' });
      } else if (account) {
  
        // check if password matches
        if (account.password != req.body.password) {
          res.json({ success: false, message: 'Authentication failed. Wrong password.' });
        } else {
  
      const payload = {
        // admin: account.admin 
      };
          var token = jwt.sign(payload, app.get('superSecret'), {
            expiresInMinutes: 1440 // expires in 24 hours
          });
  
          // return the information including token as JSON
          res.json({
            success: true,
            message: 'Enjoy your token!',
            token: token
          });
        }   
  
      }
  
    });
  }
