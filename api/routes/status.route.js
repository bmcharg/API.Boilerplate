var config = require("../../config/config.js");
var logger = require("../../helpers/logger.js")("USER_SERVICE", config.SHOW_DEBUG);
var moment  = require('moment');

var statusService = require('../services/status.service.js');

const apiURL = 'https://buzz-app.stage.api.bbci.co.uk/api/v1/info';
const cmsURL = 'https://buzz-cms.stage.tools.bbc.co.uk';
const moderationURL = 'https://buzz-moderation.stage.tools.bbc.co.uk';
const configURL = 'https://buzz-config.stage.files.bbci.co.uk/config.json';

var apiStatus = "";
var cmsStatus = "";
var moderationStatus = "";
var configStatus = "";

function STATUS_ROUTER(router) {

  var self = this;

  var setStatus = function(statusCode){

    switch (statusCode){

      case 200:

        return {
          "cssClass": "good",
          "status": "OK",
          "statusCode": statusCode
        }

        // return "<div class='statusOutput good'>GOOD</div>";
        break;
      default: 
        return {
          "cssClass": "bad",
          "status": "FAILED",
          "statusCode": statusCode
        }

    }

  }

  router.get("/api", function(req, res){
  	
    statusService.checkURL(apiURL).then(function(status){

            res.json(setStatus(status));


    })

  })

  router.get("/cms", function(req, res){
    
      statusService.checkURL(cmsURL).then(function(status){

            res.json(setStatus(status));


      })


  })

  router.get("/moderation", function(req, res){
    
    statusService.checkURL(moderationURL).then(function(status){

            res.json(setStatus(status));


    })

  })

  router.get("/config", function(req, res){
    
    statusService.checkURL(configURL).then(function(status){

            res.json(setStatus(status));

          })

  })  

}

module.exports = STATUS_ROUTER;