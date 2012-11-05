#pragma strict
@script RequireComponent(tk2dAnimatedSprite)

function Start () {
//BoxCollider.size----------------------------------------------
bo_kumoBoxCollider.size = Vector3(180,130,30);
no_kumoBoxCollider.size = Vector3(180,130,30);
mu_kumoBoxCollider.size = Vector3(180,130,30);

PlayerPrefs.SetInt("PlayerScore",0);
}

////get each kumo name//////////////////////////////
var getEachName :button_action;
getEachName =this.GetComponent("button_action");

//get randomMoji.cs script///////////////////////////////
	var getRandomMoji :GameObject;
		getRandomMoji= GameObject.Find("randomMoji");	
	var getRandomMojiScript : randomMoji;
		getRandomMojiScript = getRandomMoji.GetComponent("randomMoji"); 
		
//kumo getComponent boxCollider//////////////////////////////		
//bo_kumo----------------------------------------------
static var  bo_kumo:GameObject;
			bo_kumo=GameObject.Find("bo_kumo"); 
static var  bo_kumoBoxCollider :BoxCollider;
			bo_kumoBoxCollider = bo_kumo.GetComponent(BoxCollider);
//no_kumo----------------------------------------------
static var  no_kumo:GameObject;
			no_kumo=GameObject.Find("no_kumo"); 
static var  no_kumoBoxCollider :BoxCollider;
			no_kumoBoxCollider = no_kumo.GetComponent(BoxCollider);   
//mu_kumo ----------------------------------------------
static var  mu_kumo:GameObject;
			mu_kumo=GameObject.Find("mu_kumo"); 
static var  mu_kumoBoxCollider :BoxCollider;
			mu_kumoBoxCollider = mu_kumo.GetComponent(BoxCollider);  


//get bonomu object for animation/////////////////////////
var bonomu : GameObject;
bonomu = GameObject.Find("bonomu_animSprite2");
var _bonomu_instantiate : _bonomu_instantiate;
_bonomu_instantiate = bonomu.GetComponent("_bonomu_instantiate");

//bonomuのスプライトアニメーションにアクセス---------------------------
var tk2dAnimSprite :tk2dAnimatedSprite;
tk2dAnimSprite = bonomu.GetComponent("tk2dAnimatedSprite");

//get cameraMove object//////////////////////////////////
var cameraMove : GameObject;
cameraMove = GameObject.Find("cameraMove");

//get BG_cloud  for animation//////////////////////////////
var BG_cloud : GameObject;
BG_cloud = GameObject.Find("BG_cloud");

//ゲーム時間取得のため
var cloud_start_cloud0 : GameObject;
cloud_start_cloud0 = GameObject.Find("cloud_start_cloud0");
var startButton_  : startButton_ ;
startButton_  = cloud_start_cloud0.GetComponent("startButton_");

//get eachBonomuGet////////////////////////////////////
var eachBonomuGet : GameObject;
eachBonomuGet = GameObject.Find("eachBonomuGet");
eachBonomuGet.active =true;//display
eachBonomuGet.animation["downAnimation"].speed = 1.4F;


//get eachBonomuGetNumber-----------------------数字下の位
var eachBonomuNumber : GameObject;
eachBonomuNumber = GameObject.Find("eachBonomuNumber");
eachBonomuNumber.active=true;//do not display
//get tk2dAnimatedSprite component-----------
var eachBonomuNumAnimSprite :tk2dAnimatedSprite;
eachBonomuNumAnimSprite = eachBonomuNumber.GetComponent("tk2dAnimatedSprite");

//get eachBonomuGetNumber2---------------------数字上の位
var eachBonomuNumber2 : GameObject;
eachBonomuNumber2 = GameObject.Find("eachBonomuNumber2");
eachBonomuNumber2.active=false;//do not display
//get tk2dAnimatedSprite component-----------
var eachBonomuNumAnimSprite2 :tk2dAnimatedSprite;
eachBonomuNumAnimSprite2 = eachBonomuNumber2.GetComponent("tk2dAnimatedSprite");


 //public var boo :AudioClip;
		

//count/////三つの雲からアクセスするためstaticで宣言
static  var count :int =0;
//cornDive count
static var cornDiveCount : int=0;


