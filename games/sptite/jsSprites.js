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
let gameFrame = 0; // => Evitar los espacios en blanco <
const staggerFrames = 2; //> Escalamiento / frameworks / v + a (velocidad + acelera)

//> Crear animation <
function animate() {
  // especificar en donde rect
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  //ctx.fillRect(x, 50, 100, 100);
  //> img / Tomar el sprite (encuadrar)
  //ctx.drawImage(Image, sx, sy, sw, sh, dx, dy, dw, dh);
  let position = Math.floor(gameFrame / staggerFrames) % 6;
  frameX = spriteWidth * position;
  ctx.drawImage(
    playerImg,
    //frameX * spriteWidth, // Img => recorrido Ancho / Horizontal
    frameX,
    frameY * spriteHeight, // Recorrido => recorrido Alto / Vertical
    spriteWidth,
    spriteHeight,
    0,
    0,
    CANVAS_WIDTH,
    CANVAS_HEIGHT
  );
  //> Recorrido por frameworks <
  /* if (gameFrame % staggerFrames == 0) { */
  /*   if (frameX < 6) frameX++; */
  /*   else frameX = 0; */
  /* } */
  gameFrame++;
  //> peticion
  requestAnimationFrame(animate);
}
animate();

console.groupEnd();
