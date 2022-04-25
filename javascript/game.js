class Game {
  constructor() {
    this.bg = new Image();
    this.bg.src = "../images/backgroundpy.png";
    this.ball = new Ball();
    this.pipestatic = new Pipestatic(10,0);
    this.pipeArr = [new Pipe(0,"../images/cohete.png" )];
    this.pipeDistance = 470
    
  }

  addNewPipes = () => {

    if(this.pipeArr[this.pipeArr.length -1].x < -150){
        let randomPosition = Math.random() * 180
        //console.log ("estoy funcionando")

        let newPipeDown = new Pipe(randomPosition + 220, "../images/cohete.png")
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
        
        this.isGameOn = true;
        // canvas.style.display =none;
      }
    });
  };





  gameLoop = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(this.bg, 0, 0, canvas.width, canvas.height);

    this.ball.gravityBall();
    this.gameOverCollision();

    this.addNewPipes()
    this.pipeArr.forEach((eachPipe) => {
      eachPipe.movePipe();
    });

    this.pipeArr.forEach((eachPipe) => {
      eachPipe.drawPipe();
    });

    this.pipestatic.drawPipestatic();

    this.ball.drawBall();

    requestAnimationFrame(this.gameLoop);
  };
}

