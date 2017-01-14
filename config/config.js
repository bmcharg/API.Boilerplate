var package = require('../package.json');
var moment  = require('moment');

function CONFIG() {

	var active = process.env.ENVIRONMENT || "DEVELOPMENT";

	var configs = {

	  DEVELOPMENT: {

			NAME: "Development",
			PORT: 3000,

			DB: {
			  CONNECTION_LIMIT : 100,
			  HOST		 				 : 'localhost',
			  PORT     				 : 8889,
			  USER     				 : 'root',
			  PASSWORD 				 : 'Tr1b3c406',
			  NAME 		 				 : 'kudo',
			  DEBUG    				 : false
			},

			TRACKING_ID: '',
			SHOW_DEBUG: true

	  },

	  STAGING: {

			NAME: "Staging",
			PORT: 3000,
			
			DB: {
			  CONNECTION_LIMIT : 100,
			  HOST		 				 : 'localhost',
			  PORT     				 : 8889,
			  USER     				 : 'root',
			  PASSWORD 				 : 'Tr1b3c406',
			  NAME     				 : 'kudo',
			  DEBUG    				 : false
			},

			TRACKING_ID: '',
			SHOW_DEBUG: false

	  },

	  LIVE: {

			NAME: "Live",
			PORT: 3000,

			DB: {
			  CONNECTION_LIMIT : 100,
			  HOST		 				 : 'localhost',
			  PORT     				 : 8889,
			  USER     				 : 'root',
			  PASSWORD 				 : 'Tr1b3c406',
			  NAME 		 				 : 'kudo',
			  DEBUG    				 : false
			},

			TRACKING_ID: '',
			SHOW_DEBUG: false  	

	  }

	}

	var activeConfig = configs[active];
	activeConfig.APP = {
	  NAME: package.name,
	  VERSION: package.version,
	  DESCRIPTION: package.description,
	  STARTED: moment().format('Do MMMM YYYY, HH:mm:ss')
	}

	activeConfig.PORT = process.env.ENVIRONMENT || activeConfig.PORT;

  return activeConfig;

}

module.exports = new CONFIG();



