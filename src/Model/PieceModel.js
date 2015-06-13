import R from 'ramda';

class Piece {
	constructor(typePiece, otherPieces) {
		this.static = false;
		this.otherPieces = otherPieces;
		this.tiles = [];
		
		if (typePiece === 'o') {
			this.tiles.push({x: 0, y: 0});
			this.tiles.push({x: 1, y: 0});
			this.tiles.push({x: 0, y: 1});
			this.tiles.push({x: 1, y: 1});
		} else if (typePiece === 'i') {
			this.tiles.push({x: 0, y: 0});
			this.tiles.push({x: 1, y: 0});
			this.tiles.push({x: 2, y: 0});
			this.tiles.push({x: 3, y: 0});			
		} else if (typePiece === 'l') {
			this.tiles.push({x: 0, y: 0});
			this.tiles.push({x: 0, y: 1});
			this.tiles.push({x: 0, y: 2});
			this.tiles.push({x: 1, y: 2});	
		} else if (typePiece === 'j') {
			this.tiles.push({x: 1, y: 0});
			this.tiles.push({x: 1, y: 1});
			this.tiles.push({x: 1, y: 2});
			this.tiles.push({x: 0, y: 2});	
		} else if (typePiece === 't') {
			this.tiles.push({x: 0, y: 0});
			this.tiles.push({x: 0, y: 1});
			this.tiles.push({x: 0, y: 2});
			this.tiles.push({x: 1, y: 1});	
		} else if (typePiece === 'z') {
			this.tiles.push({x: 0, y: 0});
			this.tiles.push({x: 1, y: 0});
			this.tiles.push({x: 1, y: 1});
			this.tiles.push({x: 2, y: 1});	
		} else if (typePiece === 's') {
			this.tiles.push({x: 0, y: 1});
			this.tiles.push({x: 1, y: 1});
			this.tiles.push({x: 1, y: 0});
			this.tiles.push({x: 2, y: 0});	
		}
	}
	moveDown() {
		this.tiles.forEach((tile) => {
			tile.y += 1;
		});
	}
	moveLeft() {
		this.tiles.forEach((tile) => {
			tile.x -= 1;
		});	
	}
	moveRight() {
		this.tiles.forEach((tile) => {
			tile.x += 1;
		});
	}
	getVirtualRotation() {
		
	}
}

export default Piece;