using UnityEngine;
using System.Collections.Generic;


public class AdWhirlGUIManager : MonoBehaviour
{
	void OnGUI()
	{
		float yPos = 5.0f;
		float xPos = 5.0f;
		float width = ( Screen.width >= 960 || Screen.height >= 960 ) ? 320 : 160;
		float height = ( Screen.width >= 960 || Screen.height >= 960 ) ? 80 : 40;
		float heightPlus = height + 10.0f;
	
	
		if( GUI.Button( new Rect( xPos, yPos, width, height ), "Initialize AdWhirl" ) )
		{
			AdWhirlBinding.init( "d0f715d97a6643d6be4a31ee74ff65fa" );
			//AdWhirlBinding.init( "ADWHIRL_APP_ID_HERE" );
		}
		
		
		if( GUI.Button( new Rect( xPos, yPos += heightPlus, width, height ), "Create Banner" ) )
		{
			// put the banner on the top of the screen
			AdWhirlBinding.createBanner( true );
		}
	
	
		if( GUI.Button( new Rect( xPos, yPos += heightPlus, width, height ), "Destroy Banner" ) )
		{
			AdWhirlBinding.destroyBanner();
		}

		
		if( GUI.Button( new Rect( xPos, yPos += heightPlus + 20, width, height ), "Turn Test Mode On" ) )
		{
			AdWhirlBinding.setTestMode( true );
		}
		
		 
		if( GUI.Button( new Rect( xPos, yPos += heightPlus + 50, width, height ), "bannerOnBottom" ) )
		{
			bool bannerOnTop = false;
			AdWhirlBinding.createBanner( bannerOnTop );
		}
	}


}
