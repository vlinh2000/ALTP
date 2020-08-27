class ui{
  constructor(){

  }

  showScreen(screenName){
  	let screens = document.querySelectorAll("#wrapper > div");
  	screens.forEach((screen)=>{screen.style.display='none';});
  	let currentScreen=document.getElementById(screenName);
  	currentScreen.style.display='block';
  }

  onStartBtnClick(callback,id){
  	var startBtn=document.getElementById(id);
  	startBtn.addEventListener('click',callback);
  }
 
   showQuestion(question,scored,index){
   	document.getElementById("scored").innerHTML =scored;
   	document.getElementById("indexQuestion").innerHTML ='Câu hỏi: '+(index+1);
   	document.getElementById("time").innerHTML ="20s";
   	document.getElementById("time").style.color='black';
   	document.getElementById("question").innerHTML = question.question;
   	document.getElementById("answer1").innerHTML = question.answer[0];
   	document.getElementById("answer2").innerHTML = question.answer[1];
   	document.getElementById("answer3").innerHTML = question.answer[2];
   	document.getElementById("answer4").innerHTML = question.answer[3];
   }
   onClickAnswer(callback){
    document.getElementById("ans1").addEventListener('click',()=> callback(0));
    document.getElementById("ans2").addEventListener('click',()=> callback(1));
	document.getElementById("ans3").addEventListener('click',()=> callback(2));
    document.getElementById("ans4").addEventListener('click',()=> callback(3));
   }

   oneClick(){
    document.getElementById("ans1").removeEventListener('click',()=> callback(0));
    document.getElementById("ans2").removeEventListener('click',()=> callback(1));
    document.getElementById("ans3").removeEventListener('click',()=> callback(2));
    document.getElementById("ans4").removeEventListener('click',()=> callback(3));
   }

   chanceColor(indexAnswer,color){
   	let answer = 'ans'+(indexAnswer+1);
     document.getElementById(answer).style.backgroundColor=color;
   }
   
   opacity(id){
    document.getElementById(id).style.display='block';
   }

   reset(){
   	for(let i = 1; i<5;i++){
   		document.getElementById('ans'+i).style.backgroundColor='rgba(1, 47, 126, 0.91)';
   	}
   }

   countDown(id,x){
   	  document.getElementById(id).innerHTML=x+'s';
   }
    stopClock(){

    }

    fearture50(){
      document.getElementById("fearture50").style.display='block';
    }


}