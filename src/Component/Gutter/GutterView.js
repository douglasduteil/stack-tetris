//

import React from 'react';
import R from 'ramda';

import style from './Gutter.css!';

export default class Gutter extends React.Component {
  _renderLineNumber(number) {
    return <div
      className={style.lineNumber}
      key={number + 1}
      > {number + 1}</div>;
  }

  render() {
    return (<div className={style.container}>
      <div className={style.gutter}>
        <div className={style.lineNumbers}>
          {R.range(0, this.props.lines).map(this._renderLineNumber)}
        </div>
      </div>
    </div>);
  }
}

