using UnityEngine;
using UnityEditor;
using System;
using System.Collections;
using System.IO;
using System.Reflection;


public class AdWhirlMenuItem : MonoBehaviour
{
	private const string _disabledPrefix = "DISABLED";
	
	
	#region AdVendors
	
	[MenuItem( "Prime31/AdWhirl Ad Vendors/AdMob/Enable", true )]
	static bool enableCheck()
	{
		string script = getPostprocessScriptName( MethodInfo.GetCurrentMethod() );
		return !isScriptEnabled( script );
	}
	
	[MenuItem( "Prime31/AdWhirl Ad Vendors/AdMob/Disable", true )]
	static bool disableCheck()
	{
		string script = getPostprocessScriptName( MethodInfo.GetCurrentMethod() );
		return isScriptEnabled( script );
	}

	[MenuItem( "Prime31/AdWhirl Ad Vendors/AdMob/Enable" )]
	static void enableSupport()
	{
		string script = getPostprocessScriptName( MethodInfo.GetCurrentMethod() );
		enablePluginSupport( script, true );
	}
	
	[MenuItem( "Prime31/AdWhirl Ad Vendors/AdMob/Disable" )]
	static void disableSupport()
	{
		string script = getPostprocessScriptName( MethodInfo.GetCurrentMethod() );
		enablePluginSupport( script, false );
	}



	[MenuItem( "Prime31/AdWhirl Ad Vendors/AdSense/Enable", true )]
	static bool enableCheck1()
	{
		string script = getPostprocessScriptName( MethodInfo.GetCurrentMethod() );
		return !isScriptEnabled( script );
	}
	
	[MenuItem( "Prime31/AdWhirl Ad Vendors/AdSense/Disable", true )]
	static bool disableCheck1()
	{
		string script = getPostprocessScriptName( MethodInfo.GetCurrentMethod() );
		return isScriptEnabled( script );
	}

	[MenuItem( "Prime31/AdWhirl Ad Vendors/AdSense/Enable" )]
	static void enableSupport1()
	{
		string script = getPostprocessScriptName( MethodInfo.GetCurrentMethod() );
		enablePluginSupport( script, true );
	}
	
	[MenuItem( "Prime31/AdWhirl Ad Vendors/AdSense/Disable" )]
	static void disableSupport1()
	{
		string script = getPostprocessScriptName( MethodInfo.GetCurrentMethod() );
		enablePluginSupport( script, false );
	}



	[MenuItem( "Prime31/AdWhirl Ad Vendors/BrightRoll/Enable", true )]
	static bool enableCheck2()
	{
		string script = getPostprocessScriptName( MethodInfo.GetCurrentMethod() );
		return !isScriptEnabled( script );
	}
	
	[MenuItem( "Prime31/AdWhirl Ad Vendors/BrightRoll/Disable", true )]
	static bool disableCheck2()
	{
		string script = getPostprocessScriptName( MethodInfo.GetCurrentMethod() );
		return isScriptEnabled( script );
	}

	[MenuItem( "Prime31/AdWhirl Ad Vendors/BrightRoll/Enable" )]
	static void enableSupport2()
	{
		string script = getPostprocessScriptName( MethodInfo.GetCurrentMethod() );
		enablePluginSupport( script, true );
	}
	
	[MenuItem( "Prime31/AdWhirl Ad Vendors/BrightRoll/Disable" )]
	static void disableSupport2()
	{
		string script = getPostprocessScriptName( MethodInfo.GetCurrentMethod() );
		enablePluginSupport( script, false );
	}
	
	
	
	[MenuItem( "Prime31/AdWhirl Ad Vendors/Nexage/Enable", true )]
	static bool enableCheckNexage()
	{
		string script = getPostprocessScriptName( MethodInfo.GetCurrentMethod() );
		return !isScriptEnabled( script );
	}
	
	[MenuItem( "Prime31/AdWhirl Ad Vendors/Nexage/Disable", true )]
	static bool disableCheckNexage()
	{
		string script = getPostprocessScriptName( MethodInfo.GetCurrentMethod() );
		return isScriptEnabled( script );
	}

	
	[MenuItem( "Prime31/AdWhirl Ad Vendors/Nexage/Enable" )]
	static void enableSupportNexage()
	{
		string script = getPostprocessScriptName( MethodInfo.GetCurrentMethod() );
		enablePluginSupport( script, true );
	}
	
