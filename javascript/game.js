class Game {
  constructor() {
    this.bg = new Image();
    this.bg.src = "./images/backgroundpy.png";
    this.ball = new Ball();
    this.pipestatic = new Pipestatic(10,0);
    this.pipeArr = [new Pipe(0,"./images/cohete.png" )];
    this.pipeRedArr = [new Pipered(150,"./images/tuborojo.png" )];
    this.working= true
    this.score = 0
    
  }

  addNewPipes = () => {

    if(this.pipeArr[this.pipeArr.length-1].x < 550){
        let randomPosition = Math.random() * 350
        //console.log ("estoy funcionando")

        let newPipeDown = new Pipe(randomPosition + 180, "./images/cohete.png")
        this.pipeArr.push(newPipeDown) 
    }
  };

    addNewPipesRed = () => {
    if(this.pipeRedArr[this.pipeRedArr.length-1].x < 300){
      let randomPosition = Math.random() * 450
      //console.log ("estoy funcionando")

      let newPipeDown = new Pipered(randomPosition + 100, "./images/tuborojo.png")
      this.pipeRedArr.push(newPipeDown) 
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


  gameOverCollisionRed = () => {
    this.pipeRedArr.forEach((eachPipe) => {
      if (
        this.ball.x < eachPipe.x + eachPipe.w &&
        this.ball.x + this.ball.w > eachPipe.x &&
        this.ball.y < eachPipe.y + eachPipe.h &&
        this.ball.h + this.ball.y > eachPipe.y
      ) {
        //console.log ("crash")
        this.working= false
        canvas.style.display = "none";
        gameOverScreen.style.display ="flex"
       
      }
    });
  };


gameover = () => {
  if ( this.ball.y > canvas.height )
   {
   // this.isGameOn = false;
    canvas.style.display = "none";
    gameOverScreen.style.display ="flex"
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
    this.gameOverCollisionRed();
    this.gameover();
    
    this.score = this.score + 1/100
    scoreDOM.innerText = Math.floor(this.score)

    this.addNewPipes()
    this.pipeArr.forEach((eachPipe) => {
      eachPipe.movePipe();
    });

    this.pipeArr.forEach((eachPipe) => {
      eachPipe.drawPipe();
    });

    this.addNewPipesRed ()  
    this.pipeRedArr.forEach((eachPipe) => {
      eachPipe.movePipeRed();
    });

    this.pipeRedArr.forEach((eachPipe) => {
      eachPipe.drawPipeRed();
    });
    

    this.pipestatic.drawPipestatic();

    this.ball.drawBall();

    if( this.working === false){

    }else { 
      requestAnimationFrame(this.gameLoop);
    }
    
  };
}

