import React from 'react';
import style from './StartScreen.css!';

//
import {VIEW_NAME, GOTO_EVENT} from '../StackTetris';

export default class StartScreen extends React.Component {

  _onMenuButtonClick(viewName) {
    const event = document.createEvent('Event');
    event.initEvent(GOTO_EVENT.toString(), true, true);
    event.viewName = viewName;
    React.findDOMNode(this).dispatchEvent(event);
  }

  render() {
    return (<div className={style.container}>
      <div className={style.title}>Stack Tetris</div>
      <ul className={style.menu}>
        <li className={style.menuItem}>
          <button
            className={style.menuButton}
            onClick={() => this._onMenuButtonClick(VIEW_NAME.IN_GAME)}
            >
            Start
          </button>
        </li>
        <li className={style.menuItem}>
          <button
            className={style.menuButton}
            onClick={() => this._onMenuButtonClick(VIEW_NAME.ABOUT)}
            >
            About
          </button>
        </li>
      </ul>
    </div>);
  }
}
