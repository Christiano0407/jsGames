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

console.groupEnd();
