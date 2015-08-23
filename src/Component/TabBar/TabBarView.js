import React from 'react';
import style from './TabBar.css!';

export default React.createClass({
  render: function () {
    return (<div className={style.bar}>
      <div className={style.tab}>
        <div className={style.title}>{this.props.title}</div>
      </div>
    </div>);
  }
});

