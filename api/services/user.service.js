var config = require("../../config/config.js");
var logger = require("../../helpers/logger.js")("USER_SERVICE", config.SHOW_DEBUG);
var db 		 = require("../../data/db.js");

function USER_SERVICE() {

	var valid = function(user){

		if (user && user.email) {
			return true;
		}else{
			return false;
		}

	};

	return {

		getUser: function(userId){

			// Non-DB Call to fetch a user via ID
			// Used in /routes/users.route.js as a sample for route /users/:userId

			logger.log("Fetching user " + userId);

			return new Promise(function (resolve, reject) {

				if (userId !== "test"){

					var error = {
						code: 123,
						status: 404,
						message: "Simualted error message"
					}

					reject(error);

				}else{

					var user = {
						id: "test",
						fname: "FName",
						sname: "SName",
						email: "Email"
					};

					resolve(user);

				}

			})

		},

		createUser: function(user){

			// Non-DB Call to create a new User
			// Used in /routes/users.route.js as a sample for route /users/:userId

			logger.log("Creating a new user");

			return new Promise(function (resolve, reject) {

				// INSERT DB LOGIC HERE

				if (valid(user)){

					resolve(user);

				}else{

					var error = {
						code: 123,
						status: 400,
						message: "Invalid or no user data supplied"
					};

					reject(error);

				}

			});

		},

		updateUser: function(user){

			// Update a User's details
			// Used in /routes/users.route.js as a sample for route /users/:userId

			return new Promise(function (resolve, reject) {

				if (valid(user)){

					logger.log("Upading user " + user.id);
					resolve(user);

				}else{

					var error = {
						code: 123,
						status: 400,
						message: "No data supplied"
					}

					reject(error);

				}

			});

		},

		deleteUser: function(userId){

			// Delete a User's details
			// Used in /routes/users.route.js as a sample for route /users/:userId

			logger.log("Deleting user " + userId);

			return new Promise(function (resolve, reject) {

				if (userId == "test"){

					var user = {
						id: "810cdf65-2a65-43ec-a5b8-0e100620de7f",
						fname: "FName",
						sname: "SName",
						email: "Email"
					};

					resolve(user);

				}else{

					var error = {
						code: 123,
						status: 404,
						message: "Can't delete. User not found"
					}

					reject(error);

				}

			});

		}

	}

}

module.exports = new USER_SERVICE();