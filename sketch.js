var car1,car2,car3,car4,cars;
var gameState = 0;
var playerCount = 0;
var database ;
var form, player, game ;
var allPlayers;
//var ball;

function setup(){
    database=firebase.database();
    createCanvas(displayWidth-20,displayHeight-30);

    game = new Game ();
    game.getGameState ();
    game.start () ;

    /*
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";

    var dbNode = database.ref ("ball/position");
    dbNode.on ("value", readPosition, showError);
    */
}

function draw () {
    if(playerCount==4){
        game.updateGameState(1);
    }
     if(gameState==1){

         clear () ;
         console.log ("GAME STATE :"+ gameState);
         game.play();

         drawSprites();
    }
}

/*
function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}

function writePosition(x,y){
    var dbNode = database.ref ("ball/position");
    dbNode.set ({
        x:ball.x+x,
        y:ball.y+y
    });
    //ball.x = ball.x + x;
    //ball.y = ball.y + y;
}

function readPosition (data) {
    pos = data.val ();
    console.log (pos.x);
    console.log (pos.y);
    ball.x = pos.x;
    ball.y = pos.y;
}

function showError(){
    console.log ("ERROR");
}

*/