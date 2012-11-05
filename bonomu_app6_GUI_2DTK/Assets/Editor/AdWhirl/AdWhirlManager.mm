//
//  AdWhirlManager.m
//  AdWhirlTest
//
//  Created by Mike on 1/27/11.
//  Copyright 2011 Prime31 Studios. All rights reserved.
//

#import "AdWhirlManager.h"


void UnitySendMessage( const char * className, const char * methodName, const char * param );
void UnityPause( bool pause );
UIViewController *UnityGetGLViewController();


@implementation AdWhirlManager

@synthesize bannerOnTop, adView = _adView, adWhirlApplicationKey = _adWhirlApplicationKey,
			adDelegateGameObject = _adDelegateGameObject, adDelegateMethod = _adDelegateMethod, testMode = _testMode;

///////////////////////////////////////////////////////////////////////////////////////////////////
#pragma mark NSObject

+ (AdWhirlManager*)sharedManager
{
	static AdWhirlManager *sharedSingleton;
	
	if( !sharedSingleton )
		sharedSingleton = [[AdWhirlManager alloc] init];
	
	return sharedSingleton;
}


- (id)init
{
	if( ( self = [super init] ) )
	{
		_testMode = NO;
	}
	return self;
}


///////////////////////////////////////////////////////////////////////////////////////////////////
#pragma mark AdWhirlDelegate

- (NSString*)adWhirlApplicationKey
{
	return _adWhirlApplicationKey;
}


- (UIViewController*)viewControllerForPresentingModalView
{
	return UnityGetGLViewController();
}


- (BOOL)adWhirlTestMode
{
	return _testMode;
}


- (UIDeviceOrientation)adWhirlCurrentOrientation
{
	return (UIDeviceOrientation)[UnityGetGLViewController() interfaceOrientation];
}


- (void)adWhirlDidReceiveAd:(AdWhirlView*)adWhirlView
{
	NSLog( @"-- adWhirlDidReceiveAd" );
	
	
	// auto resize the adViews frame and center it
	CGSize actualAdSize = _adView.actualAdSize;
	CGRect newFrame = _adView.frame;
	
	// handle the size and x position
	newFrame.size = actualAdSize;
	newFrame.origin.x = ( UnityGetGLViewController().view.bounds.size.width - actualAdSize.width ) / 2;
	
	// handle if we are on top or bottom
	if( bannerOnTop )
	{
		newFrame.origin.y = 0;
	}
	else
	{
		// figure out what our height is
		CGFloat height = UnityGetGLViewController().view.frame.size.height;
		if( UIInterfaceOrientationIsLandscape( [UnityGetGLViewController() interfaceOrientation] ) )
		   height = UnityGetGLViewController().view.frame.size.width;
		   
		newFrame.origin.y = height - actualAdSize.height;
	}
	
	_adView.frame = newFrame;
	_adView.hidden = NO;
	

	// send a message back to Unity if desired
	if( _adDelegateGameObject && _adDelegateMethod )
		UnitySendMessage( [_adDelegateGameObject UTF8String], [_adDelegateMethod UTF8String], "1" );
}


- (void)adWhirlDidFailToReceiveAd:(AdWhirlView*)adWhirlView usingBackup:(BOOL)yesOrNo
{
	_adView.hidden = YES;
	NSLog( @"-- adWhirlDidFailToReceiveAd" );
	
	// send a message back to Unity if desired
	if( _adDelegateGameObject && _adDelegateMethod )
		UnitySendMessage( [_adDelegateGameObject UTF8String], [_adDelegateMethod UTF8String], "0" );
}


- (void)adWhirlWillPresentFullScreenModal
{
	UnityPause( true );
}


- (void)adWhirlDidDismissFullScreenModal
{
	UnityPause( false );
}


///////////////////////////////////////////////////////////////////////////////////////////////////
#pragma mark Public

- (void)ignoreAutoRefreshTimer:(BOOL)shouldIgnore
{
	if( shouldIgnore )
	{
		[_adView ignoreAutoRefreshTimer];
	}
	else
	{
		[_adView doNotIgnoreAutoRefreshTimer];
	}
}


- (void)createBannerOnTop:(BOOL)shouldBannerBeOnTop
{
	self.bannerOnTop = shouldBannerBeOnTop;
	
	// kill the current adView if we have one
	if( _adView )
		[self destroyBanner];

	// create the ad view with the default size
	self.adView = [AdWhirlView requestAdWhirlViewWithDelegate:self];
	
	// setup the autoresizing masks
	if( bannerOnTop )
	{
		_adView.autoresizingMask = UIViewAutoresizingFlexibleBottomMargin | UIViewAutoresizingFlexibleLeftMargin | UIViewAutoresizingFlexibleRightMargin;
	}
	else
	{
		_adView.autoresizingMask = UIViewAutoresizingFlexibleTopMargin | UIViewAutoresizingFlexibleLeftMargin | UIViewAutoresizingFlexibleRightMargin;
	}
	
	_adView.delegate = self;
	[UnityGetGLViewController().view addSubview:_adView];
}


- (void)destroyBanner
{
	[_adView removeFromSuperview];
	[_adView release];
	_adView = nil;
}


@end
