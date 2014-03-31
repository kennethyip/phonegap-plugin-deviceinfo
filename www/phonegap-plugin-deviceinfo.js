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
	getMacAddress : function(success, error) {
		exec(success, error, "phonegap-plugin-deviceinfo", "getMacAddress");
	}
};

module.exports = deviceInfo;

