'use strict';

class Controller {
    constructor() {
        this.pacman = new PacMan();
        this.pacman.render();
        this.map = new Map();
        window.addEventListener('keypress', function(event) {
            this.key = event.keyCode;
            if(this.key === 119) {
                this.moveUp();
            }
            if(this.key === 97) {
                this.moveLeft();
            }
            if(this.key === 115) {
                this.moveDown();
            }
            if(this.key === 100) {
                this.moveRight();
            }
        }.bind(this))
    }
    moveUp() {
        this.map.render();
        this.pacman.y -= 1;
        this.pacman.render(this.pacman.x, this.pacman.y);
    }
    moveLeft() {
        this.map.render();
        this.pacman.x -= 1;        
        this.pacman.render(this.pacman.x, this.pacman.y);
    }
    moveDown() {
        this.map.render();
        this.pacman.y += 1;
        this.pacman.render(this.pacman.x, this.pacman.y);
    }
    moveRight() {
        this.map.render();
        this.pacman.x += 1;        
        this.pacman.render(this.pacman.x, this.pacman.y);
    }
}