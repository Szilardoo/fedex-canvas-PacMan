// 'use strict';

class Controller {
    constructor(pacman) {
        window.addEventListener('keypress', function(event) {
            let key = event.keyCode;
            let startTime = (new Date()).getTime();
            if(key === 119) {
                pacman.animate(startTime, 'up');
            }
            if(key === 97) {
                pacman.animate(startTime, 'left');
            }
            if(key === 115) {
                pacman.animate(startTime, 'down');
            }
            if(key === 100) {
                pacman.animate(startTime, 'right');
            }
        }.bind(this))
    }
}