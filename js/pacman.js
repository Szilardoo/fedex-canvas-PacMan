'use strict';

class PacMan {
    toRadians(deg) {
        return deg* Math.PI/180;
    }
    render(x = 10, y = 15) {
        this.x = x;
        this.y = y;
        let dom = new Dom();
        dom.ctx.fillStyle = 'yellow';
        dom.ctx.beginPath();
        dom.ctx.moveTo(this.x*25+12.5, this.y*25+12.5)
        dom.ctx.arc(this.x*25+12.5, this.y*25+12.5, 10, this.toRadians(300), this.toRadians(240));
        dom.ctx.lineTo(this.x*25+12.5, this.y*25+12.5)
        dom.ctx.closePath();
        dom.ctx.stroke();
        dom.ctx.fill();
    }
}