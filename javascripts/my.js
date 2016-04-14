function cat ()
{
    this.name="cat";
    this.x=0;
    this.y=0;
    this.move=(direct){
    	switch(direct){
    		case 0;
    		window.alert("向上移动");
    		break;
    		case 1:
    		window.alert("向右移动");
    		break;
    		case 2:
    		window.alert("向下移动");
    		break;
    		case 3:
    		window.alert("向左移动");
    		break;

    	}
    }

}

}