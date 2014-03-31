package com.phonegap.plugins;

import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CallbackContext;

import org.json.JSONArray;
import org.json.JSONException;

import android.content.Context;
import android.net.wifi.WifiInfo;
import android.net.wifi.WifiManager;
import android.provider.Settings.Secure;

/**
 * This class echoes a string called from JavaScript.
 */
public class CDVDeviceInfo extends CordovaPlugin {

    @Override
    public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
    	if (action.equals("getId")) {
			this.getId(callbackContext);
			return true;
		}

		if (action.equals("getManufacturer")) {
			this.getManufacturer(callbackContext);
			return true;
		}

		if (action.equals("getModel")) {
			this.getModel(callbackContext);
			return true;
		}
		
		if (action.equals("getMacAddress")) {
			this.getMacAddress(callbackContext);
			return true;
		}
		return false;
    }
    
    private void getId(CallbackContext callbackContext) {
		Context context = cordova.getActivity().getApplicationContext();
		String deviceId = Secure.getString(context.getContentResolver(),
				Secure.ANDROID_ID) ;
		if( deviceId.isEmpty() ){
			callbackContext.error("Fail to get device id");
		}else{
			callbackContext.success(deviceId);
		}
	}

	private void getManufacturer(CallbackContext callbackContext){
		if( android.os.Build.MANUFACTURER.isEmpty() ){
			callbackContext.error("Fail to get device manufacturer");
		}else{
			callbackContext.success(android.os.Build.MANUFACTURER);
		}
	}

	private void getModel(CallbackContext callbackContext){
		if( android.os.Build.MODEL.isEmpty() ){
			callbackContext.error("Fail to get device model");
		}else{
			callbackContext.success(android.os.Build.MODEL);
		}
	}
    
    private void getMacAddress(CallbackContext callbackContext){
        String macAddress = null;
		Context context = cordova.getActivity().getApplicationContext();
		WifiManager wm = (WifiManager) context
        .getSystemService(Context.WIFI_SERVICE);
		WifiInfo wifiInfo = wm.getConnectionInfo();
		macAddress = wifiInfo.getMacAddress();
        
		if (macAddress != null) {
			callbackContext.success(macAddress);
		}else{
			callbackContext.error("00:00:00:00:00:00");
		}
	}
}