function On_SimpleTap(gesture:Gesture){
//print(getEachName);
//print(getRandomMojiScript.random);
	///////////////////////////////////////////////bo
		if(getEachName.name == "bo_kumo"){
		//print("bo");	
			if(getRandomMojiScript.random == 0){
				switch(count){
					case (0):
						bonomu.animation.Play("jump"); 
			 			cameraMove.SendMessage("forwardCam"); 
			 			count++;
						break;
					case (1):
						bonomu.animation.Play("jump"); 
			 			cameraMove.SendMessage("secondCam");
			 			count++;
						break;
					case (2):
						bonomu.animation.Play("jump"); 
			 			cameraMove.SendMessage("thirdCam");
			 			count++;
						break;
					case (3):
						bonomu.animation.Play("jump"); 
			 			cameraMove.SendMessage("fourthCam");
			 			count++;
						break;
					case (4):
						bonomu.animation.Play("jump"); 
			 			cameraMove.SendMessage("sixthCam");
			 			count++; 
						break;
					case (5):
						bonomu.animation.Play("cornJump"+(cornDiveCount+1)); 
			 			cameraMove.SendMessage("seventhCam");
			 			count++;
			 			
			 			yield WaitForSeconds(0.3);
			 			cornDiveCount++;
			 			yield WaitForSeconds(0.5);
			 			eachBonomuGet.animation.Play("downAnimation");
			 			eachBonomuGet.audio.Play();
			 			//cornDiveCount++;
			 			PlayerPrefs.SetInt("PlayerScore",cornDiveCount);
			 			
						break;	
					}
				}
			if(getRandomMojiScript.random == 1){
				 tk2dAnimSprite.Play("sleep");//sleepAnimation
				 sleepTrigger =true;
				 //bo_kumoBoxCollider.enabled=false;//check off kumo box collider
				 //no_kumoBoxCollider.enabled=false;//check off kumo box collider
				// mu_kumoBoxCollider.enabled=false;//check off kumo box collider
				 audio.Play();
				}
				
			if(getRandomMojiScript.random == 2){
				tk2dAnimSprite.Play("sleep");
				 sleepTrigger =true;
				// bo_kumoBoxCollider.enabled=false;//check off kumo box collider
				// no_kumoBoxCollider.enabled=false;//check off kumo box collider
				// mu_kumoBoxCollider.enabled=false;//check off kumo box collider
				audio.Play();
				}
	}
	/////////////////////////////////////////////no
	if(getEachName.name == "no_kumo"){
		//print("no");	
		if(getRandomMojiScript.random == 0){
				tk2dAnimSprite.Play("sleep");
				sleepTrigger =true; 
				//bo_kumoBoxCollider.enabled=false;//check off kumo box collider
				//no_kumoBoxCollider.enabled=false;//check off kumo box collider
				//mu_kumoBoxCollider.enabled=false;//check off kumo box collider
				audio.Play();
			}
		//
		if(getRandomMojiScript.random == 1){
			switch(count){
					case (0):
						bonomu.animation.Play("jump"); 
			 			cameraMove.SendMessage("forwardCam");
			 			count++;
						break;
					case (1):
						bonomu.animation.Play("jump"); 
			 			cameraMove.SendMessage("secondCam");
			 			count++;
						break;
					case (2):
						bonomu.animation.Play("jump"); 
			 			cameraMove.SendMessage("thirdCam");
			 			count++;
						break;
					case (3):
						bonomu.animation.Play("jump"); 
			 			cameraMove.SendMessage("fourthCam");
			 			count++;
						break;
					case (4):
						bonomu.animation.Play("jump"); 
			 			cameraMove.SendMessage("sixthCam");
			 			count++;
						break;
					case (5):
						bonomu.animation.Play("cornJump"+(cornDiveCount+1)); 
			 			cameraMove.SendMessage("seventhCam");
			 			count++;
			 			
			 			yield WaitForSeconds(0.3);
			 			cornDiveCount++;		
			 			yield WaitForSeconds(0.5);
			 			eachBonomuGet.animation.Play("downAnimation");
			 			eachBonomuGet.audio.Play();
			 			//cornDiveCount++;
			 			PlayerPrefs.SetInt("PlayerScore",cornDiveCount);
						break;	
					}
				}
		if(getRandomMojiScript.random == 2){
				tk2dAnimSprite.Play("sleep");
				sleepTrigger =true;
				//bo_kumoBoxCollider.enabled=false;//check off kumo box collider
				//no_kumoBoxCollider.enabled=false;//check off kumo box collider
				//mu_kumoBoxCollider.enabled=false;//check off kumo box collider
				audio.Play();
			}
	 }
	/////////////////////////////////////////////mu
	if(getEachName.name == "mu_kumo"){
		//print("mu");	
		if(getRandomMojiScript.random == 0){
			tk2dAnimSprite.Play("sleep");
			sleepTrigger =true;
			//bo_kumoBoxCollider.enabled=false;//check off kumo box collider
			//no_kumoBoxCollider.enabled=false;//check off kumo box collider
			//mu_kumoBoxCollider.enabled=false;//check off kumo box collider
			audio.Play();
			}
		///
		if(getRandomMojiScript.random == 1){
			tk2dAnimSprite.Play("sleep");
			sleepTrigger =true;
			//bo_kumoBoxCollider.enabled=false;//check off kumo box collider
			//no_kumoBoxCollider.enabled=false;//check off kumo box collider
			mu_kumoBoxCollider.enabled=false;//check off kumo box collider
			audio.Play();
			}
		///
			if(getRandomMojiScript.random == 2){
				switch(count){
					case (0):
						bonomu.animation.Play("jump"); 
			 			cameraMove.SendMessage("forwardCam");
			 			count++;
						break;
					case (1):
						bonomu.animation.Play("jump"); 
			 			cameraMove.SendMessage("secondCam");
			 			count++;
						break;
					case (2):
						bonomu.animation.Play("jump"); 
			 			cameraMove.SendMessage("thirdCam");
			 			count++;
						break;
					case (3):
						bonomu.animation.Play("jump"); 
			 			cameraMove.SendMessage("fourthCam");
			 			count++;
						break;
					case (4):
						bonomu.animation.Play("jump"); 
			 			cameraMove.SendMessage("sixthCam");
			 			count++;
						break;
					case (5):
						bonomu.animation.Play("cornJump"+(cornDiveCount+1)); 
			 			cameraMove.SendMessage("seventhCam");
			 			count++;
			 			
			 			yield WaitForSeconds(0.3);
			 			cornDiveCount++;
			 			yield WaitForSeconds(0.5);
			 			eachBonomuGet.animation.Play("downAnimation");
			 			eachBonomuGet.audio.Play();
			 			//cornDiveCount++;
			 			PlayerPrefs.SetInt("PlayerScore",cornDiveCount);
						break;
					}
				}
			}
}
//三つの雲からアクセスするためstaticで宣言
static var timer : float=8.0;
//when pressed  button its not much random moji button 
//trigger
static var sleepTrigger:boolean=false;
static var sleepTimer : float=3.4;//sleeptimer



