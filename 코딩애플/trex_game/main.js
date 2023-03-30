let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

canvas.width = window.innerWidth - 100;
canvas.height = window.innerHeight - 100;

let dino = {
  x: 10,
  y: 200,
  width: 50,
  height: 50,
  draw() {
    ctx.drawImage(image2, this.x, this.y, 50, 50);
  },
};

var image1 = new Image();
image1.src = "cactus.png";

var image2 = new Image();
image2.src = "dinosaur.png";

class Cactus {
  constructor() {
    this.x = 500;
    this.y = 200;
    this.width = 50;
    this.height = 50;
  }
  draw() {
    ctx.drawImage(image1, this.x, this.y, 50, 50);
  }
}

let timer = 0;
let cactusArray = [];
var 점프timer = 0;
var 애니메이션;

function 프레임마다실행할거() {
  애니메이션 = requestAnimationFrame(프레임마다실행할거);
  timer++;

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  if (timer % 100 === 0) {
    let cactus = new Cactus();
    cactusArray.push(cactus);
    cactus.draw();
  }

  cactusArray.forEach((a, i, o) => {
    if (a.x < 0) {
      o.splice(i, 1);
    }
    a.x -= 2;

    충돌(dino, a);

    a.draw();
  });

  if (점프중 == true) {
    dino.y -= 3;
    점프timer++;
  }

  if (점프중 == false) {
    if (dino.y < 200) {
      dino.y += 3;
    }
  }

  if (점프timer > 40) {
    점프중 = false;
    점프timer = 0;
  }

  dino.draw();
}

프레임마다실행할거();

function 충돌(dino, cactus) {
  var x축차이 = cactus.x - (dino.x + dino.width);
  var y축차이 = cactus.y - (dino.y + dino.height);
  if (x축차이 < 0 && y축차이 < 0) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    cancelAnimationFrame(애니메이션);
  }
}

var 점프중 = false;
document.addEventListener("keydown", function (e) {
  if (e.code === "Space") {
    점프중 = true;
  }
});
