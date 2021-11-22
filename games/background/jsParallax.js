// > Canvas / Contexto <
const canvas = document.getElementById(`canvas1`);
const ctx = canvas.getContext(`2d`);
const canvas_width = (canvas.width = 800);
const canvas_height = (canvas.height = 700);
let gameSpeed = 5; // > Velocidad de Background

//> Image / Traer <
const backgroundLayer1 = new Image();
backgroundLayer1.src = `/games/background/assets/layer-1.png`;
const backgroundLayer2 = new Image();
backgroundLayer2.src = `/games/background/assets/layer-2.png`;
const backgroundLayer3 = new Image();
backgroundLayer3.src = `/games/background/assets/layer-3.png`;
const backgroundLayer4 = new Image();
backgroundLayer4.src = `/games/background/assets/layer-4.png`;
const backgroundLayer5 = new Image();
backgroundLayer5.src = `/games/background/assets/layer-5.png`;
//> Slider <
const slider = document.getElementById(`slider`);
console.log(slider);
slider.value = gameSpeed;
const showGameSpeed = document.getElementById(`showGameSpeed`);
//> Inner HTML >
showGameSpeed.innerHTML = gameSpeed;
//> Slider agregar velocidad <
slider.addEventListener(`change`, function (e) {
  gameSpeed = e.target.value;
  showGameSpeed.innerHTML = e.target.value;
});
// Option / layes  (2)
class Layer {
  //> Properties / methods <
  constructor(image, speedModifier) {
    this.x = 0;
    this.y = 0;
    this.width = 2400;
    this.height = 700;
    this.x2 = this.width;
    this.image = image;
    this.speedModifier = speedModifier;
    this.speed = gameSpeed * this.speedModifier;
  }
  //method / function
  update() {
    this.speed = gameSpeed * this.speedModifier;
    if (this.x <= -this.width) {
      this.x = this.width + this.x2 - this.speed;
    }
    if (this.x2 <= -this.width) {
      this.x2 = this.width + this.x - this.speed;
    }
    this.x = Math.floor(this.x - this.speed);
    this.x2 = Math.floor(this.x2 - this.speed);
  }
  draw() {
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    ctx.drawImage(this.image, this.x2, this.y, this.width, this.height);
  }
}
//> Image / Animations =>
const layer1 = new Layer(backgroundLayer1, 0.5);
const layer2 = new Layer(backgroundLayer2, 0.5);
const layer3 = new Layer(backgroundLayer3, 0.5);
const layer4 = new Layer(backgroundLayer4, 0.5);
const layer5 = new Layer(backgroundLayer5, 1);

// > Animate Background <
const gameObjects = [layer1, layer2, layer3, layer4, layer5];

//> drawImage => Method
//> requestAnimationFrame => Method e petición.
// < Option (1) >
//let x = 0;
//let x2 = 2400;
//> -2400 0 2400 <
function animate() {
  ctx.clearRect(0, 0, canvas_width, canvas_height);
  // > Method <
  gameObjects.forEach((object) => {
    object.update();
    object.draw();
  });
  requestAnimationFrame(animate);
  // < (1) >
  /* ctx.drawImage(backgroundLayer4, x, 0); */
  /*  ctx.drawImage(backgroundLayer4, x2, 0); */
  //> Loop de recorrido (1)
  /* if (x < -2400) { */
  /*   x = 2400 - gameSpeed; */
  /* } else { */
  /*   x -= gameSpeed; */
  /* } */
  /* if (x2 < -2400) x2 = 2400 - gameSpeed; */
  /* else x2 -= gameSpeed; */
}
animate();

// ====== ><
