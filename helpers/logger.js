var moment = require('moment');

module.exports = function(sectionId, enabled){

	return {

		log: function(message) {

			var logTime = moment().format('HH:mm:ss');
			var prefix = logTime + " (" + sectionId + ") "
			if (enabled){
				console.log(prefix + message);
			}

		}

	}

};
