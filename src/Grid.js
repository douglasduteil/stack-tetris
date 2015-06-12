import React from 'react';
import R from 'ramda';

var Grid = React.createClass({
	getInitialState: () => {
		let lines = R.repeat([], 20);
		
		let grid = R.map((line) => {
			return R.repeat([], 16);
		}, lines);
		
		return { grid: grid };	
	},
	render: () => {
		var gridDOM = R.mapIndexed((line, y) => {
			R.mapIndexed((tile, x) => { return (<Tile tile={tile} x={x} y={y} />) }, line);
		}, this.state.grid);
		
		
		return (
			<div>{gridDOM}</div>
		);
	}
});