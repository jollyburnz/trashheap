
/**
 * Module dependencies.
 */
var express = require('express')
  , routes = require('./routes')

var app = module.exports = express.createServer();

fs = require('fs');
yaml = require('yaml');

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  
  app.set('view options',{ pretty:true , layout:false});
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.directory(__dirname + '/public'));
  app.use(express.favicon(__dirname + '/public/images/rumplefraggle.JPG', { maxAge:2592000000 })); 
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true })); 
});

app.configure('production', function(){
  app.use(express.errorHandler()); 
});

// Routes

app.get('/', routes.index);

app.listen(8080);
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
