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
    app.use('/api', router);

    // Routes
    var server_routes = require("./api/routes/server.route.js")(router);
    var user_routes = require("./api/routes/user.route.js")(router);

    // Clear the console
    process.stdout.write('\033c');

    app.listen(config.PORT,function(){

      console.log(config.APP.DESCRIPTION + " version " + config.APP.VERSION);
      console.log("==================================================================");
      console.log("STARTED: " + config.APP.STARTED);
      console.log("ENVIRONMENT: " + config.NAME);
      console.log("PORT: " + config.PORT);
      console.log("DATABSE: " + config.DB.HOST);
      console.log("==================================================================");
      console.log();
    });


    // self.connectMysql();
};


module.exports = new SERVER();