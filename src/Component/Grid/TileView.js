import React from 'react';

let Tile = React.createClass({
  render: function () {
    let x = this.props.tile.x * 20;
    let y = this.props.tile.y * 20;
    let empty = this.props.tile.empty;

    let style = {
      border: empty ? '' : '1px solid white',
      position: 'absolute',
      left: x,
      top: y,
      width: '20px',
      height: '20px',
      backgroundColor: empty ? 'white' : 'black'
    };

    return (<div style={style} className></div>);
  }
});

export default Tile;
