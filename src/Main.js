import React from 'react';

var Tile = React.createClass({
  componentDidMount: function() {
  },
  componentWillUnmount: function() {
  },
  render: function() {
    return (
      <div class="grid"></div>
    );
  }
});

React.render(<Tile />, document.getElementById('scene'));