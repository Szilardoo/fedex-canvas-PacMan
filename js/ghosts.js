'user strict';

class Ghosts {
	constructor(){
		this.dom = new Dom();
		this.map = new Map();
		this.redSrc = './ghosts/red.png'
		this.orangeSrc = './ghosts/orange.png'
		this.pinkSrc = './ghosts/pink.png'
		this.blueSrc = './ghosts/blue.png'
		

		this.redX = 10;
		this.redY = 7;

		this.coordsB = {
			'x': 9,
			'y': 9
		}

		this.coordsP = {
			'x': 10,
			'y': 9
		}

		this.coordsO = {
			'x': 11,
			'y': 9
		}

		this.xy = ['x', 'y'];
		this.direction=[-0.1, 0.1];
		this.xOrY = this.xy[Math.floor(Math.random() *2)]
		this.leRiUpDo = this.direction[Math.floor(Math.random() *2)];

		this.drawGhost(this.redX, this.redY, this.redSrc);
		this.drawGhost(this.coordsB.x, this.coordsB.y, this.blueSrc);
		this.drawGhost(this.coordsP.x, this.coordsP.y, this.pinkSrc);
		this.drawGhost(this.coordsO.x, this.coordsO.y, this.orangeSrc);
		// console.log(this.map.getWallCoords(this.redX-3, this.redY));
	}

	ghostsMove(){
		//right left up down
		if(this.map.getWallCoords(this.redX+0.99, this.redY+0.1) && this.map.getWallCoords(this.redX+0.99, this.redY+0.9) &&
			this.map.getWallCoords(this.redX-0.1, this.redY+0.1) && this.map.getWallCoords(this.redX-0.1, this.redY+0.9) &&
			this.map.getWallCoords(this.redX+0.1, this.redY-0.2) && this.map.getWallCoords(this.redX+0.9, this.redY-0.2) &&
			this.map.getWallCoords(this.redX+0.1, this.redY+1.1) && this.map.getWallCoords(this.redX+0.9, this.redY+1.1)
			){
				this.redY += 0.1;
			//right
		}else if (this.map.getWallCoords(this.redX+0.99, this.redY+0.1) && this.map.getWallCoords(this.redX+0.99, this.redY+0.9) &&
			this.map.getWallCoords(this.redX-0.1, this.redY+0.1) && this.map.getWallCoords(this.redX-0.1, this.redY+0.9)) {
			// console.log('ez')
			this.redX += this.leRiUpDo;


		} else if (this.map.getWallCoords(this.redX+0.99, this.redY+0.1) && this.map.getWallCoords(this.redX+0.99, this.redY+0.9)){
			// console.log('ss')
			//down
			if(this.map.getWallCoords(this.redX+0.1, this.redY+1) && this.map.getWallCoords(this.redX+0.9, this.redY+1)){
				this.redY += 0.1
			} else {
				// console.log('else')
				this.redX += 0.1;
				this.leRiUpDo = 0.1
			}
		} else if (this.map.getWallCoords(this.redX+0.8, this.redY+0.8) && this.map.getWallCoords(this.redX, this.redY+0.8)){
			// console.log('asd')
			this.redY += 0.1;
		 } else if(this.map.getWallCoords(this.redX-0.1, this.redY+0.1) && this.map.getWallCoords(this.redX-0.1, this.redY+0.7)){
		 	// console.log('he')
		 	this.redX -= 0.1; 
		 } else if(this.map.getWallCoords(this.redX+0.1, this.redY-0.2) && this.map.getWallCoords(this.redX+0.9, this.redY-0.2)){}





		 //else if (this.map.getWallCoords(this.redX+0.1, this.redY+1.1) && this.map.getWallCoords(this.redX+0.9, this.redY+1.1)){
		// 	if(this.map.getWallCoords(this.redX+0.99, this.redY+0.1) && this.map.getWallCoords(this.redX+0.99, this.redY+0.9)) {
		// 		this.redX += 0.1
		// 	}
		// }



		this.drawGhost(this.redX, this.redY, this.redSrc);

		this.drawGhost(this.coordsB.x, this.coordsB.y, this.blueSrc);
		this.drawGhost(this.coordsP.x, this.coordsP.y, this.pinkSrc);
		this.drawGhost(this.coordsO.x, this.coordsO.y, this.orangeSrc);

	}

	drawGhost(x, y, src){
		let ghostImage = new Image();
		ghostImage.onload = function() {
			this.dom.ctx.drawImage(ghostImage, x*25, y*25, 25, 25);
		}.bind(this);
		ghostImage.src = src;
	}
}