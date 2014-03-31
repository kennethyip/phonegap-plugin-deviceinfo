var deviceInfo_exec = require('cordova/exec');
window.getDeviceManufacturer = function(success, error) {
    deviceInfo_exec(success, error, "phonegap-plugin-deviceinfo", "getDeviceManufacturer");
};

window.getDeviceModel = function(success, error) {
    deviceInfo_exec(success, error, "phonegap-plugin-deviceinfo", "getDeviceModel");
};

window.getDeviceId = function(success, error) {
    deviceInfo_exec(success, error, "phonegap-plugin-deviceinfo", "getDeviceId");
};


