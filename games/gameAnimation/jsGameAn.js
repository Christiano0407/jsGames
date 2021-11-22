// = Canvas = Me propone Methods
/** @type {HTMLCanvasElement} */
// ==== >
const canvas = document.getElementById(`canvas1`);
const ctx = canvas.getContext(`2d`);
const canvas_width = (canvas.width = 500);
const canvas_height = (canvas.height = 1000);
const numberOfEnemies = 50;
const enemiesArray = [];

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
    this.width = 50;
    this.height = 50;
    this.speed = Math.random() * 4 - 2; // Rango entr 4 u -2;
  }
  // Methods
  update() {
    this.x += this.speed;
    this.y += this.speed;
  }
  draw() {
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}
//> Crear nuevo ==>
//const enemy1 = new Enemy();
for (let i = 0; i < numberOfEnemies; i++) {
  enemiesArray.push(new Enemy());
}
console.log(enemiesArray);
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
  requestAnimationFrame(animate);
}
animate();
