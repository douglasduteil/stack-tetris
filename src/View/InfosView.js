import React from 'react';

let Infos = React.createClass({
	getDefaultProps: () => {
		return {
			score: '-',
			timer: '-'	
		};
	},
	
	render: function () {		
		
		return (<div>
			<p>Score : <span>{this.props.score}</span></p>
			<p>Remaining Time : <span>{this.props.timer}</span></p>
		</div>);
	}
});

export default Infos;