using UnityEngine;
using System.Collections;


public class AdWhirlAdapter : MonoBehaviour
{
	public bool bannerOnTop = false;
	public string publisherId = "d0f715d97a6643d6be4a31ee74ff65fa";
	
	
	void Start()
	{
		AdWhirlBinding.init( publisherId );
		AdWhirlBinding.createBanner( bannerOnTop );
		Destroy( gameObject );
	}

}
