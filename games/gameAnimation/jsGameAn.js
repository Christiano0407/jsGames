// = Canvas = Me propone Methods
/** @type {HTMLCanvasElement} */
// ==== >
const canvas = document.getElementById(`canvas1`);
const ctx = canvas.getContext(`2d`);
const canvas_width = (canvas.width = 500);
const canvas_height = (canvas.height = 1000);

//(A)>>
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
//> CLass = Representation del Object <
class Enemy {
  constructor() {
    this.x = 10;
    this.y = 50;
    this.width = 100;
    this.height = 100;
  }
  // Methods
}
const enemy1 = new Enemy();

//> Animation position <
function animate() {
  //eliminar cuadros anteriores>
  ctx.clearRect(0, 0, canvas_width, canvas_height);
  enemy1.x++;
  enemy1.y++;
  ctx.fillRect(enemy1.x, enemy1.y, enemy1.width, enemy1.height);
  requestAnimationFrame(animate);
}
animate();
