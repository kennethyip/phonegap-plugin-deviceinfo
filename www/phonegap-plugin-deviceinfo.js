var deviceInfo_exec = require('cordova/exec');
exports.getDeviceManufacturer = function(success, error) {
    deviceInfo_exec(success, error, "phonegap-plugin-deviceinfo", "getDeviceManufacturer");
};

exports.getDeviceModel = function(success, error) {
    deviceInfo_exec(success, error, "phonegap-plugin-deviceinfo", "getDeviceModel");
};

exports.getDeviceId = function(success, error) {
    deviceInfo_exec(success, error, "phonegap-plugin-deviceinfo", "getDeviceId");
};


