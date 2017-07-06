'user strict';

class Ghosts {
	constructor(){
		this.dom = new Dom();
		this.redSrc = './ghosts/red.png'
		this.orangeSrc = './ghosts/orange.png'
		this.pinkSrc = './ghosts/pink.png'
		this.blueSrc = './ghosts/blue.png'
		this.coordsR = {
			'x': 10,
			'y': 7
		}

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
		this.drawGhost(this.coordsR.x, this.coordsR.y, this.redSrc);
		this.drawGhost(this.coordsB.x, this.coordsB.y, this.blueSrc);
		this.drawGhost(this.coordsP.x, this.coordsP.y, this.pinkSrc);
		this.drawGhost(this.coordsO.x, this.coordsO.y, this.orangeSrc);
	}

	ghostsMove(){
		this.direction=[-0.1, 0.1]
		// console.log(Object.keys(this.coordsR)[Math.floor(Math.random() * 2)])
		// this.coordsR[Object.keys(this.coordsR)[Math.floor(Math.random() * 2)]] += this.direction[Math.floor(Math.random() * 2)];
		this.coordsR[]
		console.log(this.coordsR);
		this.drawGhost(this.coordsR.x, this.coordsR.y, this.redSrc);

	}

	drawGhost(x, y, src){
		let ghostImage = new Image();
		ghostImage.onload = function() {
			this.dom.ctx.drawImage(ghostImage, x*25, y*25, 25, 25);
		}.bind(this);
		ghostImage.src = src;
	}
}