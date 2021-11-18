//> DOM => Cargar)
document.addEventListener(`DOMContentLoaded`, () => {
  const bird = document.querySelector(`.bird`);
  const gameDisplay = document.querySelector(`.game-container`);
  const ground = document.querySelector(`.ground-container`);

  //> recorrer px <
  let birdLeft = 220;
  let birdBottom = 100;
  // Gravedad >
  let gravity = 2;

  //> Function <
  startGame = () => {
    birdBottom -= gravity;
    bird.style.bottom = birdBottom + `px`;
    bird.style.left = birdLeft + `px`;
  };

  //> Intervalo de tiempo >
  let timeId = setInterval(startGame, 20);
  //> Intervalo Claro >
  //clearInterval(timeId);

  //> Controls >
  control = (e) => {
    if (e.keyCode === 32) {
      jump();
    }
  };

  //> Jump >
  jump = () => {
    if (birdBottom < 500) birdBottom += 50;
    bird.style.bottom = birdBottom + `px`;

    //console.log(birdBottom);
  };
  //> Tipo teclado arriba>
  document.addEventListener(`keyup`, jump);

  //> Obstacle >
  generateObstacle = () => {
    const obstacle = document.createElement(`div`);
    obstacle.classList.add(`obstacle`);
    gameDisplay.appendChild(obstacle);
  };
  generateObstacle();
});
