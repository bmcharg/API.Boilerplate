var config = require("../../config/config.js");
var logger = require("../../helpers/logger.js")("USER_SERVICE", config.SHOW_DEBUG);
var db 		 = require("../../data/db.js");

function USER_SERVICE() {

	return {

		getUser: function(userId){

			logger.log("Fetching user " + userId);

			return new Promise(function (resolve, reject) {

				var user = {
					id: 123,
					fname: "Brian",
					sname: "McHarg",
					email: "brian.mcharg@chunkgroup.com"
				};

				resolve(user);

			})

		}

	}

}

module.exports = new USER_SERVICE();