using UnityEngine;
using System.Collections;
using System.Runtime.InteropServices;


public class AdWhirlBinding
{
	[DllImport("__Internal")]
	private static extern void _adWhirlInit( string adWhirlApplicationKey );

	// Sets the publiser Id and prepares AdWhirl for action.  Must be called before any other methods!
	public static void init( string adWhirlApplicationKey )
	{
		if( Application.platform == RuntimePlatform.IPhonePlayer )
			_adWhirlInit( adWhirlApplicationKey );
	}


	[DllImport("__Internal")]
	private static extern void _adWhirlIgnoreAutoRefreshTimer( bool shouldIgnore );

	// Allows you to toggle if the AdWhirl SDK should ignore the auto refresh timer for the ad banner
	public static void ignoreAutoRefreshTimer( bool shouldIgnore )
	{
		if( Application.platform == RuntimePlatform.IPhonePlayer )
			_adWhirlIgnoreAutoRefreshTimer( shouldIgnore );
	}


	[DllImport("__Internal")]
	private static extern void _adWhirlCreateBanner( bool bannerOnTop );

	// Creates a banner either centered on top of the screen or on the bottom
	public static void createBanner( bool bannerOnTop )
	{
		if( Application.platform == RuntimePlatform.IPhonePlayer )
			_adWhirlCreateBanner( bannerOnTop );
	}


	[DllImport("__Internal")]
	private static extern void _adWhirlDestroyBanner();

	// Destroys the banner and removes it from view
	public static void destroyBanner()
	{
		if( Application.platform == RuntimePlatform.IPhonePlayer )
			_adWhirlDestroyBanner();
	}

	
	[DllImport("__Internal")]
	private static extern void _adWhirlSetTestMode( bool enableTestMode );

	// Allows you to toggle test mode on/off.  Do not ship with test mode on!
	public static void setTestMode( bool enableTestMode )
	{
		if( Application.platform == RuntimePlatform.IPhonePlayer )
			_adWhirlSetTestMode( enableTestMode );
	}
	
	
	[DllImport("__Internal")]
	private static extern void _adWhirlSendAdDelegateCalls( string gameObjectName, string methodOnGameObject );

	// When ads are either received or failed to load, the game object in Unity will be messaged
	// by calling the method passed in with either a "1" if an ad loaded or a "0" if it failed.
	// Please note that the "1" and "0" are strings so the method should take one string parameter.
	public static void sendAdDelegateCalls( string gameObjectName, string methodOnGameObject )
	{
		if( Application.platform == RuntimePlatform.IPhonePlayer )
			_adWhirlSendAdDelegateCalls( gameObjectName, methodOnGameObject );
	}


}

