#pragma strict
function Start(){
	AdWhirlBinding.init("d0f715d97a6643d6be4a31ee74ff65fa");
}
	
function On_SimpleTap(gesture:Gesture){
var getMove_leftGroup : GameObject;
	getMove_leftGroup =GameObject.Find("move_leftGroup");
	//無しでも動く
	//getBG.GetComponent(Animation);
	getMove_leftGroup.SendMessage("moveLeft"); 
	var getbonomu : GameObject;
	getbonomu =GameObject.Find("bonomu");
	//無しでも動く
	//getBG.GetComponent(Animation);
	getbonomu.SendMessage("moveLeftBonomu"); 
	
	//random文字スタート
var startPlay : GameObject;
	startPlay =GameObject.Find("randomMoji");
	startPlay.SendMessage("trigger"); 
// ---------------------------------------------------------iAd start
var bannerOnTop : boolean = false;
AdWhirlBinding.createBanner( bannerOnTop);

//game timer start
gameTimerTrigger =true;
finishTrigger=true;
}
//bonomu
var getbonomu : GameObject;
	getbonomu =GameObject.Find("bonomu");
//Main Camera
var mainCamera : GameObject;
	mainCamera =GameObject.Find("Main Camera");
//get timerDisplay1-----------------------数字下の位
var timerDisplay1 : GameObject;
timerDisplay1 = GameObject.Find("timerDisplay1");
timerDisplay1.active = false;//display

//get tk2dAnimatedSprite component-----------
var timerDisplay1NumAnimSprite :tk2dAnimatedSprite;
timerDisplay1NumAnimSprite = timerDisplay1.GetComponent("tk2dAnimatedSprite");

//get timerDisplay2---------------------数字上の位
var timerDisplay2 : GameObject;
timerDisplay2 = GameObject.Find("timerDisplay2");
timerDisplay2.active = false;//display

//get tk2dAnimatedSprite component-----------
var timerDisplay2NumAnimSprite :tk2dAnimatedSprite;
timerDisplay2NumAnimSprite = timerDisplay2.GetComponent("tk2dAnimatedSprite");

//audioChange
var BGM2:GameObject;
BGM2 = BGM2.Find("BGM2");

//finish animation/////////////////////////////////
var finish :GameObject;
finish = GameObject.Find("finish");

static var finishTrigger : boolean=false;

function wait30(){	
	finish.animation.Play("finish");
	finish.audio.Play();
	//gameTimerの中で使うと何故か　finishTrigger=true　になるので
	//一度だけの再生をしたいこの場合　finishTrigger=false　にした
	finishTrigger = false;
	
	//gameTimer < -2.5に記入すると再生されないのでここに書く
	//BGM switch
	yield WaitForSeconds(2.5);
	BGM2.audio.loop = true;
	BGM2.audio.Play();
	
	}
	
//game timer////////////////////////////////
static var gameTimerTrigger:boolean=false;
//push totitle button
function reset(){
	gameTimerTrigger = false;
}
var gameTimer:float; 
gameTimer = 62.0;

var jumpTimer :float = 2.0;

