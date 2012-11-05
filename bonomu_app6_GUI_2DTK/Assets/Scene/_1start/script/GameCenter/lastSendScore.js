#pragma strict

function Start () {
	//authenticate player
	//GameCenterBinding.authenticateLocalPlayer();
	
	//PlayerPrefs.SetInt("num",53);
	
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
	//print(0);
	
}

function GameCenterScores(){
	yield WaitForSeconds(0.3);
	
	
	print(PlayerPrefs.GetInt("PlayerScore"));
	
	
	
	GameCenterBinding.reportScore(PlayerPrefs.GetInt("PlayerScore"),"jp.co.bonomu.bonomuScore");
	
	GameCenterBinding.loadLeaderboardTitles();
	GameCenterBinding.showLeaderboardWithTimeScope( GameCenterLeaderboardTimeScope.AllTime );
	
	
}