var express = require("express");
var mysql   = require("mysql");
var bodyParser  = require("body-parser");
var md5 = require('MD5');

// CONFIG
var config = require('./config/config.js');

function SERVER(){

    var self = this;  

    var db = require('./data/db.js')

    // Create app and router
    var app = express();
    var router = express.Router();

    // Middleware
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());

    // Bind router
    // app.use('/', router);

    app.use('/status', router);

    app.use('/', express.static('www'));


    // Routes
    var status_route = require("./api/routes/status.route.js")(router);

    // Clear the console
    process.stdout.write('\033c');

    app.listen(config.PORT,function(){

      console.log(config.APP.DESCRIPTION + " version " + config.APP.VERSION);
      console.log("==================================================================");
      console.log("STARTED: " + config.APP.STARTED);
      console.log("ENVIRONMENT: " + config.NAME);
      console.log("PORT: " + config.PORT);
      console.log("==================================================================");
      console.log();
    });

    // self.connectMysql();
};


module.exports = new SERVER();