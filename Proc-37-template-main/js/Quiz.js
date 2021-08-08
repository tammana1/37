class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
   question.hide();
   background("lightblue")
   textSize(30);
   fill("brown")
   text("Result of the Quiz",340,50)
   text("...............................",320,65)
   Contestant.getPlayerInfo();
   if(allConstants !==undefined){
     var display_answer=230;
     fill("blue")
     textSize(20)
     text("*Note:Contestant who answered correct are highlighted in green colour",130,230)
     for (var plr in allConstants){
       var correctAns ="2";
       if(correctAns=== allConstants[plr].answer )
       fill("green")
       else
       fill("red");

       display.answer+=30;
       textSize(15);
       text (allConstants[plr].name+":"+allConstants[plr.answer,250,display_answer])
     }
   }
  }

}
