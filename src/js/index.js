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
    let obstacleLeft = 500;
    let randomHeight = Math.random() * 60;
    let obstacleBottom = randomHeight;
    const obstacle = document.createElement(`div`);
    obstacle.classList.add(`obstacle`);
    gameDisplay.appendChild(obstacle);
    obstacle.style.left = obstacleLeft + `px`;
    obstacle.style.bottom = obstacleBottom + `px`;
    //
    moveObstacle = () => {
      obstacleLeft -= 2;
      obstacle.style.left = obstacleLeft + `px`;
      //> Desaparecer Obstacle>>
      if (obstacleLeft === -60) {
        clearInterval(timerId);
        gameDisplay.removeChild(obstacle);
      }
    };

    let timerId = setInterval(moveObstacle, 20);
  };
  generateObstacle();
});
