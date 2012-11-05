using UnityEngine;
using System.Collections;

public class buttonSwitchAnim: MonoBehaviour {

	//animation
	void falldownHelp () {
		animation.Play("moji_help_animB");
	}
	 void falldownBG_cloud () {
		animation["BG_cloud_falldown"].speed = 1.6F;
	//animation["BG_cloud_falldown"].time = animation["BG_cloud_falldown"].length;
		animation.Play("BG_cloud_falldown");
	}
	void getButtonBoxCollider (){
			
	}
	
	
	//reverse animation
	void falldownHelp_rev () {
		animation["moji_help_animB"].speed = -1.0F;
		animation["moji_help_animB"].time = animation["moji_help_animB"].length;
		animation.Play("moji_help_animB");
	}
	void falldownBG_cloud_rev (){
		animation["BG_cloud_falldown"].speed = -1.2F;
		animation["BG_cloud_falldown"].time = animation["BG_cloud_falldown"].length;
		animation.Play("BG_cloud_falldown");
	}
	
	
	// Update is called once per frame
	void Update () {
	
	}
}
