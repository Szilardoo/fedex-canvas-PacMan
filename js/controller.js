'use strict';

class Controller {
    constructor() {
        let pacman = new PacMan();
        window.addEventListener('keypress', function(event) {
            let key = event.keyCode;
            let startTime = (new Date()).getTime();
            if(key === 119) {
                console.log('w');
                pacman.animate(startTime, 'up', key);
            }
            if(key === 97) {
                console.log('a');
                pacman.animate(startTime, 'left', key);
            }
            if(key === 115) {
                console.log('s');
                pacman.animate(startTime, 'down', key);
            }
            if(key === 100) {
                console.log('d');
                pacman.animate(startTime, 'right', key);
            }
        }.bind(this))
    }
}