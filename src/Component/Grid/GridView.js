import React from 'react';
import R from 'ramda';
import Tile from './TileView';

let Grid = React.createClass({
	render: function () {
		let grid = this.props.grid.tiles;
		
		let fullHtml = R.mapIndexed((line, y) => {
			return R.mapIndexed((tileState, x) => {
				let tile = {empty: tileState === 0, x: x, y: y };
				return (<Tile tile={tile} />);
			}, line);
		}, grid);
		
		let html = R.drop(4, fullHtml);
		
		let messageHtml = this.props.gameOver ? <p>Game Over !</p> : ''
		
		let style = {
			position: 'absolute',
			top: '50px',
			left: '50px',
			width: 20 * 16 + 'px',
			height: fullHtml.length * 20 + 'px'
		};
		
		let styleBorder = {
			border: '1px solid black',
			position: 'absolute',
			top: 4 * 20 + 'px',
			left: 0,
			right: 0,
			bottom: -1
		};
		
		if (this.props.gameOver) {
			styleBorder.backgroundColor = 'rgba(255, 255, 255, 0.3)';
		}
		
		return (<div style={style}>
			{html}
			<div style={styleBorder}>{messageHtml}</div>
			</div>);
	}
});

export default Grid;