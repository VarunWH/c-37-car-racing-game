class Player {
  //properties of the player
  constructor() {
    this.name=null;
    this.index=null; //index-1 or 2
    this.positionX=0;
    this.positionY=0;
  }

  //reading playerCount from database
  getCount(){
    var playerCountRef=database.ref("playerCount");
    //Arrow function
    playerCountRef.on("value",(data)=>{
      playerCount=data.val();
    })
  }
    
  //updating the value of player Count back to the databaswe
  updateCount(count){
    // "/" --> refers to root directory
   database.ref("/").update({
     'playerCount':count
   })
  }

  addPlayer(){
    var playerIndex="players/player"+this.index //players-player1 and player2
     if(this.index===1){
       this.positionX=width/2-100
     }
     else{
      this.positionX=width/2+100
     }

    database.ref(playerIndex).set({
      name:this.name,
      positionX:this.positionX,
      positionY:this.positionY
    })

  }
 //read all player info
 //not attached to only one player.it is attached to whole class;
 
 static getPlayersInfo(){
   var playerInfoRef=database.ref("players");
   playerInfoRef.on("value",(data)=>{
    allPlayer=data.val()
    //player1-name,x,y
    //player2-name,x,y

   })
 }
 

 

 
}
