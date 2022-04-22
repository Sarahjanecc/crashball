# Crashball

## Description

Crashball is a game where the player must move the ball, dodging obstacles and trying to enter the correct pipe. The game is over if the ball falls into the void or enters the red pipe. Each Pipe has an score , and the player must enter the ball in the the highest scoring pipes to go to the next level.

## MVP (DOM - CANVAS)

- game has pipes that moves horizontally
- ball appear randomly from the top of the screen
- ball enters in the green pipes
- Increasing dificulty ( pipes speed)

## Backlog

- add scoreboard
- Ability to start the game on increased dificulty lvl

## Data Structure

# main.js

- buildSplashScreen () {}
- buildGameScreen () {}
- buildGameOverScreen () {}

# game.js

- Game () {}
- starLoop () {}
- checkCollisions () {}
- addball () {}
- addpipes(){}
- clearCanvas () {}
- updateCanvas () {}
- drawCanvas () {}
- GameOver () {}

# ball.js 

- ball () {
    this.x;
    this.y;
    this.direction;
    this.size
}
- draw () {}
- move () {}
- checkScreenCollision () {}

# pipes.js 

- pipe () {
    this.x = x;
    this.y = y;
    this.w = 0;
    this.h = 0;
    this.img = new Image();
    this.img.src = src; 
    this.speed = 0;
}
- draw () {}
- move () {}
- checkCollisionBotton () {}


## Task

- main - buildDom
- main - buildSplashScreen
- main - addEventListener
- main - buildGameScreen
- main - buildGameOverScreen
- game - startLoop
- game - buildCanvas
- game - updateCanvas
- game - drawCanvas
- game - addball
- ball - draw
- ball- move
- ball - checkCollision
- game - addpipe
- ball - draw
- ball- move
- pipe- checkCollision
- game - GameOver
- game - addEventListener

## Links

### Trello


### Git

### Slides
