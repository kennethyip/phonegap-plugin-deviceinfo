var exec = require('cordova/exec');

var deviceInfo = {
	getManufacturer : function(success, error) {
		exec(success, error, "phonegap-plugin-deviceinfo", "getManufacturer");
	},
	getModel : function(success, error) {
		exec(success, error, "phonegap-plugin-deviceinfo", "getModel");
	},
	getId : function(success, error) {
		exec(success, error, "phonegap-plugin-deviceinfo", "getId");
	},
};

module.exports = deviceInfo;

