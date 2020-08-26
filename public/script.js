let questions =[
      {question: "Người ta thường nói: \"bới lông tìm ...\" gì?",
       answer : ["Chấy","Rận","Vết","Ve"],
       sound: "cau1.mp3",
       correct: 2 
       },
       {question: "Quy Nhơn là thành phố thuộc tỉnh nào?",
       answer : ["An Giang","Bình Định","Bạc Liêu","Kiên Giang"],
       sound: "cau2.mp3",
       correct: 1 
       },
        {question: "Đâu là một thành ngữ quen thuộc?",
       answer : ["Một mặt hai lời","Hai mặt chín lời","Ba mặt một lời","Bốn mặt sáu lời"],
       sound: "cau3.mp3",
       correct: 2 
       },
        {question: "Số nào sau đây chia hết cho 3?",
       answer : ["7","17","27","37"],
       sound: "cau4.mp3",
       correct: 2 
       },
       {question: "Váy Flamenco là trang phục nổi tiếng của quốc gia nào?",
       answer : ["Tây Ban Nha","Brazil","Argentina","Pháp"],
       sound: "cau5.mp3",
       correct: 0 
       },
       {question: "Lễ hội âm nhạc quốc tế Gió Mùa 2016 có chủ đề là gì?",
       answer : ["Sống xanh","Bảo vệ môi trường","Ô nhiễm không khí","Văn hóa giao thông"],
       sound: "cau6.mp3",
       correct: 3 
       },
       {question: "Quê em miền trung du (tên khác là \"Quê em\"), \"Biết ơn chị Võ Thị Sáu\" là những sáng tác của nhạc sĩ nào?",
       answer : ["Nguyễn Đức Toàn","Huy Du","Đỗ Nhuận","Trương Ngọc Minh"],
       sound: "cau7.mp3",
       correct: 0
       },
       {question: "Bài hát \"Thành phố tình yêu và nổi nhớ \" của nhạc sĩ Phạm Minh Tuấn viết về thành phố nào?",
       answer : ["Hà Nội","Đà Lạt","TP Hồ Chí Minh","Nha Trang"],
       sound: "cau8.mp3",
       correct: 2
       },
       {question: "\"Thiên nga vùng Utrecht\" là biệt danh của cầu thủ nào?",
       answer : ["Franz Beckenbauer","Lev Yasin","Marco Van Basten","Juan Veron"],
       sound: "cau9.mp3",
       correct: 2
       },
       {question: "Nhân vật hoạt hình nào sau đây mắc chứng \"Mất trí nhớ ngắn hạn\"?",
       answer : ["Cá Nemo","Cá Dory","Mèo Grafield","Chú chó Max"],
       sound: "cau10.mp3",
       correct: 1
       },

    ];

class altp{
 constructor(){
  this.clock=new clock(20);
  this.ui=new ui();
  this.check;
  this.ui.showScreen("welcome");
  this.ui.onStartBtnClick(()=>{this.ui.showScreen("ready"); this.intro();},"btn");
  this.currentQuestion = 0;
  this.time=null;
  this.currentAnswer = null;
  this.score =["0","200","400","600","1.000","2.000","3.000","6.000","10.000","14.000","22.000","30.000","40.000","60.000","85.000","150.000"];
  this.bgSound = new sound('main.mp3');
  this.correctSound = new sound('correct.mp3');
  this.finalSound = new sound('final.mp3');
  this.startSound = new sound('start.mp3');
  this.wrongSound = new sound('wrong.mp3');
  this.rightSound = new sound('right.mp3');
  this.quesSound = new sound(questions[this.currentQuestion].sound);
  this.arrSound = [this.ques1,this.ques2];
  for(let i=0;i<questions.length;i++){
  	this.arrSound[i] = new sound(questions[i].sound);
  }
  this.introSound = new sound('gioithieu.mp3');
 }
 
  intro(){
  	this.introSound.start(()=>{  
        this.ui.opacity("btn1");
  		this.ui.onStartBtnClick(()=>{
        this.ui.showScreen("wait");
        this.startSound.start(()=>{this.start();})},"btn1");});
  }

 start(){
   this.ui.showScreen("questionScreen");
   this.arrSound[this.currentQuestion].start(()=>{
    this.clock.start();
  this.check=setTimeout(()=>{
    this.bgSound.stop();
     this.end();},20000);
    this.bgSound.start();

    this.ui.onClickAnswer((answer)=>{
    this.clock.end();
    clearTimeout(this.check);
    this.currentAnswer=answer;
    this.ui.chanceColor(this.currentAnswer,"#FF9900");
    this.bgSound.stop();  
    this.finalSound.start(()=>{this.checkAnswer();});
 });
  });
   this.ui.showQuestion(questions[this.currentQuestion],this.score[this.currentQuestion],this.currentQuestion);
   

}
 
 checkAnswer(){
    if(this.currentAnswer === questions[this.currentQuestion].correct){  
    this.bgSound.stop();
    this.ui.chanceColor(this.currentAnswer,"green");
   	this.rightSound.start(()=>{
    this.ui.chanceColor(this.currentAnswer,"rgba(1, 47, 126, 0.91)");
   	 this.currentQuestion++;
     this.clock.reset();
   	 this.start();
   	});
   
    }else{
    	this.bgSound.stop();
    	this.ui.chanceColor(this.currentAnswer,"red");
    	this.ui.chanceColor(questions[this.currentQuestion].correct,"green");
    	 this.wrongSound.start(()=>{
        this.clock.reset(); 
    	 	this.end();
    	 });

    }
   }

  
  reset(){
  	this.currentQuestion=0;
  	this.currentAnswer=null;
  	this.ui.reset();
  }
 
 end(){
 this.ui.showScreen("lose");
 this.reset();
 this.restart();
 }
 
 restart(){
  this.ui.onStartBtnClick(()=>{
    this.ui.showScreen("wait");
    this.startSound.start(()=>{this.start();})},"btn2");
 }


}

var game = new altp();