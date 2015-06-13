import R from 'ramda';
import Piece from './PieceModel';

class GridModel {
	constructor() {
		this.onGameOver = () => {};
		this.onLineCompleted = () => {};
		
		let lines = R.repeat([], 20);
		
		this.addRandomPiece();
		
		this.tiles = R.map((line) => {
			return R.repeat(0, 16);
		}, lines);
	}
	update() {
		let movingTiles = this.movingPiece.tiles;
		
		let onFloor = R.any(({x: x, y: y}) => { return y === 19; }, movingTiles);
		
		if (onFloor) {
			let [block1, block2, block3, block4] = movingTiles;
			
			this.tiles[block1.y][block1.x] = 1;
			this.tiles[block2.y][block2.x] = 1;
			this.tiles[block3.y][block3.x] = 1;
			this.tiles[block4.y][block4.x] = 1;
			
			this.eliminateFullLines();
			this.addRandomPiece();
			
			return;
		}		
		
		let nextMovingTiles = R.map(({x: x, y: y}) => { return {x: x, y: y + 1} }, movingTiles);
		
		let moveImpossible = R.any(({x: x, y: y}) => { return this.tiles[y][x] === 1 }, nextMovingTiles);
		
		let notVisible = R.any(({x: x, y: y}) => (y < 4), movingTiles);
			
		if (moveImpossible) {
			if (notVisible) {
				this.onGameOver();
			}
			
			let [block1, block2, block3, block4] = movingTiles;
			
			this.tiles[block1.y][block1.x] = 1;
			this.tiles[block2.y][block2.x] = 1;
			this.tiles[block3.y][block3.x] = 1;
			this.tiles[block4.y][block4.x] = 1;
			
			this.eliminateFullLines();
			
			this.addRandomPiece();
		} else {
			this.movingPiece.moveDown();
		}
	}
	getRenderedGrid() {
		let tiles = R.clone(this.tiles);
		
		let [block1, block2, block3, block4] = this.movingPiece.tiles;
		
		tiles[block1.y][block1.x] = 1;
		tiles[block2.y][block2.x] = 1;
		tiles[block3.y][block3.x] = 1;
		tiles[block4.y][block4.x] = 1;
		
		return {tiles: tiles};
	}
	addRandomPiece() {
		let types = ['o', 'l', 'j', 's', 'z', 't', 'i'];
		
		let index = Math.floor(7 * Math.random());
		
		this.movingPiece = new Piece('o');
	}
	movePiece(dX) {
		let movingTiles = this.movingPiece.tiles;
				
		let onLeftBorder = R.any(({x: x, y: y}) => { return x === 0 }, movingTiles);
		
		let onRightBorder = R.any(({x: x, y: y}) => { return x === 15 }, movingTiles);
		
		if ((dX === -1) && !onLeftBorder) {
			this.movingPiece.moveLeft();
			
			return;
		} else if ((dX === 1) && !onRightBorder) {
			this.movingPiece.moveRight();	
			
			return;					
		}
		
		let nextMovingTiles = R.map((tile) => { return { x: x + dX, y: y } });		
		
		let impossibleMove = R.any(({x: x, y: y}) => { return this.tiles[y][x] === 1; }, nextMovingTiles);
		
		if ((dX === -1) && !impossibleMove) {
			this.movingPiece.moveLeft();
			
			return;
		} else if ((dX === 1) && !impossibleMove) {
			this.movingPiece.moveRight();	
			
			return;					
		}
		
	}
	onKeyboardInput({keyCode}) {
		if (keyCode === 37) {
			this.movePiece(-1);
		} else if (keyCode === 39) {
			this.movePiece(1);			
		}
	}
	eliminateFullLines() {
		let tilesUpdated = R.filter((line) => { return !R.all((tile) => tile === 1, line); }, this.tiles);
		
		let numberLineToAdd = this.tiles.length - tilesUpdated.length;
		
		let emptyLines = R.repeat(R.repeat(0, 16), numberLineToAdd);
		
		if (numberLineToAdd !== 0) {
			this.onLineCompleted(numberLineToAdd);
			
			this.tiles = R.concat(emptyLines, tilesUpdated);
		}
	}
};

export default GridModel;