#pragma strict

function Start () {
	//authenticate player
	GameCenterBinding.authenticateLocalPlayer();
	//PlayerPrefs.SetInt("num",52);
	
	//getpoint---------------------------------------------------------
	//gameobject
	/*
	var bo_kumo :GameObject;
	bo_kumo = GameObject.Find("bo_kumo");
	//script
	var getCornDiveCount :button_action;
	 getCornDiveCount =bo_kumo.GetComponent("button_action");
	print(getCornDiveCount.cornDiveCount);//ok
	*/
}

function GCwindow(){
	yield WaitForSeconds(0.3);
	//GameCenterBinding.reportScore(getCornDiveCount.cornDiveCount,"jp.co.bonomu.bonomuScore");
	
	GameCenterBinding.loadLeaderboardTitles();
	GameCenterBinding.showLeaderboardWithTimeScope( GameCenterLeaderboardTimeScope.AllTime );
}