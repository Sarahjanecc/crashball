# Crashball

## Description

Crashball it is a game for the development of attention and motor skills, through the visualization of 2 moving targets and an object controlled by the player. The player must identify the blue targets and accumulate them and avoid the red targets or fall into the void.
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
[Link Deploy](https://sarahjanecc.github.io/crashball/)
[Link Repo](https://github.com/Sarahjanecc/crashball.git)
### Slides
