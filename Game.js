class Game {
    constructor () {

    }
    // function getGameState .. reads the gameState from DB
    getGameState () {
        //refer to gameState location in DB
            var gameStateRef = database.ref ("/gameState");
            // listen to gameState changes in DB
            gameStateRef.on ("value", 
                            function(data){
                                gameState = data.val ();
                                console.log ("GAME STATE : "+ gameState);
                            }
            )
    }
// function updateGameState .. updates gameState in the DB
updateGameState (state) {
    var gameStateRef = database.ref ("/");
    gameStateRef.update ({"gameState" : state}) ;
}

// function start
start () {
    if (gameState == 0) {
        player = new Player ();
        var startCount = player.getPlayerCount ();
        console.log ("START :"+startCount);
        form = new Form () ;
        form.display () ;
    }
    car1=createSprite(100,200);
    car2=createSprite(300,200);
    car3=createSprite(500,200);
    car4=createSprite(700,200);
    cars=[car1,car2,car3,car4]
}    

play () {
    form.hide ();
    textSize (30) ;
    text ("Game Start", 120,100);
    Player.getPlayerInfo ();

    if (allPlayers != undefined) {
        var index=0;
        var x=0;
        var y;
        var display_position = 130;
        for (var plr in allPlayers){
            index=index+1;
            x=x+200;
            y=displayHeight-allPlayers[plr].distance;
            cars[index-1].x=x;
            cars[index-1].y=y;
            if(index==player.index){
                cars[index-1].shapeColor="yellow";
                camera.position.x=displayWidth/2;
                camera.position.y=cars[index-1].y;
            }
           /* if (plr == "player"+player.index)
                fill("green");
            else 
                fill("blue");*/
          display_position+=20;
          textSize (15) ;
          //  text (allPlayers[plr].name+": " + allPlayers[plr].distance, 120, display_position);//
        }
        
    }
    console.log (player.index);
    if (keyIsDown (UP_ARROW) && player.index != null) {
        console.log ("UPARROW PRESSED");
        player.distance+=50;
        player.updatePlayerNameAndDistance ();

    }
}


}