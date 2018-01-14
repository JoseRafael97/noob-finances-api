// =======================
// get the packages we need ============
// =======================
var express     = require('express');
var app         = express();
var bodyParser  = require('body-parser');
var morgan      = require('morgan');
var mongoose    = require('mongoose');

var jwt    = require('jsonwebtoken'); 
var config = require('./config'); 
var Expensive = require('./api/models/expensiveModel');
var Account = require('./api/models/accountModel');
var Category = require('./api/models/categoryModel');

// =======================
// configuration =========
// =======================
var port = process.env.PORT || 3000; 
mongoose.connect(config.database); 
app.set('superSecret', config.secret);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('dev'));

// =======================
// routes ================
// =======================
// API ROUTES -------------------
require('./api/routes/expensiveRoutes')(app);
require('./api/routes/accountRoutes')(app);
require('./api/routes/authRouter')(app);

// =======================
// route not found config ======
// =======================
app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
});
// =======================
// start the server ======
// =======================
app.listen(port);
console.log('Noob Finances RESTful API server started on: ' + port);