//FF9900
//FF6600
//FF9E00
class sound{
	constructor(file){
	  this.fileName=file;
      this.audio = new Audio("sound/"+this.fileName);
      this.loaded=false;
    
    this.audio.addEventListener('canplaythrough',()=>{this.loaded=true;});
	}
	

	start(onEndCallBack){
		if(this.loaded){
		 this.audio.play();
		 if(typeof onEndCallBack =='function'){
		 	this.audio.onended=onEndCallBack;
		 }
		}
   
	}

	stop(){
    this.audio.pause();
	}
}