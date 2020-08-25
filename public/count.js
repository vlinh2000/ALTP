class clock{
   constructor(time){
  this.count;
  this.ui = new ui();
  this.choose=false;
  this.check;

  }

  end(){
  this.choose=true;
  }

  start(){
    var x=20;
    this.count = setInterval(()=>{
       x--;
      if(x==0 || this.choose==true) {
        clearInterval(this.count);
        this.ui.countDown("time",x);
        this.reset();
        return;
      }
      this.ui.countDown("time",x);
      
    },1000);
  }

  reset(){
  this.choose=false;
  }
   
}