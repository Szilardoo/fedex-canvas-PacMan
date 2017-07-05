'use strict';

class Dom {
    constructor() {
        let canvas = document.querySelector('.main canvas');
        this.ctx = canvas.getContext('2d');
    }
}