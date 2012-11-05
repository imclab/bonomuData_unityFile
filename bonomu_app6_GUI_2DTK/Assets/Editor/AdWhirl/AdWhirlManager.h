//
//  AdWhirlManager.h
//  AdWhirlTest
//
//  Created by Mike on 1/27/11.
//  Copyright 2011 Prime31 Studios. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "AdWhirlDelegateProtocol.h"
#import "AdWhirlView.h"



#define LOG_FRAME( _f, _m ) NSLog( @"%@: (%.1f, %.1f, %.1f, %.1f)", _m, _f.origin.x, _f.origin.y, _f.size.width, _f.size.height );
#define LOG_SIZE( _s, _m ) NSLog( @"%@: (%.1f, %.1f)", _m, _s.width, _s.height );
#define LOG_POINT( _s, _m ) NSLog( @"%@: (%.1f, %.1f)", _m, _s.x, _s.y );


@interface AdWhirlManager : NSObject <AdWhirlDelegate>
{
	AdWhirlView *_adView;
	NSString *_adWhirlApplicationKey;
	NSString *_adDelegateGameObject;
	NSString *_adDelegateMethod;
	
@private
	UIInterfaceOrientation _orientation;
	BOOL _testMode;
}
@property (nonatomic, retain) AdWhirlView *adView;
@property (nonatomic, retain) NSString *adWhirlApplicationKey;
@property (nonatomic, retain) NSString *adDelegateGameObject;
@property (nonatomic, retain) NSString *adDelegateMethod;

@property (nonatomic, assign) BOOL bannerOnTop;
@property (nonatomic, assign) BOOL testMode;


+ (AdWhirlManager*)sharedManager;

- (void)ignoreAutoRefreshTimer:(BOOL)shouldIgnore;

- (void)createBannerOnTop:(BOOL)shouldBannerBeOnTop;

- (void)destroyBanner;

@end
