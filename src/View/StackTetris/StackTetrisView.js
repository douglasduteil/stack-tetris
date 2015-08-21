import React from 'react';
import style from './StackTetris.css!';

import TabBar from '~/Component/TabBar';
import Gutter from '~/Component/Gutter';

// Views
import StartScreen from '../StartScreen';
import InGame from '../InGame';

// TODO(douglasduteil): [REAFCTO] extract string constants
export const VIEW_NAME = {
  ABOUT: Symbol('about'),
  IN_GAME: Symbol('in game'),
  MENU: Symbol('menu')
};

export const GOTO_EVENT = Symbol('goto event');

const VIEWS = {
  [VIEW_NAME.ABOUT]: () => false,
  [VIEW_NAME.IN_GAME]: () => <InGame />,
  [VIEW_NAME.MENU]: () => <StartScreen />
};

export default class StackTetris extends React.Component {

  constructor() {
    super();
    this.state = { viewName: VIEW_NAME.MENU };
    // TODO(douglasduteil): [HACK] use the exact same pre-binded function for events
    // TODO(douglasduteil): [REFACTO] use bacon observables instead
    this.__setViewName = ({viewName}) => this.setState({ viewName });
  }

  componentDidMount() {
    React.findDOMNode(this)
      .addEventListener(GOTO_EVENT.toString(), this.__setViewName);
  }

  componentWillUnmount() {
    React.findDOMNode(this)
      .removeEventListener(GOTO_EVENT.toString(), this.__setViewName);
  }

  _getView(viewName) {
    // Use the menu is the asked view isn't defined (silent failing)
    let view = VIEWS[viewName] || VIEWS[VIEW_NAME.MENU];
    return view() || '';
  }

  render() {
    return (<div className={style.stackTetris}>
      <header className={style.header}
        onClick={() => this.setState({ viewName: VIEW_NAME.MENU })} // TODO(douglasduteil): [HACK] go back to the menu
        >
        <ul className={style.headerItems}>
          <li className={style.headerItem}></li>
          <li className={style.headerItem}></li>
          <li className={style.headerItem}></li>
        </ul>
      </header>
      <TabBar title="Welcome"></TabBar>

      <div className={style.editor}>
        <Gutter lines="20"></Gutter>

        <div className={style.textEditor}>
          {this._getView(this.state.viewName)}
        </div>
        <div className={style.wrapGuide}></div>
      </div>
      <footer className={style.statusBar}>
        Line 1, Column 1
      </footer>
    </div>);
  }
}
