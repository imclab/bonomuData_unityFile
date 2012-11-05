#pragma strict
public var test :int=1;
function moveLeftBonomu () {
//print(test);
animation.Play("bonomuButton_moveLeft");
}
function TimeUp () {
	enabled = false;
}