	[MenuItem( "Prime31/AdWhirl Ad Vendors/Nexage/Disable" )]
	static void disableNexage()
	{
		string script = getPostprocessScriptName( MethodInfo.GetCurrentMethod() );
		enablePluginSupport( script, false );
	}
	



	[MenuItem( "Prime31/AdWhirl Ad Vendors/Greystripe/Enable", true )]
	static bool enableCheck3()
	{
		string script = getPostprocessScriptName( MethodInfo.GetCurrentMethod() );
		return !isScriptEnabled( script );
	}
	
	[MenuItem( "Prime31/AdWhirl Ad Vendors/Greystripe/Disable", true )]
	static bool disableCheck3()
	{
		string script = getPostprocessScriptName( MethodInfo.GetCurrentMethod() );
		return isScriptEnabled( script );
	}

	[MenuItem( "Prime31/AdWhirl Ad Vendors/Greystripe/Enable" )]
	static void enableSupport3()
	{
		string script = getPostprocessScriptName( MethodInfo.GetCurrentMethod() );
		enablePluginSupport( script, true );
	}
	
	[MenuItem( "Prime31/AdWhirl Ad Vendors/Greystripe/Disable" )]
	static void disableSupport3()
	{
		string script = getPostprocessScriptName( MethodInfo.GetCurrentMethod() );
		enablePluginSupport( script, false );
	}


	
	[MenuItem( "Prime31/AdWhirl Ad Vendors/InMobi/Enable", true )]
	static bool enableCheck4()
	{
		string script = getPostprocessScriptName( MethodInfo.GetCurrentMethod() );
		return !isScriptEnabled( script );
	}
	
	[MenuItem( "Prime31/AdWhirl Ad Vendors/InMobi/Disable", true )]
	static bool disableCheck4()
	{
		string script = getPostprocessScriptName( MethodInfo.GetCurrentMethod() );
		return isScriptEnabled( script );
	}

	[MenuItem( "Prime31/AdWhirl Ad Vendors/InMobi/Enable" )]
	static void enableSupport4()
	{
		string script = getPostprocessScriptName( MethodInfo.GetCurrentMethod() );
		enablePluginSupport( script, true );
	}
	
	[MenuItem( "Prime31/AdWhirl Ad Vendors/InMobi/Disable" )]
	static void disableSupport4()
	{
		string script = getPostprocessScriptName( MethodInfo.GetCurrentMethod() );
		enablePluginSupport( script, false );
	}



	[MenuItem( "Prime31/AdWhirl Ad Vendors/JumpTap/Enable", true )]
	static bool enableCheck5()
	{
		string script = getPostprocessScriptName( MethodInfo.GetCurrentMethod() );
		return !isScriptEnabled( script );
	}
	
	[MenuItem( "Prime31/AdWhirl Ad Vendors/JumpTap/Disable", true )]
	static bool disableCheck5()
	{
		string script = getPostprocessScriptName( MethodInfo.GetCurrentMethod() );
		return isScriptEnabled( script );
	}

	[MenuItem( "Prime31/AdWhirl Ad Vendors/JumpTap/Enable" )]
	static void enableSupport5()
	{
		string script = getPostprocessScriptName( MethodInfo.GetCurrentMethod() );
		enablePluginSupport( script, true );
	}
	
	[MenuItem( "Prime31/AdWhirl Ad Vendors/JumpTap/Disable" )]
	static void disableSupport5()
	{
		string script = getPostprocessScriptName( MethodInfo.GetCurrentMethod() );
		enablePluginSupport( script, false );
	}



	[MenuItem( "Prime31/AdWhirl Ad Vendors/MdotM/Enable", true )]
	static bool enableCheck6()
	{
		string script = getPostprocessScriptName( MethodInfo.GetCurrentMethod() );
		return !isScriptEnabled( script );
	}
	
