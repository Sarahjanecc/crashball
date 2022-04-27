class Ball {
  constructor() {
    this.x = 420;
    this.y = 70;
    this.w = 50;
    this.h = 50;
    this.img = new Image();
    this.img.src = "./images/ballyel.png";
    this.speed = 1;
  }

  drawBall = () => {
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  };

  gravityBall = () => {
    this.y = this.y + this.speed;
  };

  moveBall = (event) => {
    if (event.code === "ArrowLeft") {
      this.x = this.x - 20;
    } else if (event.code === "ArrowRight") {
      this.x = this.x + 20;
    }
  };
}
