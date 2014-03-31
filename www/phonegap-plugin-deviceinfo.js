var exec = require('cordova/exec');
exports.getDeviceManufacturer = function(success, error) {
    exec(success, error, "phonegap-plugin-deviceinfo", "getDeviceManufacturer");
};

exports.getDeviceModel = function(success, error) {
    exec(success, error, "phonegap-plugin-deviceinfo", "getDeviceModel");
};

exports.getDeviceId = function(success, error) {
    exec(success, error, "phonegap-plugin-deviceinfo", "getDeviceId");
};