	[MenuItem( "Prime31/AdWhirl Ad Vendors/MdotM/Disable", true )]
	static bool disableCheck6()
	{
		string script = getPostprocessScriptName( MethodInfo.GetCurrentMethod() );
		return isScriptEnabled( script );
	}

	[MenuItem( "Prime31/AdWhirl Ad Vendors/MdotM/Enable" )]
	static void enableSupport6()
	{
		string script = getPostprocessScriptName( MethodInfo.GetCurrentMethod() );
		enablePluginSupport( script, true );
	}
	
	[MenuItem( "Prime31/AdWhirl Ad Vendors/MdotM/Disable" )]
	static void disableSupport6()
	{
		string script = getPostprocessScriptName( MethodInfo.GetCurrentMethod() );
		enablePluginSupport( script, false );
	}



	[MenuItem( "Prime31/AdWhirl Ad Vendors/Millennial/Enable", true )]
	static bool enableCheck7()
	{
		string script = getPostprocessScriptName( MethodInfo.GetCurrentMethod() );
		return !isScriptEnabled( script );
	}
	
	[MenuItem( "Prime31/AdWhirl Ad Vendors/Millennial/Disable", true )]
	static bool disableCheck7()
	{
		string script = getPostprocessScriptName( MethodInfo.GetCurrentMethod() );
		return isScriptEnabled( script );
	}

	[MenuItem( "Prime31/AdWhirl Ad Vendors/Millennial/Enable" )]
	static void enableSupport7()
	{
		string script = getPostprocessScriptName( MethodInfo.GetCurrentMethod() );
		enablePluginSupport( script, true );
	}
	
	[MenuItem( "Prime31/AdWhirl Ad Vendors/Millennial/Disable" )]
	static void disableSupport7()
	{
		string script = getPostprocessScriptName( MethodInfo.GetCurrentMethod() );
		enablePluginSupport( script, false );
	}



	[MenuItem( "Prime31/AdWhirl Ad Vendors/Quattro/Enable", true )]
	static bool enableCheck8()
	{
		string script = getPostprocessScriptName( MethodInfo.GetCurrentMethod() );
		return !isScriptEnabled( script );
	}
	
	[MenuItem( "Prime31/AdWhirl Ad Vendors/Quattro/Disable", true )]
	static bool disableCheck8()
	{
		string script = getPostprocessScriptName( MethodInfo.GetCurrentMethod() );
		return isScriptEnabled( script );
	}

	[MenuItem( "Prime31/AdWhirl Ad Vendors/Quattro/Enable" )]
	static void enableSupport8()
	{
		string script = getPostprocessScriptName( MethodInfo.GetCurrentMethod() );
		enablePluginSupport( script, true );
	}
	
	[MenuItem( "Prime31/AdWhirl Ad Vendors/Quattro/Disable" )]
	static void disableSupport8()
	{
		string script = getPostprocessScriptName( MethodInfo.GetCurrentMethod() );
		enablePluginSupport( script, false );
	}
	
	
	
	[MenuItem( "Prime31/AdWhirl Ad Vendors/VideoEgg/Enable", true )]
	static bool enableCheck9()
	{
		string script = getPostprocessScriptName( MethodInfo.GetCurrentMethod() );
		return !isScriptEnabled( script );
	}
	
	[MenuItem( "Prime31/AdWhirl Ad Vendors/VideoEgg/Disable", true )]
	static bool disableCheck9()
	{
		string script = getPostprocessScriptName( MethodInfo.GetCurrentMethod() );
		return isScriptEnabled( script );
	}

	[MenuItem( "Prime31/AdWhirl Ad Vendors/VideoEgg/Enable" )]
	static void enableSupport9()
	{
		string script = getPostprocessScriptName( MethodInfo.GetCurrentMethod() );
		enablePluginSupport( script, true );
	}
	
	[MenuItem( "Prime31/AdWhirl Ad Vendors/VideoEgg/Disable" )]
	static void disableSupport9()
	{
		string script = getPostprocessScriptName( MethodInfo.GetCurrentMethod() );
		enablePluginSupport( script, false );
	}
	
	
	
