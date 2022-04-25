class Ball {
  constructor() {
    this.x = 160;
    this.y = 40;
    this.w = 80;
    this.h = 100;
    this.img = new Image();
    this.img.src = "../images/ballyel.png";
    this.speed = 0.5;
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
