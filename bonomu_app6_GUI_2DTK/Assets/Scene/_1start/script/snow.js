#pragma strict

private static var created:boolean = false;
function Awake(){
	if(!created){
		DontDestroyOnLoad(this.gameObject);
		created = true;
		}
		else{
			Destroy(this.gameObject);
			}
}