	[MenuItem( "Prime31/AdWhirl Ad Vendors/ZestADZ/Enable", true )]
	static bool enableCheck10()
	{
		string script = getPostprocessScriptName( MethodInfo.GetCurrentMethod() );
		return !isScriptEnabled( script );
	}
	
	[MenuItem( "Prime31/AdWhirl Ad Vendors/ZestADZ/Disable", true )]
	static bool disableCheck10()
	{
		string script = getPostprocessScriptName( MethodInfo.GetCurrentMethod() );
		return isScriptEnabled( script );
	}

	[MenuItem( "Prime31/AdWhirl Ad Vendors/ZestADZ/Enable" )]
	static void enableSupport10()
	{
		string script = getPostprocessScriptName( MethodInfo.GetCurrentMethod() );
		enablePluginSupport( script, true );
	}
	
	[MenuItem( "Prime31/AdWhirl Ad Vendors/ZestADZ/Disable" )]
	static void disableSupport10()
	{
		string script = getPostprocessScriptName( MethodInfo.GetCurrentMethod() );
		enablePluginSupport( script, false );
	}

	#endregion;



	#region Helpers
	
	static string getPostprocessScriptName( MethodBase method )
	{
		object[] attributes = method.GetCustomAttributes( typeof( MenuItem ), false );
		foreach( System.Object attribute in attributes )
    	{
    		MenuItem item = (MenuItem)attribute;
    		
    		// we want the third segment
    		string[] parts = item.menuItem.Split( new char[] {'/'} );
    		return string.Format( "PostprocessBuildPlayer_AdWhirl{0}", parts[2] );
    	}
    	
    	throw new Exception( "Could not extract post process script name from MethodBase" );
	}

	
	static bool isScriptEnabled( string pluginFilename )
	{
		string scriptPath = getFullPathToScript( pluginFilename );

		if( scriptPath == null )
			throw new Exception( "Could not find post process script: " + pluginFilename );
		
		// grab just the file name
		string fileName = Path.GetFileName( scriptPath );
		
		return !( fileName.StartsWith( _disabledPrefix ) );
	}
	
	
	static string getFullPathToScript( string pluginFilename )
	{
		// grab a hook to the Editor directory
		string editorPath = Path.Combine( Environment.CurrentDirectory, "Assets/Editor" );
		
		if( Directory.Exists( editorPath ) )
		{
			DirectoryInfo dirInfo = new DirectoryInfo( editorPath );
			
			// find the post process build script and see if it is enabled
			foreach( var file in dirInfo.GetFiles() )
			{
				if( file.Name.EndsWith( pluginFilename ) )
					return file.FullName;
			}
		}
		
		return null;
	}
	
	
	static void enablePluginSupport( string pluginFilename, bool enable )
	{
		// grab the source file with path
		string sourceScriptName = getFullPathToScript( pluginFilename );
		
		// figure out the new file with path
		string newFilename = ( enable ) ? pluginFilename : _disabledPrefix + pluginFilename;
		string destScriptName = Path.Combine( Environment.CurrentDirectory, "Assets/Editor/" + newFilename );
		
		if( !File.Exists( sourceScriptName ) )
			throw new Exception( "Could not find post process script: " + pluginFilename );
		
		// rename the file
		try
		{
			FileUtil.MoveFileOrDirectory( sourceScriptName, destScriptName );
		}
		catch( Exception e )
		{
			EditorUtility.DisplayDialog( "An error occurred renaming the PostprocessBuildPlayer file.  Please ensure the directory (Assets/Editor) is writeable.", e.Message, "OK" );
		}
		
		// if we disabled, show a message to be sure the Xcode project gets wiped
		if( !enable )
		{
			if( pluginFilename.Contains( "AdMob" ) )
				EditorUtility.DisplayDialog( "Important Notice", "You must remove the Assets/Plugins/AdWhirl/AdWhirlAdMobInterstitialBinding.cs or your project won't compile", "OK" );
			else
				EditorUtility.DisplayDialog( "Important Notice", "Please be sure to do a Build then Replace for the changes to take effect", "OK" );
		}
	}
	
	#endregion;

}
