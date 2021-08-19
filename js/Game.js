class Game {
  constructor() {}
  
  start() {
    player = new Player();
    player.getCount()
    form = new Form();
    form.display();

    car1=createSprite(width/2-50,height-100);
    car1.addImage("car1",car1_img);
    car1.scale=0.07;

    car2=createSprite(width/2+50,height-100);
    car2.addImage("car1",car2_img);
    car2.scale=0.07;

    cars=[car1,car2];
  }

  //read the value of gameState from database
  getState(){
    var gameStateRef= database.ref("gameState");
    //Anonymous function- where function created and called at same place
    gameStateRef.on("value",function(data){
     gameState =data.val();
    })
  }

  //updateing database value of gameState when players entered
  update(state){
    
    database.ref("/").update({
      gameState:state

    })

  }

  handleElemnts(){
    form.hide();
    form.titleImg.position(40,50);
    form.titleImg.class("gameTitleAfterEffect");
  }

  play(){
    this.handleElemnts();
    //static function should be class with class name
    Player.getPlayersInfo();
  

    //null check - To check both player info is present
    if(allPlayer!==undefined){
      image(track,0,-height*5,width,height*6);

      drawSprites();

    }
  }


 
}
