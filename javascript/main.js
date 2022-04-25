console.log ("probando")
let startBtn= document.querySelector("#start-btn"); //elemento de DOM
let inicialScreen = document.querySelector("#splash-screen")
let containerSplashScreen = document.querySelector("#splash-container")
const canvas = document.querySelector("#my-canvas");
const ctx = canvas.getContext("2d");



let startGame = () =>{
inicialScreen.style.display = "none"
canvas.style.display = "block";
containerSplashScreen.style.display= "none"

let game = new Game()
game.gameLoop()
}








startBtn.addEventListener("click",startGame)