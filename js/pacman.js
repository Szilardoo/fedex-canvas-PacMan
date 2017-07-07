'use strict';

class PacMan {
    constructor() {
        this.dom = new Dom();
        this.map = new Map();
        this.x = 10;
        this.y = 15;
        this.render(this.x, this.y);
        // let startTime = (new Date()).getTime();
        // this.animate(startTime, 'up');
    }
    toRadians(deg) {
        return deg* Math.PI/180
    }
    render(pos_x, pos_y) {
        this.dom.ctx.fillStyle = 'yellow';
        this.dom.ctx.beginPath();
        this.dom.ctx.moveTo(pos_x*25+12.5, pos_y*25+12.5);
        this.dom.ctx.arc(pos_x*25+12.5, pos_y*25+12.5, 10, this.toRadians(300), this.toRadians(240));
        this.dom.ctx.lineTo(pos_x*25+12.5, pos_y*25+12.5);
        this.dom.ctx.closePath();
        this.dom.ctx.stroke();
        this.dom.ctx.fill();
    }

    getWallCoordinate(){

    }

    animate(startTime, direction, key){

    let i = setInterval(function(){
            window.addEventListener('keypress', function(event) {
                if(event.keyCode === 119) {
                    clearInterval(i);
                }
                if(event.keyCode === 97) {
                    clearInterval(i);
                }
                if(event.keyCode === 115) {
                    clearInterval(i);
                }
                if(event.keyCode === 100) {
                    clearInterval(i);
                }
            });
      		if(this.x < 20){
      			this.dom.ctx.clearRect(0, 0, 525, 525);
      			this.map.render();
                switch(direction) {
                    case 'up':
                        this.y -= 0.05;
                        break;
                    case 'down':
                        this.y += 0.05;
                        break;
                    case 'left':
                        this.x -= 0.05;
                        break;
                    case 'right':
                        if (true) {}
                        this.x += 0.05;
                        break;
                }
	    		this.render(this.x, this.y);
	    		console.log([Math.floor(this.x, 2), Math.floor(this.y, 2)]);
	    	}
        }.bind(this), 20);
    }

    positionCheck() {

    }
}


























		// window.requestAnimFrame = (function(callback) {
		//     return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
		//     function(callback) {
		//       window.setTimeout(callback, 100000 / 60);
		//     };
		//   })();

		// console.log('the code is still running')
		// if(this.x < 20 && this.x > 1){
		// 	this.dom.ctx.clearRect(0, 0, 525, 525);
  //    		this.map.render();
		// 	let time = (new Date()).getTime() - startTime;

		// 	let moveX = moveLeftRight;
		// 	let moveY = moveUpDown;
		// 	// pixels / second
		// 	this.x = 10+moveX * time / 10000;
		// 	this.y = 15+moveY * time / 10000;

		// 	console.log('ez az X', this.x)
  //           console.log('ez az Y', this.y)

		// 	this.render(this.x, this.y)
		// 	requestAnimFrame(function() {
		// 	    this.animate(startTime, moveLeftRight, moveUpDown);
		// 	}.bind(this));
		// }