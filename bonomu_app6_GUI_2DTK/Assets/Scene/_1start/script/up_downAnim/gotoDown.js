#pragma strict

function Start () {

}

function Update () {

}

function On_SimpleTap(gesture:Gesture){
var getBG : GameObject;
	getBG =GameObject.Find("BG_cloud");
	//無しでも動く
	//getBG.GetComponent(Animation);
	getBG.SendMessage("falldownBG_cloud_rev");  
	 
}