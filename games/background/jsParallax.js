// > Canvas / Contexto <
const canvas = document.getElementById(`canvas1`);
const ctx = canvas.getContext(`2d`);
const canvas_width = (canvas.width = 800);
const canvas_height = (canvas.height = 700);
let gameSpeed = 5;

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

// > Animate Background <
//> drawImage => Method
//> requestAnimationFrame => Method e petición.
let x = 0;

function animate() {
  ctx.clearRect(0, 0, canvas_width, canvas_height);
  ctx.drawImage(backgroundLayer4, x, 0);
  x -= gameSpeed;
  requestAnimationFrame(animate);
}
animate();
