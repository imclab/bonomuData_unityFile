#pragma strict
function Start () {
	
}
function Update () {

}


function On_SimpleTap(gesture:Gesture){
//上に移動
	var getBG : GameObject;
	getBG =GameObject.Find("BG_cloud");
	//無しでも動く
	//getBG.GetComponent(Animation);
	getBG.SendMessage("falldownBG_cloud");   
//上に移動
}
