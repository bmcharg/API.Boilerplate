var config = require("../../config/config.js");
var logger = require("../../helpers/logger.js")("USER_SERVICE", config.SHOW_DEBUG);
var moment  = require('moment');

function SERVER_ROUTER(router) {

  var self = this;

  router.get("/", function(req, res){
  	res.json({
  		"name": config.APP.DESCRIPTION,
  		"version": config.APP.VERSION,
  		"started": config.APP.STARTED,
  		"configuration": config.NAME,
  		"uptime": moment(config.APP.STARTED, "Do MMMM YYYY, HH:mm:ss").fromNow()
  	})

  })


}

module.exports = SERVER_ROUTER;