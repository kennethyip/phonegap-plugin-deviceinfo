var exec = require('cordova/exec');

var deviceInfo = {
	getManufacturer : function(success, error) {
		exec(success, error, "plugin-deviceinfo", "getManufacturer");
	},
	getModel : function(success, error) {
		exec(success, error, "plugin-deviceinfo", "getModel");
	},
	getId : function(success, error) {
		exec(success, error, "plugin-deviceinfo", "getId");
	},
};

module.exports = deviceInfo;

