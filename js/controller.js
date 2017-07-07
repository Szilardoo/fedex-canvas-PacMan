'use strict';

class Controller {
    constructor(pacman) {
        window.addEventListener('keypress', function(event) {
            let key = event.keyCode;
            let startTime = (new Date()).getTime();
            if(key === 119) {
                pacman.radStart = 320;
                pacman.radEnd = 220;
                pacman.animate(startTime, 'up');
            }
            if(key === 97) {
                pacman.radStart = 210;
                pacman.radEnd = 150;
                pacman.animate(startTime, 'left');
            }
            if(key === 115) {
                pacman.radStart = 120;
                pacman.radEnd = 60; 
                pacman.animate(startTime, 'down');
            }
            if(key === 100) {
                pacman.radStart = 30;
                pacman.radEnd = 330;
                pacman.animate(startTime, 'right');
            }
        }.bind(this));
    }
}












