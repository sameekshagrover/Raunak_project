class Game {
    constructor(){
  
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
        player.getCount();
        
        form = new Form()
        form.display();
      }
      Space1 = createSprite(100,200);
      Space1.addImage("Space1",Space1img);
      Space1.scale=0.5
      Space2 = createSprite(300,200);
      Space2.addImage("Space2",Space2img);
      Space2.scale=0.5
      Spaces = [Space1, Space2];
    }
  
    play(){
      form.hide();
     Player.getPlayerInfo();
      
      if(allPlayers !== undefined){
        var index =0;
       var x =100;
       var y=200;
  
        for(var plr in allPlayers){
            index = index + 1 ;
          x = 500-allPlayers[plr].distance;
          y = 500;
          Spaces[index-1].x = x;
          Spaces[index-1].y = y;
  
          if (index === player.index){
            Spaces[index - 1].shapeColor = "red";
            
          }
         
          
        }
  
      }
  
      if(keyIsDown(RIGHT_ARROW) && player.index !== null){
        player.distance -=10
        player.update();
      }

      if(keyIsDown(LEFT_ARROW) && player.index !== null){
        player.distance +=10
        player.update();
      }
      
     
      drawSprites();
    }
}  