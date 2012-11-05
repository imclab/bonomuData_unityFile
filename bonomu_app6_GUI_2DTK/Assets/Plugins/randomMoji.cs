using UnityEngine;
using System.Collections;

public class randomMoji : MonoBehaviour {
	// Use this for initialization
	public int random;
	public void changeSprite (){
		random = Random.Range(0,3);
		tk2dSprite sprite =GetComponent<tk2dSprite>();
		if(random == 0){
			animation.Play("random_mojiScaleAnim");
			// yield return new WaitForSeconds(0.1);
			sprite.spriteId = sprite.GetSpriteIdByName("bo");
			//sprite.color = Color.red;
			 audio.Play();
			}
		if(random == 1){
			animation.Play("random_mojiScaleAnim");
			sprite.spriteId = sprite.GetSpriteIdByName("no");
			//sprite.color = Color.red;
			audio.Play();
			}
		if(random == 2){
			animation.Play("random_mojiScaleAnim");
			sprite.spriteId = sprite.GetSpriteIdByName("mu");
			//sprite.color = Color.red;
			audio.Play();
		}
		//print(random);
		//print(random);	
	}
//color change
	public void changeColor(){
		Color color=Color.yellow;
		
		tk2dSprite sprite =GetComponent<tk2dSprite>();
		sprite.color = color;
		
	}
	public void whiteColor(){
		Color color=Color.white;
		tk2dSprite sprite =GetComponent<tk2dSprite>();
		sprite.color = color;
	}
	
//random文字スタート
public 	bool start=false;
	void trigger(){
	start =true;
}



	
public  float INTERVAL = 1.0f;
public float timer;
void Update(){
//print(PlayerPrefs.GetInt("PlayerScore"));
//print(INTERVAL);
		
//randomのサイクルを変える		
if((PlayerPrefs.GetInt("PlayerScore")) <1){
		INTERVAL = 1.1f;
}
	else if((PlayerPrefs.GetInt("PlayerScore")) ==2){
	INTERVAL = 1.0f;
	}
	else if((PlayerPrefs.GetInt("PlayerScore")) ==3){
		INTERVAL = 0.95f;
	}
		else if((PlayerPrefs.GetInt("PlayerScore")) ==4){
			INTERVAL = 0.90f;
		}	
		else if((PlayerPrefs.GetInt("PlayerScore")) ==6){
			INTERVAL = 0.85f;
		}
		else if((PlayerPrefs.GetInt("PlayerScore")) ==7){
			INTERVAL = 0.80f;
		}
		
	//もしスタートボタンが押されたらランダム文字開始
	if(start==true){
			timer -= Time.deltaTime;
			
		if(timer<=0){
			changeSprite();
			//tk2dSprite sprite =GetComponent<tk2dSprite>();
			//sprite.color = Color.white;
			timer = INTERVAL;
				
				
			}
	}	
}
	
	// Update is called once per frame
}
