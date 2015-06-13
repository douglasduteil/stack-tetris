import React from 'react';

var Tile = React.createClass({
  render: () => {
    return (
      <div className="grid {this.props.state}"></div>
    );
  }
});

export default Tile;