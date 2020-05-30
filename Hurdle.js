class Hurdle {
    constructor(){
  this.player=null;
    }
  
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
        player = new Player();
        var playerCountRef = await database.ref('playerCount').once("value");
        if(playerCountRef.exists()){
          playerCount = playerCountRef.val();
          player.getCount();
        }
        form = new Form()
        form.display();
      }
  
      Player1 = createSprite(200,100);
      Player1.addImage("Player1",player1_img);
      Player2 = createSprite(200,300);
      Player2.addImage("Player2",player2_img);
      Player3 = createSprite(200,500);
      Player3.addImage("Player3",player3_img);
      Player4 = createSprite(200,700);
      Player4.addImage("Player4",player4_img);
      Players = [Player1, Player2, Player3, Player4];
    }
  
    play(){
      form.hide();
      
      Player.getPlayerInfo();
      
      if(allPlayers !== undefined){
        background(rgb(198,135,103));
        image(track, 0,displayHeight,-displayWidth*4, displayHeight*5);
        
        
        var index = 0;
  
      
        var x = 175 ;
        var y;
  
        for(var plr in allPlayers){
         
          index = index + 1 ;
  
         
          x = x + 200;
         
          y = displayHeight - allPlayers[plr].distance;
          Hurdles[index-1].x = x;
          Hurdles[index-1].y = y;
  
        
           
         
        }
  
      }
  
      if(keyIsDown(LEFT_ARROW) && player.index !== null){
        player.distance +=10
        player.update();
      }
  
      if(player.distance > 3860){
        gameState = 2;
        text("GAME OVER",200,200);
      }
     
      drawSprites();
    }
}