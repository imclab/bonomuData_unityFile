#pragma strict

function Start () {

}
var bonomus:GameObject;

var trigger : boolean = true;
function inCornBonomu () {
	var newBonomu = Instantiate(bonomus,transform.position,transform.rotation);
	
	var animatedSprite : tk2dAnimatedSprite;
		animatedSprite = newBonomu.GetComponent("tk2dAnimatedSprite");
		animatedSprite.Play("cornMove");
		//一回だけ使用するためfalseにする
		trigger = false;
}


function setStartBonomu (){
	animation["cornJump"].normalizedTime = 0;
}
function TimeUp(){
	enabled = false;
}