//
//  CDVDeviceInfo.m
//  CustomPlugin
//
//  Created by Kenneth on 28/3/14.
//
//

#import "CDVDeviceInfo.h"
#import <AdSupport/ASIdentifierManager.h>
#import <UIKit/UIDevice.h>
#include <sys/sysctl.h>

@implementation CDVDeviceInfo

- (void)getManufacturer:(CDVInvokedUrlCommand*)command
{
    CDVPluginResult* pluginResult = nil;
    pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString:@"Apple"];
    [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];

}
- (void)getModel:(CDVInvokedUrlCommand*)command
{
    CDVPluginResult* pluginResult = nil;
    size_t size;
    sysctlbyname("hw.machine", NULL, &size, NULL, 0);
    char* machine = malloc(size);
    sysctlbyname("hw.machine", machine, &size, NULL, 0);
    NSString* platform = [NSString stringWithUTF8String:machine];
    free(machine);
    if( platform != nil){
        pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString:platform];
    }else{
        pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_ERROR];
    }
    [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
}
- (void)getId:(CDVInvokedUrlCommand*)command{
    CDVPluginResult* pluginResult = nil;
    NSString *adId = [[[ASIdentifierManager sharedManager] advertisingIdentifier] UUIDString];
    if( adId != nil){
        pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString:adId];
    }else{
        pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_ERROR];
    }
    [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
}
- (void)getMacAddress:(CDVInvokedUrlCommand*)command{
    CDVPluginResult* pluginResult = nil;
    NSString *adId = [[[ASIdentifierManager sharedManager] advertisingIdentifier] UUIDString];
    if( adId != nil){
        pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString:adId];
    }else{
        pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_ERROR];
    }
    [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
}


@end
