console.group("Canvas Sprite");
// => Lienzo
const canvas = document.getElementById(`canvas1`);
console.log(canvas);
// ==> Contexto / 2d o 3d / Methods
const ctx = canvas.getContext(`2d`);
console.log(ctx);

//> Establecer el "ancho", en el que vamos a trabajr>
const CANVAS_WIDTH = (canvas.width = 600);
const CANVAS_HEIGHT = (canvas.height = 600);

// ==> Llevar la imagen (sprite) al proyecto <
const playerImg = new Image();
playerImg.src = `/games/sptite/img/shadow_dog.png`;
//let x = 100;
//let y = 0;
const spriteWidth = 575;
const spriteHeight = 523;
//> Empezar de principio ( position) <
let frameX = 0; // 0 * spriteWidth
let frameY = 0; // 0 * spriteHeight

//> Crear animation <
function animate() {
  // especificar en donde rect
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  //ctx.fillRect(x, 50, 100, 100);
  //> img / Tomar el sprite (encuadrar)
  //ctx.drawImage(Image, sx, sy, sw, sh, dx, dy, dw, dh);
  ctx.drawImage(
    playerImg,
    frameX * spriteWidth, // Img => recorrido Ancho / Horizontal
    frameY * spriteHeight, // Recorrido => recorrido Alto / Vertical
    spriteWidth,
    spriteHeight,
    0,
    0,
    CANVAS_WIDTH,
    CANVAS_HEIGHT
  );
  //> peticion
  requestAnimationFrame(animate);
}
animate();

console.groupEnd();
