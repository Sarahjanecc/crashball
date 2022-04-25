console.log ("probando")
let startBtn= document.querySelector("#start-btn"); //elemento de DOM
let restartBtn = document.querySelector("#start-btn");
let inicialScreen = document.querySelector("#splash-screen")

const canvas = document.querySelector("#my-canvas");
const ctx = canvas.getContext("2d");



let startGame = () =>{
inicialScreen.style.display = "none"
canvas.style.display = "block";


let game = new Game()
game.gameLoop()

document.addEventListener("keydown",(event) => {
    game.ball.moveBall(event)
})
}


startBtn.addEventListener("click",startGame)
restartBtn.addEventListener("click", startGame);
window.addEventListener("keydown", keyPress);