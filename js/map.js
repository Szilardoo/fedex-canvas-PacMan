'use strict';

class Map {
    constructor() {
        //0: nothing, 1: wall, 2: point, 3: extraPoint, 4: ghost gate
        this.map = [
            [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
            [0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 0],
            [0, 1, 2, 1, 1, 2, 1, 1, 1, 2, 1, 2, 1, 1, 1, 2, 1, 1, 2, 1, 0],
            [0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 0],
            [0, 1, 2, 1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 2, 1, 2, 1, 1, 2, 1, 0],
            [0, 1, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 1, 0],
            [0, 1, 1, 1, 1, 2, 1, 1, 1, 2, 1, 2, 1, 1, 1, 2, 1, 1, 1, 1, 0],
            [0, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 0],
            [1, 1, 1, 1, 1, 2, 1, 2, 1, 1, 4, 1, 1, 2, 1, 2, 1, 1, 1, 1, 1],
            [0, 0, 0, 0, 0, 2, 0, 0, 1, 0, 0, 0, 1, 0, 0, 2, 0, 0, 0, 0, 0],
            [1, 1, 1, 1, 1, 2, 1, 0, 1, 1, 1, 1, 1, 0, 1, 2, 1, 1, 1, 1, 1],
            [0, 0, 0, 0, 1, 2, 1, 0, 0, 0, 0, 0, 0, 0, 1, 2, 1, 0, 0, 0, 0],
            [0, 1, 1, 1, 1, 2, 1, 0, 1, 1, 1, 1, 1, 0, 1, 2, 1, 1, 1, 1, 0],
            [0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 0],
            [0, 1, 2, 1, 1, 2, 1, 1, 1, 2, 1, 2, 1, 1, 1, 2, 1, 1, 2, 1, 0],
            [0, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 0],
            [0, 1, 1, 2, 1, 2, 1, 2, 1, 1, 1, 1, 1, 2, 1, 2, 1, 2, 1, 1, 0],
            [0, 1, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 1, 0],
            [0, 1, 2, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 2, 1, 0],
            [0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 0],
            [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0]
        ]
    }
    render() {
        let dom = new Dom();
        this.map.forEach(function(ely, y) {
            ely.forEach(function(elx, x) {
                if(elx === 1) {
                    let gradient = dom.ctx.createLinearGradient(0,0,400,0);
                    gradient.addColorStop(0, 'green');
                    gradient.addColorStop(1, 'purple');
                    dom.ctx.fillStyle = 'blue';
                    dom.ctx.fillRect(x*25, y*25, 25, 25);
                } else if(elx === 0) {
                    dom.ctx.fillStyle = 'black';
                    dom.ctx.fillRect(x*25, y*25, 25, 25);
                } else if(elx === 2) {
                    dom.ctx.fillStyle = 'white';
                    dom.ctx.beginPath();
                    dom.ctx.arc(x*25+12.5, y*25+12.5, 2, 0, 360);
                    dom.ctx.stroke();
                    dom.ctx.fill();
                }
                 else if(elx === 4) {
                     function toRadians(deg) {
                         return deg* Math.PI/180
                     }
                    dom.ctx.fillStyle = 'yellow';
                    dom.ctx.beginPath();
                    dom.ctx.moveTo(x*25+12.5, y*25+12.5)
                    dom.ctx.arc(x*25+12.5, y*25+12.5, 10, toRadians(300), toRadians(240));
                    dom.ctx.lineTo(x*25+12.5, y*25+12.5)
                    dom.ctx.closePath();
                    dom.ctx.stroke();
                    dom.ctx.fill();
                }
            });
        });
    }
}