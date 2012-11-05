//
//  AdWhrildBinding.m
//  AdWhirlTest
//
//  Created by Mike on 1/27/11.
//  Copyright 2011 Prime31 Studios. All rights reserved.
//

#import "AdWhirlManager.h"


// Converts C style string to NSString
#define GetStringParam( _x_ ) ( _x_ != NULL ) ? [NSString stringWithUTF8String:_x_] : [NSString stringWithUTF8String:""]


// Sets the publiser Id and prepares AdMob for action.  Must be called before any other methods!
void _adWhirlInit( const char * adWhirlApplicationKey )
{
	[AdWhirlManager sharedManager].adWhirlApplicationKey = GetStringParam( adWhirlApplicationKey );
}


// 
void _adWhirlIgnoreAutoRefreshTimer( bool shouldIgnore )
{
	[[AdWhirlManager sharedManager] ignoreAutoRefreshTimer:shouldIgnore];
}


void _adWhirlCreateBanner( bool bannerOnTop )
{
	[[AdWhirlManager sharedManager] createBannerOnTop:bannerOnTop];
}


// Destroys the banner and removes it from view
void _adWhirlDestroyBanner()
{
	[[AdWhirlManager sharedManager] destroyBanner];
}


// Allows you to toggle test mode on/off.  Do not ship with test mode on!
void _adWhirlSetTestMode( bool enableTestMode )
{
	[AdWhirlManager sharedManager].testMode = enableTestMode;
}


// When ads are either received or failed to load, the game object in Unity will be messaged
// by calling the method passed in with either a "1" if an ad loaded or a "0" if it failed.
// Please note that the "1" and "0" are strings so the method should take one string parameter.
void _adWhirlSendAdDelegateCalls( const char * gameObjectName, const char * methodOnGameObject )
{
	[AdWhirlManager sharedManager].adDelegateGameObject = GetStringParam( gameObjectName );
	[AdWhirlManager sharedManager].adDelegateMethod = GetStringParam( methodOnGameObject );
}

