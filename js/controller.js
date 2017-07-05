'use strict';

class Controller {
    constructor() {
        window.addEventListener('keypress', function(event) {
            console.log(event.keyCode)
            let key = event.keyCode;
            if(key === 119) {
                console.log('w')
            }
            if(key === 97) {
                console.log('a')
            }
            if(key === 115) {
                console.log('s')
            }
            if(key === 100) {
                console.log('d')
            }
        })
    }
}