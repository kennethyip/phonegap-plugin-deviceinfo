var exec = require('cordova/exec');

var deviceInfo = {
	getManufacturer : function(success, error) {
		exec(success, error, "DeviceInfo", "getManufacturer", []);
	},
	getModel : function(success, error) {
		exec(success, error, "DeviceInfo", "getModel", []);
	},
	getId : function(success, error) {
		exec(success, error, "DeviceInfo", "getId", []);
	},
};

module.exports = deviceInfo;

