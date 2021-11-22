// = Canvas = Me propone Methods
/** @type {HTMLCanvasElement} */
// ==== >
const canvas = document.getElementById(`canvas1`);
const ctx = canvas.getContext(`2d`);
const canvas_width = (canvas.width = 500);
const canvas_height = (canvas.height = 1000);
const numberOfEnemies = 25;
const enemiesArray = [];

//> Traer IMG ==>
const enemyImage = new Image();
enemyImage.src = `/games/gameAnimation/img/enemy1.png`;
let gameFrame = 0;

//(A)>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// > Representación del Objeto <
/* enemy1 = { */
/*   //> Position> */
/*   x: 10, */
/*   y: 50, */
/*   // Tamaño> */
/*   width: 100, */
/*   height: 100, */
/* }; */
//(A)>>
//> CLass = Representation del Object <<<<<<<<<<<<
class Enemy {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.speed = Math.random() * 4 - 2; // Rango entr 4 u -2;
    this.spriteWidth = 293; //px
    this.spriteHeight = 155; //px
    this.width = this.spriteWidth / 2.5; // > Nuevo Tamaño <
    this.height = this.spriteHeight / 2.5;
    this.frame = 0; // Movimiento del sprite (desde cero) <
    this.flapSpeed = Math.random() * 3 + 1;
  }
  // Methods
  update() {
    this.x += this.speed;
    this.y += this.speed;
    // Animate sprites >
    if (gameFrame % this.flapSpeed === 0) {
      this.frame > 4 ? (this.frame = 0) : this.frame++;
    }
  }
  draw() {
    ctx.strokeRect(this.x, this.y, this.width, this.height);
    //img => con sus movimientos(sprites)
    ctx.drawImage(
      enemyImage,
      0,
      0,
      this.spriteWidth,
      this.spriteHeight,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }
}
//> Crear nuevo ==>
//const enemy1 = new Enemy();
for (let i = 0; i < numberOfEnemies; i++) {
  enemiesArray.push(new Enemy());
}
//console.log(enemiesArray);
//> Animation position <
function animate() {
  //eliminar cuadros anteriores>
  ctx.clearRect(0, 0, canvas_width, canvas_height);
  //enemy1.update();
  //Color/físico>
  //enemy1.draw();
  //> Método por cada object ==>
  enemiesArray.forEach((enemy) => {
    enemy.update();
    enemy.draw();
  });
  gameFrame++;
  requestAnimationFrame(animate);
}
animate();
