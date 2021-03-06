class Pipe {
  constructor(yParam, srcParam) {
    this.x = canvas.width;
    this.y = yParam;
    this.w = 60;
    this.h = 120;
    this.img = new Image();
    this.img.src = srcParam; // solo un . importante
    this.speed = 2.3;
  }

  drawPipe = () => {
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  };

  movePipe = () => {
    this.x = this.x - this.speed;
  };
}
