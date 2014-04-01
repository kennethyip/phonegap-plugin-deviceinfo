var exec = require('cordova/exec');

var deviceInfo = {
	getManufacturer : function(success, error) {
		exec(success, error, "deviceinfo", "getManufacturer");
	},
	getModel : function(success, error) {
		exec(success, error, "deviceinfo", "getModel");
	},
	getId : function(success, error) {
		exec(success, error, "deviceinfo", "getId");
	},
};

module.exports = deviceInfo;

