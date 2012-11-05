#pragma strict
var tk2dAnimSprite :tk2dAnimatedSprite;
tk2dAnimSprite = GetComponent("tk2dAnimatedSprite");

function wink(){
tk2dAnimSprite.Play("closeEyes");
yield WaitForSeconds(0.2);
tk2dAnimSprite.StopAndResetFrame();//reset bonomu animation 

}
function miniBonomuwink(){
tk2dAnimSprite.Play("miniBonomu");
yield WaitForSeconds(0.3);
tk2dAnimSprite.StopAndResetFrame();//reset bonomu animation 

}