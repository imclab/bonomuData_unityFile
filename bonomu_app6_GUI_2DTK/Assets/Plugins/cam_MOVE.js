#pragma strict
private var cameraAnimation : AnimationState;
function Start () {
	transform.position = new Vector3(-420, 118, -230);
   // print(transform.position.x);
        
	cameraAnimation = animation["cam_anim"];
	//cameraAnimation.blendMode = AnimationBlendMode.Additive;
	cameraAnimation.normalizedTime = 0;
	
	
}

	
function forwardCam () {
	animation.Play("cam_anim");
	//cameraAnimation.normalizedTime = 1;
}
function secondCam () {
	animation.Play("cam_anim2");
	//cameraAnimation.normalizedTime = 1;
}
function thirdCam () {
	animation.Play("cam_anim3");
	//cameraAnimation.normalizedTime = 1;
}
function fourthCam () {
	animation.Play("cam_anim4");
	//cameraAnimation.normalizedTime = 1;
}

function sixthCam () {
	animation.Play("cam_anim5");
	//cameraAnimation.normalizedTime = 1;
}
function seventhCam () {
	animation.Play("cam_anim6");
	//cameraAnimation.normalizedTime = 1;
}