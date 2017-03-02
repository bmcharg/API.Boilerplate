var config = require("../../config/config.js");
var userService = require("../services/user.service.js");

function USER_ROUTER(router) {

  var self = this;

  router.get("/user/:userId", function(req, res){

    userService.getUser(req.params.userId).then(function(user){

      res.json({
        "error": false,
        "user": user
      })

    }, function(error){

      res.status(error.status);
      res.json({"error": error})

    })

  });

  router.post("/user", function(req, res){

    userService.createUser(req.body).then(function(user){

      res.json({
        "error": false,
        "user": user
      })

    }, function(error){

      res.status(error.status);
      res.json({"error": error})

    })

  });

  router.put("/user/:userId", function(req, res){

    userService.updateUser(req.body).then(function(user){

      res.json({
        "error": false,
        "user": user
      })

    }, function(error){

      res.status(error.status);
      res.json({"error": error})

    })      

  });

  router.delete("/user/:userId", function(req, res){

    userService.deleteUser(req.params.userId).then(function(user){

      res.json({
        "error": false,
        "message": "User deleted successfully"
      })

    }, function(error){

      res.status(error.status);
      res.json({"error": error})

    })

  })    

}

module.exports = USER_ROUTER;