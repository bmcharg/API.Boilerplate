var config = require("../../config/config.js");
var userService = require("../services/user.service.js");

function USER_ROUTER(router) {

  var self = this;

  router.get("/user/:userId", function(req, res){

    userService.getUser().then(function(user){

      res.json({
        "error": false,
        "user": user
      })

    }, function(error){

      res.json({"error": error})

    })

  })

}

module.exports = USER_ROUTER;