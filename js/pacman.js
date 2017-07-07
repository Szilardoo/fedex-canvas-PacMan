'use strict';

class PacMan {
    constructor() {
        this.dom = new Dom();
        this.map = new Map();
        this.ghosts = new Ghosts();
        this.check = true;
        this.value = 5;
        this.radStart = 210;
        this.radEnd = 150;
        this.render(this.x, this.y, this.radStart, this.radEnd);
        this.canEat = false;
    }
    teleport() {
        if(parseInt(this.x) === 20) {
            this.x = 0.1;
            this.y = 9;
        } else if(Math.ceil(this.x) === 0) {
            this.y = 9;
            this.x = 19.9;
            
        }
    }
    toRadians(deg) {
        return deg* Math.PI/180;
    }
    render(pos_x = 10, pos_y = 15, radStart, radEnd) {
        this.x = pos_x;
        this.y = pos_y;
        this.dom.ctx.fillStyle = 'yellow';
        this.dom.ctx.beginPath();
        this.dom.ctx.moveTo(pos_x*25+12.5, pos_y*25+12.5);
        this.dom.ctx.arc(pos_x*25+12.5, pos_y*25+12.5, 10, this.toRadians(radStart), this.toRadians(radEnd));
        this.dom.ctx.lineTo(pos_x*25+12.5, pos_y*25+12.5);
        this.dom.ctx.closePath();
        this.dom.ctx.stroke();
        this.dom.ctx.fill();
    }
    animate(startTime, direction){
        // let score = document.querySelector('.points');
        let interval = setInterval(function() {
            if(Math.round(this.ghosts.redX) === Math.round(this.x) && Math.round(this.ghosts.redY) === Math.round(this.y) && !this.canEat){
                clearInterval(interval);
            } else {
                if(Math.round(this.ghosts.redX) === Math.round(this.x) && Math.round(this.ghosts.redY) === Math.round(this.y) && this.canEat){
                    this.ghosts.eatedRed = true;
                    this.ghosts.redX = 0;
                }
            this.ghosts.ghostsMove();
            window.addEventListener('keypress', function(event) {
                if(event.keyCode === 119) {
                    clearInterval(interval);
                }
                if(event.keyCode === 97) {
                    clearInterval(interval);
                }
                if(event.keyCode === 115) {
                    clearInterval(interval);
                }
                if(event.keyCode === 100) {
                    clearInterval(interval);
                }
            });
            this.dom.ctx.clearRect(0, 0, 525, 525);
            this.map.render();
            // console.log(this.map.points);
            document.querySelector('.points').textContent = this.map.points;
            switch(direction) {
                case 'up':
                    if(this.map.getWallCoords(this.x, this.y-0.1) && this.map.getWallCoords(this.x+0.99, this.y-0.1)){
                        this.map.getPointCoords(this.x, this.y);

                        if (this.check && this.radStart <= 320 || this.check && this.radEnd <=240 ) {
                            this.radStart -= this.value;
                            this.radEnd += this.value;
                            if (this.radStart === 270) {
                                this.check = false;
                            } 
                        } else {
                            this.check = false;
                            this.radStart += this.value;
                            this.radEnd -= this.value;
                            if (this.radStart >= 320) {
                                this.check = true;
                            }
                        }
                        // console.log(this.radStart, this.radEnd);
                        this.y -= 0.1;
                        if(this.map.getWallCoords(this.x, this.y)) {
                            // console.log("cant turn left")
                        }
                        if(this.map.getWallCoords(this.x+0.99, this.y)) {
                            // console.log("cant turn right")
                        }
                    } else {
                        this.y = Math.round(this.y);
                        this.x = Math.round(this.x);
                    }
                    break;
                case 'down':
                    if(this.map.getWallCoords(this.x+0.99, this.y+1.1) && this.map.getWallCoords(this.x, this.y+1.1)){
                        this.map.getPointCoords(this.x, this.y);

                        if (this.check && this.radStart <= 140 || this.check && this.radEnd <=40 ) {
                            this.radStart -= this.value;
                            this.radEnd += this.value;
                            if (this.radStart === 90) {
                                this.check = false;
                            } 
                        } else {
                            this.check = false;
                            this.radStart += this.value;
                            this.radEnd -= this.value;
                            if (this.radStart >= 140) {
                                this.check = true;
                            }
                        }

                        this.y += 0.1;
                    } else {
                        this.x = Math.round(this.x);
                        this.y = Math.round(this.y);
                    }
                    break;
                case 'left':
                    if(this.map.getWallCoords(this.x-0.1, this.y) && this.map.getWallCoords(this.x-0.1, this.y+0.99)){
                        this.map.getPointCoords(this.x, this.y);

                        if (this.check && this.radStart <= 230 || this.check && this.radEnd <=130 ) {
                            this.radStart -= this.value;
                            this.radEnd += this.value;
                            if (this.radStart === 180) {
                                this.check = false;
                            } 
                        } else {
                            this.check = false;
                            this.radStart += this.value;
                            this.radEnd -= this.value;
                            if (this.radStart >= 230) {
                                this.check = true;
                            }
                        }
                        
                        this.x -= 0.1;
                    } else {
                        this.x = Math.round(this.x);
                        this.y = Math.round(this.y);
                    };
                    break;
                case 'right':
                    if(this.map.getWallCoords(this.x+0.99, this.y+0.99) && this.map.getWallCoords(this.x+1, this.y)){
                        this.map.getPointCoords(this.x, this.y);

                        if (this.check && this.radStart <= 50 || this.check && this.radEnd <=350 ) {
                            this.radStart -= this.value;
                            this.radEnd += this.value;
                            if (this.radStart === 0) {
                                this.check = false;
                            } 
                        } else {
                            this.check = false;
                            this.radStart += this.value;
                            this.radEnd -= this.value;
                            if (this.radStart >= 50) {
                                this.check = true;
                            }
                        }

                        this.x += 0.1;
                    } else {
                        this.x = Math.round(this.x);
                        this.y = Math.round(this.y);
                    }
                    break;
            }

            if(this.map.eatableGhosts) {

                console.log('eat')
                this.canEat = true;
                this.ghosts.redSrc = './ghosts/eat.png'
                this.ghosts.orangeSrc = './ghosts/eat.png'
                this.ghosts.pinkSrc = './ghosts/eat.png'
                this.ghosts.blueSrc = './ghosts/eat.png'

                setTimeout(function(){ 
                    this.canEat = false;
                    this.ghosts.redSrc = './ghosts/red.png'
                    this.ghosts.orangeSrc = './ghosts/orange.png'
                    this.ghosts.pinkSrc = './ghosts/pink.png'
                    this.ghosts.blueSrc = './ghosts/blue.png'
                 }.bind(this), 7000);
                this.map.eatableGhosts = false;
            }
            this.teleport();
            // console.log(this.map.allowStep)
            this.render(this.x, this.y, this.radStart, this.radEnd);
        }
        }.bind(this), 20);
    }
}
