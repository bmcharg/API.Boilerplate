var mysql = require("mysql");

var server = require("../server.js");
var config = require("../config/config.js");

var initialised = false;

var pool;

if (config.REQUIRE_DB){

  pool = mysql.createPool({
      connectionLimit:    config.DB.CONNECTION_LIMIT,
      host:               config.DB.HOST,
      port:               config.DB.PORT,
      user:               config.DB.USER,
      password:           config.DB.PASSWORD,
      database:           config.DB.NAME,
      debug:              config.DB.DEBUG,
      multipleStatements: true
  });  


  pool.getConnection(function(err, connection){

    if (err) {

        console.error("ERROR: Failed to connect to database");
        if (!initialised) process.exit();

    }else{

      initialised = true;

    };

  })

}

module.exports = pool;
