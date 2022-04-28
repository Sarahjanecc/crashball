console.log("probando");
let startBtn = document.querySelector("#start-btn"); //elemento de DOM
let restartBtn = document.querySelector("#restart-btn");
let inicialScreen = document.querySelector("#splash-screen");
const gameOverScreen = document.querySelector("#gameover-screen");
const audio = new Audio("./audio/sarahgame.MP3");
const canvas = document.querySelector("#my-canvas");
const scoreCero = document.querySelector("#score span");
const scoreDOM = document.querySelector("#score");
const ctx = canvas.getContext("2d");

let startGame = () => {
  inicialScreen.style.display = "none";
  gameOverScreen.style.display = "none";
  canvas.style.display = "block";
  scoreDOM.style.display = "block";
  let game = new Game();
  game.gameLoop();

  audio.play();
  audio.loop = true;
  (audio.volumen = 0), 5;

  document.addEventListener("keydown", (event) => {
    game.ball.moveBall(event);
  });
};

startBtn.addEventListener("click", startGame);
restartBtn.addEventListener("click", startGame);
//window.addEventListener("keydown", keyPress);
