class Pipered {
  constructor(yParam, srcParam) {
    this.x = canvas.width;
    this.y = yParam;
    this.w = 60;
    this.h = 80;
    this.img = new Image();
    this.img.src = srcParam; // solo un . importante
    this.speed = 2;
  }

  drawPipeRed = () => {
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  };

  movePipeRed = () => {
    this.x = this.x - this.speed;
  };
}
