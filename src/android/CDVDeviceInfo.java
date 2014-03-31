package com.phonegap.plugins;

import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CallbackContext;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

/**
 * This class echoes a string called from JavaScript.
 */
public class CDVDeviceInfo extends CordovaPlugin {

    @Override
    public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
    	if (action.equals("getDeviceID")) {
			return this.getDeviceID(callbackContext);
		}

		if (action.equals("getManufacturer")) {
			return this.getManufacturer(callbackContext);
		}

		if (action.equals("getModel")) {
			return this.getModel(callbackContext);
		}
		return false;
    }
    
    private void getDeviceId(CallbackContext callbackContext) {
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
}
