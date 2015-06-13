import React from 'react';
import Grid from './GridView';
import Infos from './InfosView';


let Container = React.createClass({
	render: function () {
		
		return (<div>
				<Grid grid={this.props.grid} />
				<Infos timer={this.props.timer} score={this.props.score} />
			</div>);
	}
});

export default Container;