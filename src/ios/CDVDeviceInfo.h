//
//  CDVDeviceInfo.h
//  CustomPlugin
//
//  Created by Kenneth on 28/3/14.
//
//

#import <Cordova/CDV.h>

@interface CDVDeviceInfo : CDVPlugin

- (void)getManufacturer:(CDVInvokedUrlCommand*)command;
- (void)getModel:(CDVInvokedUrlCommand*)command;
- (void)getId:(CDVInvokedUrlCommand*)command;
- (void)getMacAddress:(CDVInvokedUrlCommand*)command;

@end
