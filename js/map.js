'use strict';

class Map {
    constructor() {
        //0: nothing, 1: wall, 2: point, 3: extraPoint, 4: ghost gate
        this.map = [
            [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
            [0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 0],
            [0, 1, 3, 1, 1, 2, 1, 1, 1, 2, 1, 2, 1, 1, 1, 2, 1, 1, 3, 1, 0],
            [0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 0],
            [0, 1, 2, 1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 2, 1, 2, 1, 1, 2, 1, 0],
            [0, 1, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 1, 0],
            [0, 1, 1, 1, 1, 2, 1, 1, 1, 0, 1, 0, 1, 1, 1, 2, 1, 1, 1, 1, 0],
            [0, 0, 0, 0, 1, 2, 1, 0, 0, 0, 0, 0, 0, 0, 1, 2, 1, 0, 0, 0, 0],
            [1, 1, 1, 1, 1, 2, 1, 0, 1, 1, 4, 1, 1, 0, 1, 2, 1, 1, 1, 1, 1],
            [0, 0, 0, 0, 0, 2, 0, 0, 1, 0, 0, 0, 1, 0, 0, 2, 0, 0, 0, 0, 0],
            [1, 1, 1, 1, 1, 2, 1, 0, 1, 1, 1, 1, 1, 0, 1, 2, 1, 1, 1, 1, 1],
            [0, 0, 0, 0, 1, 2, 1, 0, 0, 0, 0, 0, 0, 0, 1, 2, 1, 0, 0, 0, 0],
            [0, 1, 1, 1, 1, 2, 1, 0, 1, 1, 1, 1, 1, 0, 1, 2, 1, 1, 1, 1, 0],
            [0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 0],
            [0, 1, 2, 1, 1, 2, 1, 1, 1, 2, 1, 2, 1, 1, 1, 2, 1, 1, 2, 1, 0],
            [0, 1, 3, 2, 1, 2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 2, 1, 2, 3, 1, 0],
            [0, 1, 1, 2, 1, 2, 1, 2, 1, 1, 1, 1, 1, 2, 1, 2, 1, 2, 1, 1, 0],
            [0, 1, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 1, 0],
            [0, 1, 2, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 2, 1, 0],
            [0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 0],
            [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0]
        ];
        this.allowStep = true;
        this.points = 0;
    }
    getWallCoords(pacmanX, pacmanY) {
        if(this.map[parseInt(pacmanY)][parseInt(pacmanX)] === 1 || this.map[parseInt(pacmanY)][parseInt(pacmanX)] === 4) {
            this.allowStep = false;
        }
        else {
            this.allowStep = true;
        }
        return this.allowStep
    }
    getPointCoords(pacmanX, pacmanY) {
        if(this.map[parseInt(pacmanY)][parseInt(pacmanX)] === 2) {
            this.points += 1;
            this.map[parseInt(pacmanY)][parseInt(pacmanX)] = 0;
        } else if(this.map[parseInt(pacmanY)][parseInt(pacmanX)] === 3) {
            this.points += 100;
            this.map[parseInt(pacmanY)][parseInt(pacmanX)] = 0;
        }
        this.putFruits();
    }

    putFruits() {
        if (this.points >= 100 && this.points !==0 && this.points % 100 === 0) {
            console.log('putFruits');
        }
    }

    render() {
        let dom = new Dom();
        this.map.forEach(function(ely, y) {
            ely.forEach(function(elx, x) {
                switch(elx) {
                    case(0): {
                        dom.ctx.fillStyle = 'black';
                        dom.ctx.fillRect(x*25, y*25, 25, 25);
                        break;
                    }
                    case(1): {
                        dom.ctx.fillStyle = 'blue';
                        dom.ctx.fillRect(x*25, y*25, 25, 25);
                        break;
                    }
                    case(2): {
                        dom.ctx.fillStyle = 'white';
                        dom.ctx.beginPath();
                        dom.ctx.arc(x*25+12.5, y*25+12.5, 2, 0, 360);
                        dom.ctx.stroke();
                        dom.ctx.fill();
                        break;
                    }
                    case(3): {
                        dom.ctx.fillStyle = 'white';
                        dom.ctx.beginPath();
                        dom.ctx.arc(x*25+12.5, y*25+12.5, 6, 0, 360);
                        dom.ctx.stroke();
                        dom.ctx.fill();
                        break;
                    }
                    case(4): {
                        dom.ctx.fillStyle = 'white';
                        dom.ctx.fillRect(x*25, y*25, 25, 25);
                        break;
                    }
                }
            }.bind(this));
        }.bind(this));
    }
}