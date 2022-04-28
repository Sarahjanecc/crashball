class Pipestatic {
  constructor(xParam, yParam) {
    this.x = 400;
    this.y = -50;
    this.w = 100;
    this.h = 200;
    this.img = new Image();
    this.img.src = "./images/tubsup.png"; // solo un . importante
  }

  drawPipestatic = () => {
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  };
}
