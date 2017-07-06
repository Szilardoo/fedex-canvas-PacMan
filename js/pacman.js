'use strict';

class PacMan {
    constructor() {
        this.dom = new Dom();
        this.map = new Map();
        this.x = 10;
        this.y = 15;
        this.render(this.x, this.y)
    }
    toRadians(deg) {
        return deg* Math.PI/180;
    }
    render(pos_x, pos_y) {
        this.dom.ctx.fillStyle = 'yellow';
        this.dom.ctx.beginPath();
        this.dom.ctx.moveTo(pos_x*25+12.5, pos_y*25+12.5)
        this.dom.ctx.arc(pos_x*25+12.5, pos_y*25+12.5, 10, this.toRadians(300), this.toRadians(240));
        this.dom.ctx.lineTo(pos_x*25+12.5, pos_y*25+12.5)
        this.dom.ctx.closePath();
        this.dom.ctx.stroke();
        this.dom.ctx.fill();
    }
    animate(startTime, direction, key){
        let i = setInterval(function(){
        window.addEventListener('keypress', function(event) {
            if(event.keyCode === 119) {
                clearInterval(i)
            }
            if(event.keyCode === 97) {
                clearInterval(i)
            }
            if(event.keyCode === 115) {
                clearInterval(i)
            }
            if(event.keyCode === 100) {
                clearInterval(i)
            }
        })
        this.dom.ctx.clearRect(0, 0, 525, 525);
        this.map.render();
        switch(direction) {
            case 'up':
                (this.y > 0) ? this.y -= 0.1 : this.y;
                break;
            case 'down':
                (this.y < 20) ? this.y += 0.1 : this.y;
                break;
            case 'left':
                (this.x > 0) ? this.x -= 0.1 : this.x;
                break;
            case 'right':
                (this.x < 20) ? this.x += 0.1 : this.x;
                break;
        }
        this.render(this.x, this.y);
        }.bind(this), 20)
    }
}