function Update(){
//game timer
//print(gameTimer);
	if(gameTimerTrigger == true){
		gameTimer -= Time.deltaTime;
			// display timer
			if(gameTimer<=10){
				timerDisplay1.active=true;//display
				timerDisplay2.active=true;//display
				timerDisplay1NumAnimSprite.Play(0);
				timerDisplay2NumAnimSprite.Play(1);
				}
			if(gameTimer<=9){
				timerDisplay1NumAnimSprite.Play(9);
				timerDisplay2.active=false;//not display
				timerDisplay2NumAnimSprite.Play(1);
				}
			if(gameTimer<=8){
				timerDisplay1NumAnimSprite.Play(8);
				}
			if(gameTimer<=7){
				timerDisplay1NumAnimSprite.Play(7);
				}
			if(gameTimer<=6){
				timerDisplay1NumAnimSprite.Play(6);
				}
			if(gameTimer<=5){
				timerDisplay1NumAnimSprite.Play(5);
				}
			if(gameTimer<=4){
				timerDisplay1NumAnimSprite.Play(4);
				}
			if(gameTimer<=3){
				timerDisplay1NumAnimSprite.Play(3);
				}
			if(gameTimer<=2){
				timerDisplay1NumAnimSprite.Play(2);
				}
			if(gameTimer<=1){
				timerDisplay1NumAnimSprite.Play(1);
				
				}
			if(gameTimer < 0){
				//時間切れの時ジャンプ中であれば少し遅らせる
				if(bonomu.animation.isPlaying){
					jumpTimer -= Time.deltaTime;
					if(jumpTimer ==0){
						bonomu_animSprite2.animation.enabled = false;
						}
					}
				timerDisplay1.active=false;//timer not display
				randomMoji.active = false;
				cameraMove.animation.enabled = false;
				startRemake.active = false;
				//audio stop
				/*
				bo_kumo.audio.enabled = false;
				no_kumo.audio.enabled = false;
				mu_kumo.audio.enabled = false;
				*/
				//each kumo dont display
				bo_kumo.active = false;
				no_kumo.active = false;
				mu_kumo.active = false;
				bo.active = false;
				no.active = false; 
				mu.active = false;
				
				getCornDiveCount.enabled = false;
				//finish display
				if(finishTrigger){
					wait30();
					}
					
				}
		
			
				//move camera to corn bonomu and dont display gameobject
				if(gameTimer < -2.5){
					//PlayerPrefs set bonomu get count
					PlayerPrefs.SetInt("PlayerScore",getCornDiveCount.cornDiveCount);
					
					
					
					mouikkaiKumoRemake.active = true;
					GameCenterRemake.active = true;
					totalBonomuGet.active = true;
					eachBonomuNumber.active = true; 
						if(getCornDiveCount.cornDiveCount > 9){
							eachBonomuNumber2.active = true;
							} 
				//	eachBonomuGet.transform.DetachChildren();		
				//ワールド空間での座標で入力しないといけないのでデタッチして位置を計り元に戻す
					eachBonomuNumber.transform.position = Vector3(2390,460,-1100); 
					eachBonomuNumber.transform.localScale = Vector3(250,250,250);
					mouikkai.active = true;
					toTitle.active = true;
					
					//結果発表画面へ
					 cameraMove.transform.position =Vector3(1380,118,-230);
					 //sound
					
					 //mainCamera  sound off
					 mainCamera.audio.Stop();
					
					 //display  bonomu number  数字下の位
					// timerDisplay1NumAnimSprite.Play(getCornDiveCount.cornDiveCount -1);
					 dontDisplay();
					}
		}
}

// to detach eachBonomuNumber
var eachBonomuGet:GameObject;
eachBonomuGet = eachBonomuGet.Find("eachBonomuGet");
 
 
//game start hide list///////////////////////////////
var totalBonomuGet:GameObject;
totalBonomuGet = totalBonomuGet.Find("totalBonomuGet");
totalBonomuGet.active = false;

var eachBonomuNumber:GameObject;
eachBonomuNumber = totalBonomuGet.Find("eachBonomuNumber");

var startRemake:GameObject;
startRemake = startRemake.Find("startRemake");

var eachBonomuNumber2:GameObject;
eachBonomuNumber2 = totalBonomuGet.Find("eachBonomuNumber2");

var mouikkai:GameObject;
mouikkai = totalBonomuGet.Find("mouikkai");
mouikkai.active = false;

var toTitle:GameObject;
toTitle = totalBonomuGet.Find("toTitle");
toTitle.active = false;

var mouikkaiKumoRemake:GameObject;
mouikkaiKumoRemake = GameObject.Find("mouikkaiKumoRemake");
mouikkaiKumoRemake.active = false;
var GameCenterRemake : GameObject;
GameCenterRemake = GameObject.Find("GameCenterRemake");
GameCenterRemake.active = false;
//when time over display switch list//////////////////////////////
var cameraMove:GameObject;
	cameraMove = cameraMove.Find("cameraMove");

 var bonomu_animSprite2:GameObject;
	bonomu_animSprite2 = bonomu.Find("bonomu_animSprite2");  

var bonomu:GameObject;
	bonomu = bonomu.Find("bonomu");  
	
 //kumo
var bo_kumo:GameObject;
	bo_kumo = bo_kumo.Find("bo_kumo");
 //kumo
var no_kumo:GameObject;
	no_kumo = no_kumo.Find("no_kumo");  
 //kumo
var mu_kumo:GameObject;
	mu_kumo = mu_kumo.Find("mu_kumo");

 //bo
 var bo:GameObject;
	 bo = bo.Find("bo");  
//no
 var no:GameObject;
	 no = bo.Find("no");  
//mu
 var mu:GameObject;
	 mu = bo.Find("mu");  



var randomMoji:GameObject;
	randomMoji = randomMoji.Find("randomMoji"); 
///////////////////////////////////////////////////////

//cornに入ったぼのむを数える変数 
static var getCornDiveCount :button_action;
	 getCornDiveCount =bo_kumo.GetComponent("button_action");
//print(getCornDiveCount.cornDiveCount);

function dontDisplay(){
	
	bonomu_animSprite2.active = false;
	
	cameraMove.active = false;
	bonomu.active = false;
	bo_kumo.active = false; 
	no_kumo.active = false;
	mu_kumo.active = false;
	bo.active = false;
	no.active = false; 
	mu.active = false;
	startRemake.active = false;
	randomMoji.active = false;
	//一の位
	timerDisplay1.active = false;
}


