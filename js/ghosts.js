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
		console.log(this.map.getWallCoords(this.redX-3, this.redY));
	}

	ghostsMove(){
		// this.coordsR[]
		// while(this.validMove(this.redX, this.redY)){
		// 	if(this.map.getWallCoords(this.redX+0.2, this.redY+0.1) && this.map.getWallCoords(this.redX+0.8, this.redY+0.1)){
		// 		this.redX += this.direction[Math.floor(Math.random() *2)];
		// 	} else if(this.map.getWallCoords(this.redX+0.2, this.redY+0.99) && this.map.getWallCoords(this.redX+0.8, this.redY+0.99)){
		// 		this.redX += this.direction[Math.floor(Math.random() *2)];
		// 	} else if(this.map.getWallCoords(this.redX-0.1, this.redY+0.2) && this.map.getWallCoords(this.redX-0.1, this.redY+0.8)){
		// 		this.redY += this.direction[Math.floor(Math.random() *2)];
		// 	} else if(this.map.getWallCoords(this.redX+1.1, this.redY+0.2) && this.map.getWallCoords(this.redX+1.1, this.redY+0.4)){
		// 		this.redY += this.direction[Math.floor(Math.random() *2)];
		// 	}
		// }

		//right left up down
		if(this.map.getWallCoords(this.redX+0.99, this.redY+0.1) && this.map.getWallCoords(this.redX+0.99, this.redY+0.9) &&
			this.map.getWallCoords(this.redX-0.1, this.redY+0.1) && this.map.getWallCoords(this.redX-0.1, this.redY+0.9) &&
			this.map.getWallCoords(this.redX+0.1, this.redY-0.2) && this.map.getWallCoords(this.redX+0.9, this.redY-0.2) &&
			this.map.getWallCoords(this.redX+0.1, this.redY+1.99) && this.map.getWallCoords(this.redX+0.9, this.redY+1.99)
			){
			if(this.xOrY === 'x'){
					this.redX += this.leRiUpDo;
				} else {
					this.redY -= this.leRiUpDo;
				}
		}
		//left && right & up
		else if(this.map.getWallCoords(this.redX-0.1, this.redY+0.1) && this.map.getWallCoords(this.redX-0.1, this.redY+0.9)
		 && this.map.getWallCoords(this.redX+0.99, this.redY+0.99) && this.map.getWallCoords(this.redX+1, this.redY) &&
		 this.map.getWallCoords(this.redX+0.1, this.redY-0.2) && this.map.getWallCoords(this.redX+0.9, this.redY-0.2)){
				if(this.xOrY === 'x'){
					this.redX += this.leRiUpDo;
				} else {
					console.log('hereHere')
					this.redY -= 2;
				}
			//right
		} else if (this.map.getWallCoords(this.redX+0.99, this.redY+0.1) && this.map.getWallCoords(this.redX+0.99, this.redY+0.9)){
			console.log('ss')
			console.log(this.map.getWallCoords(this.redX+0.1, this.redY+0.99))
			//down
			if(this.map.getWallCoords(this.redX+0.1, this.redY+1.99) && this.map.getWallCoords(this.redX+0.9, this.redY+1.99)){
				console.log('here toooooo')
				this.redY += 0.1
			}else {
				this.redX += 0.1 
			}

		} else if (this.map.getWallCoords(this.redX+0.8, this.redY+0.8) && this.map.getWallCoords(this.redX, this.redY+0.8)){
			console.log('asd')
			this.redY += 0.1;
		}












		//A validáló function eredménye ebbe a változóba megy.
		// let validOrNot;


		// //Addig generálja nekünk az új irányokat ameddig a valid false
		// while(!validOrNot){
		// 	//ezzel a változóval kiválasztjuk hogy X vagy az Y koordinátához addjunk hozzá vagy vegyünk el.
		// 	this.xOrY = this.xy[Math.floor(Math.random() *2)]
		// 	//ha az x-hez ...
		// 	if(this.xOrY === 'x'){
		// 		console.log(this.redX);
		// 		//generáljon egy új x-értéket a régi x-értékéből plusz -0.1 vagy 0.1 tehár jobra vagy balra menjen.
		// 		this.newX = this.redX + this.direction[Math.floor(Math.random() *2)];
		// 		//megnézzük hogy az új értékünk valid-e tehát nem-e fal.
		// 		validOrNot = this.validMove(this.newX,this.redY)
		// 	// ha az y-hoz...
		// 	} else {
		// 		//szintén ugyan az igaz mint az x-re
		// 		this.newY = this.redY + this.direction[Math.floor(Math.random() *2)];
		// 		validOrNot = this.validMove(this.newY,this.redY)

		// 	}
		// }

		// //ha a validáló functionunk elfogadja akkor az új értéket állitsa be a régi x-y érték helyére, ha nem akkor ugye a while addig csinálja ameddig nem lesz igaz.
		// if(validOrNot){
		// 	if(this.xOrY === 'x'){
		// 		this.redX = this.newX;
		// 	} else {
		// 		this.redY = this.newY;
		// 	}
		// }



		this.drawGhost(this.redX, this.redY, this.redSrc);

		this.drawGhost(this.coordsB.x, this.coordsB.y, this.blueSrc);
		this.drawGhost(this.coordsP.x, this.coordsP.y, this.pinkSrc);
		this.drawGhost(this.coordsO.x, this.coordsO.y, this.orangeSrc);

	}

	validMove(x,y){
		let valid = false;
		if(this.map.getWallCoords(x+0.2, y+0.1) && this.map.getWallCoords(x+0.8, y+0.1)){
			if(this.map.getWallCoords(x+0.2, y+0.99) && this.map.getWallCoords(x+0.8, y+0.99)){
				if(this.map.getWallCoords(x-0.1, y+0.2) && this.map.getWallCoords(x-0.1, y+0.8)){
					if(this.map.getWallCoords(x+1.1, y+0.2) && this.map.getWallCoords(x+1.1, y+0.4)){
						valid = true;
					}
				}
			}		
		}
		return valid;
	}

	drawGhost(x, y, src){
		let ghostImage = new Image();
		ghostImage.onload = function() {
			this.dom.ctx.drawImage(ghostImage, x*25, y*25, 25, 25);
		}.bind(this);
		ghostImage.src = src;
	}
}