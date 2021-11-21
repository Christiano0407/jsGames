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

//> framework del juego >>
let statePlayer = `inactive`;

//> Empezar de principio ( position) <
//let frameX = 0; // 0 * spriteWidth
//let frameY = 0; // 0 * spriteHeight
let gameFrame = 0; // => Evitar los espacios en blanco <
const staggerFrames = 3; //> Escalamiento / frameworks / v + a (velocidad + acelera)

//> Datos / position del sprite / (x, y) (width, height) <
const spriteAnimation = [];
const animationStates = [
  {
    name: `inactive`,
    frames: 7,
  },
  {
    name: `jump`,
    frames: 7,
  },
  {
    name: `fail`,
    frames: 7,
  },
  {
    name: `run`,
    frames: 9,
  },
  {
    name: `dizzy`,
    frames: 11,
  },
  {
    name: `sit`,
    frames: 5,
  },
  {
    name: `roll`,
    frames: 7,
  },
  {
    name: `bite`,
    frames: 7,
  },
  {
    name: `ko`,
    frames: 12,
  },
  {
    name: `getHit`,
    frame: 4,
  },
];
//>
animationStates.forEach((state, index) => {
  let frames = {
    // ubicación>
    loc: [],
  };
  //> Ciclo para las coordinadas <
  for (let j = 0; j < state.frames; j++) {
    let positionX = j * spriteWidth;
    let positionY = index * spriteHeight;
    frames.loc.push({ x: positionX, y: positionY });
  }

  spriteAnimation[state.name] = frames;
});
console.log(animationStates);

//> Crear animation <
function animate() {
  // especificar en donde rect
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  //ctx.fillRect(x, 50, 100, 100);
  //> img / Tomar el sprite (encuadrar)
  //ctx.drawImage(Image, sx, sy, sw, sh, dx, dy, dw, dh);
  let position =
    Math.floor(gameFrame / staggerFrames) %
    spriteAnimation[statePlayer].loc.length;

  let frameX = spriteWidth * position;
  let frameY = spriteAnimation[statePlayer].loc[position].y;

  //>
  ctx.drawImage(
    playerImg,
    //frameX * spriteWidth, // Img => recorrido Ancho / Horizontal
    frameX,
    //frameY * spriteHeight, // Recorrido => recorrido Alto / Vertical
    frameY,
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
