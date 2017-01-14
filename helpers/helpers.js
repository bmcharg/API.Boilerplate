function HELPERS() {
  var self = this;
}

HELPERS.prototype.stripNullValues = function(object){

	for (var property in object) {
	    if (object.hasOwnProperty(property) && object[property] == null) {               
	      delete object[property];
	    }
	}

	return object;

}

module.exports = new HELPERS();