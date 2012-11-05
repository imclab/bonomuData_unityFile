#pragma strict

function gotoTitle() {
	yield WaitForSeconds(1);
	Application.LoadLevel("bonomu");
	
	//reset timer
	timeStop.SendMessage("reset");
	//timeStop.gameTimerTrigger = false;
	
	//reset bonomu count;
	bonomuCountStop.cornDiveCount =0;
	bonomuCountStop.count = 0;
	
	// destroy iAd 
	AdWhirlBinding.destroyBanner();
}
//start button cloud
var cloud_start_cloud0 :GameObject;
	cloud_start_cloud0 = GameObject.Find("cloud_start_cloud0");
	
var timeStop:startButton_;
	timeStop = cloud_start_cloud0.GetComponent("startButton_");
	
//no_kumo button
var no_kumo :GameObject;
	no_kumo = GameObject.Find("no_kumo");
	
var bonomuCountStop:button_action;
	bonomuCountStop = no_kumo.GetComponent("button_action");

