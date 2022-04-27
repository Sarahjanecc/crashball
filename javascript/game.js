class Game {
  constructor() {
    this.bg = new Image();
    this.bg.src = "../images/backgroundpy.png";
    this.ball = new Ball();
    this.pipestatic = new Pipestatic(10,0);
    this.pipeArr = [new Pipe(0,"../images/cohete.png" )];
    this.working= true
    
  }

  addNewPipes = () => {

    if(this.pipeArr[this.pipeArr.length-1].x < -100){
        let randomPosition = Math.random() * 150
        //console.log ("estoy funcionando")

        let newPipeDown = new Pipe(randomPosition + 180, "../images/cohete.png")
        this.pipeArr.push(newPipeDown) 
    }
   
  };

  gameOverCollision = () => {
    this.pipeArr.forEach((eachPipe) => {
      if (
        this.ball.x < eachPipe.x + eachPipe.w &&
        this.ball.x + this.ball.w > eachPipe.x &&
        this.ball.y < eachPipe.y + eachPipe.h &&
        this.ball.h + this.ball.y > eachPipe.y
      ) {
        console.log ("crash")
        this.ball = new Ball()
       
      }
    });
  };


gameover = () => {
  if ( this.ball.y > canvas.height )
   {
   // this.isGameOn = false;
    canvas.style.display = "none";
    gameOverScreen.style.display ="block"
    //console.log (click)
    this.working = false
  }
}




  gameLoop = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(this.bg, 0, 0, canvas.width, canvas.height);
//console.log("el juego esta andando")
    this.ball.gravityBall();
    this.gameOverCollision();
    this.gameover();
    

    this.addNewPipes()
    this.pipeArr.forEach((eachPipe) => {
      eachPipe.movePipe();
    });

    this.pipeArr.forEach((eachPipe) => {
      eachPipe.drawPipe();
    });

    this.pipestatic.drawPipestatic();

    this.ball.drawBall();

    if( this.working === false){

    }else { 
      requestAnimationFrame(this.gameLoop);
    }
    
  };
}

