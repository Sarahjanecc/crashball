class Pipe {
    constructor(yParam, srcParam,xParam) {
      this.x = xParam;
      this.y = yParam;
      this.w = 100;
      this.h = 180;
      this.img = new Image();
      this.img.src = srcParam; // solo un . importante
      this.speed = 1;
    }
  
    drawPipe = () => {
      ctx.drawImage(this.img, this.x, this.y, this.w, this.h);

    };

    movePipe = () => {
        this.x = this.x - this.speed;
      };
    }
    