function Update(){ 
//in corn trigger
//print(getEachName.name);
//print(startButton_.gameTimer);
//print(timer);
//print(_bonomu_instantiate.trigger);
print(cornDiveCount);
	if(count ==6){
		//もしコーンに入るアニメーションが終わったら
		if(bonomu.animation.isPlaying == false){
			//一回だけインスタンス作る
			if(_bonomu_instantiate.trigger == true){
				bonomu.SendMessage("inCornBonomu");	// create Instanciate
			}
		}
		eachBonomuNumAnimSprite.Play(cornDiveCount);//数字下の位
		//10を超えた場合  eachBonomuNumAnimSprite2表示
				if(cornDiveCount >= 10){
					eachBonomuNumber2.active = true;//display  数字下の位
					eachBonomuNumAnimSprite2.Play(1);//数字上の位
					}
					// 20を超えた場合
					if(cornDiveCount >20){
						eachBonomuNumAnimSprite2.Play(2);//数字上の位
						}
						
		timer -= Time.deltaTime; 
		
			if(timer < 2.5){
				//inCornBonomuの中でfalseなのでtrueにする
				_bonomu_instantiate.trigger = true;
				cameraMove.transform.position = new Vector3(-420, 118, -230);
				bonomu.animation.Play("jump");  
				
				count=0;//count reset
				timer=8.0;//timer reset
				}
			
			
		//もしゲーム時間が０のときインスタンスを作る
		if(startButton_.gameTimer == 0){
			bonomu.SendMessage("inCornBonomu");
		}
		
	}
		
		
//sleep trigger start	
//print(sleepTrigger); 
	if(sleepTrigger==true){
		sleepTimer -=Time.deltaTime;
		if(sleepTimer < 0){
			sleepTrigger=false;
			tk2dAnimSprite.StopAndResetFrame();//reset bonomu animation 
			sleepTimer=3.4;
			}
		}	
	if(sleepTrigger==false){
		bo_kumoBoxCollider.enabled=true; //if timer is limit out collider is on
		no_kumoBoxCollider.enabled=true;//if timer is limit out collider is on
		mu_kumoBoxCollider.enabled=true;//if timer is limit out collider is on
		}

}



