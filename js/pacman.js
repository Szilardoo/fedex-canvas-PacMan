'use strict';

class PacMan {
    constructor() {
        this.dom = new Dom();
        this.map = new Map();
        this.x = 10;
        this.y = 15;
        this.render(this.x, this.y)
        let startTime = (new Date()).getTime();
        this.animate(startTime, -100);
    }
    toRadians(deg) {
        return deg* Math.PI/180
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

    getWallCoordinate(){

    }

    animate(startTime, moveLeftRight = 0, moveUpDown = 0){
     //  	setInterval(function(){
     //  		if(this.x < 20){
     //  			this.dom.ctx.clearRect(0, 0, 525, 525);
     //  			this.map.render();
	    //   		this.x += 0.2
	    // 		this.render(this.x, this.y);
	    // 		// if(this.x < 21){
	    // 		// 	this.animate(startTime);
	    // 		// } 
	    // 		console.log(this.x)
	    // 	}
    	// // var time = (new Date()).getTime() - startTime;

		window.requestAnimFrame = (function(callback) {
		    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
		    function(callback) {
		      window.setTimeout(callback, 10000 / 60);
		    };
		  })();

		console.log('the code is still running')
		if(1 < this.x < 20){
			this.dom.ctx.clearRect(0, 0, 525, 525);
     		this.map.render();
			let time = (new Date()).getTime() - startTime;

			let moveX = moveLeftRight;
			let moveY = moveUpDown;
			// pixels / second
			this.x = 10+moveX * time / 100000;
			this.y = 15+moveY * time / 100000;

			console.log(this.x)

			this.render(this.x, this.y)
			requestAnimFrame(function() {
			    this.animate(startTime, moveLeftRight, moveUpDown);
			}.bind(this));
		}
    }
}