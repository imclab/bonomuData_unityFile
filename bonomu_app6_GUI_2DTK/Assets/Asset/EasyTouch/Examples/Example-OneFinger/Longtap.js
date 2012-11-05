#pragma strict

private var textMesh:TextMesh;

function Start(){
	
	textMesh = transform.Find("TextLongTap").transform.gameObject.GetComponent("TextMesh") as TextMesh;
}

function On_LongTapStart( gesture:Gesture){
	
	gameObject.renderer.material.color = Color( Random.Range(0.0,1.0),  Random.Range(0.0,1.0), Random.Range(0.0,1.0));
}

function On_LongTap( gesture:Gesture){
	
	textMesh.text = gesture.actionTime.ToString("f2");

}

function On_LongTapEnd( gesture:Gesture){
	
	gameObject.renderer.material.color = Color(1,1,1);
	textMesh.text="Long tap";

}
