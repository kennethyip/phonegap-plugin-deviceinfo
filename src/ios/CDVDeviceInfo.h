//
//  CDVDeviceInfo.h
//  CustomPlugin
//
//  Created by Kenneth on 28/3/14.
//
//

#import <Cordova/CDV.h>

@interface CDVDeviceInfo : CDVPlugin

- (void)getDeviceManufacturer:(CDVInvokedUrlCommand*)command;
- (void)getDeviceModel:(CDVInvokedUrlCommand*)command;
- (void)getDeviceId:(CDVInvokedUrlCommand*)command;

@end
