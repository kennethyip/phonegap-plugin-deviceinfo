var exec = require('cordova/exec');

var deviceInfo = {
	getDeviceManufacturer : function(success, error) {
		exec(success, error, "phonegap-plugin-deviceinfo", "getDeviceManufacturer");
	},
	getDeviceModel : function(success, error) {
		exec(success, error, "phonegap-plugin-deviceinfo", "getDeviceModel");
	},
	getDeviceId : function(success, error) {
		exec(success, error, "phonegap-plugin-deviceinfo", "getDeviceId");
	}
}

module.exports = deviceInfo;

