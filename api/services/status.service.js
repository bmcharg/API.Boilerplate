var config = require("../../config/config.js");
var logger = require("../../helpers/logger.js")("STATUS_SERVICE", config.SHOW_DEBUG);
var db 		 = require("../../data/db.js");
var request  = require("request");

function STATUS_SERVICE() {

	var urls = [

		'https://buzz-app.stage.api.bbci.co.uk/api/v1/info',
		'https://buzz-cms.stage.tools.bbc.co.uk',
		'https://buzz-moderation.stage.tools.bbc.co.uk'

	];

	return {

		checkURL: function(url){

			return new Promise(function (resolve, reject) {

				console.log("Checking " + url);

				var options = {
						method: 'GET',
				    uri:  url,
				    timeout: 5000
				};

				request(options, (error, response, body) => {

					if (response){

						console.log("Response received");

						resolve(response.statusCode);

					}	else {

						console.log("NO Response received");

						resolve('503');

					}				

				});

				// https.get('https://buzz-app.stage.api.bbci.co.uk/api/v1/infos', res => {
				//   res.setEncoding("utf8");
				//   let body = "";
				//   res.on("data", data => {
				//     body += data;
				//   });
				//   res.on("end", () => {
				//     body = JSON.parse(body);
				//     console.log("Response received");
				//     resolve();
				//   });
				// });

			})

		}

	}

}

module.exports = new STATUS_SERVICE();