class Game {
  constructor() {
    this.bg = new Image();
    this.bg.src = "../images/backgroundpy.png";
    this.ball = new Ball();
    this.staticPipe = new Pipe(-70, "../images/tubsup.png", 150);
    this.pipeArr = [new Pipe(450, "../images/tubazul.png", canvas.width)];
  }

  addNewPipes = () => {
    if (this.pipeArr[this.pipeArr.length - 1].x < 200) {
      let randomPosition = Math.random() * 20;

      let newPipeDown = new Pipe(randomPosition);

      this.pipeArr.push(newPipeDown);
    }
  };

  gameLoop = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(this.bg, 0, 0, canvas.width, canvas.height);

    this.pipeArr.forEach((eachPipe) => {
      eachPipe.movePipe();
    });

    this.pipeArr.forEach((eachPipe) => {
      eachPipe.drawPipe();
    });

    this.staticPipe.drawPipe();

    this.ball.drawBall();

    requestAnimationFrame(this.gameLoop);
  };
}
