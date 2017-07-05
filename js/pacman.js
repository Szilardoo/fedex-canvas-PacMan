'use strict';

class PacMan {
    constructor() {
        this.dom = new Dom();
        this.x = 10;
        this.y = 15;
    }
    toRadians(deg) {
        return deg* Math.PI/180
    }
    render() {
        this.dom.ctx.fillStyle = 'yellow';
        this.dom.ctx.beginPath();
        this.dom.ctx.moveTo(this.x*25+12.5, this.y*25+12.5)
        this.dom.ctx.arc(this.x*25+12.5, this.y*25+12.5, 10, this.toRadians(300), this.toRadians(240));
        this.dom.ctx.lineTo(this.x*25+12.5, this.y*25+12.5)
        this.dom.ctx.closePath();
        this.dom.ctx.stroke();
        this.dom.ctx.fill();
    }
}