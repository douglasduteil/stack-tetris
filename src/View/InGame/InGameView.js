//

import React from 'react';

// Component Dependences
import Grid from '~/Component/Grid';

// Models Dependences
import GridModel from '~/Model/GridModel';

// Local style
import style from './InGame.css!';

//
const LEVEL_SPEED = 50; // go down every 50 millisecond
function timeNow() { return window.performance.now(); };

export default class InGame extends React.Component {

  constructor() {
    super();
    this.grid = new GridModel();

    this.playing = true;


    // TODO(douglasduteil): [REFACTO] use bacon observables instead
    this.grid.onGameOver = () => {
      // TODO(douglasduteil): [HACK] not implemented yet
      console.info('"onGameOver" not implemented yet');
      this.playing = false;
      this.componentWillUnmount();
    };

    // TODO(douglasduteil): [REFACTO] use bacon observables instead
    this.grid.onLineCompleted = (numberLines) => {
      // TODO(douglasduteil): [HACK] not implemented yet
      console.info('"onLineCompleted" not implemented yet');
      //infos.increaseScore(numberLines);
    };

    // TODO(douglasduteil): [HACK] use the exact same pre-binded function for events
    // TODO(douglasduteil): [REFACTO] use bacon observables instead
    this.__onKeyDown = (e) => {
      this.grid.onKeyboardInput(e);
      this.setState({ gridMatrix: this.grid.getRenderedGrid() });
    };

    this.state = { gridMatrix: this.grid.getRenderedGrid() };
  }

  componentDidMount() {
    this.lastFrame = timeNow();
    window.requestAnimationFrame(::this._update);
    // TODO(douglasduteil): [REFACTO] use bacon observables with debounce !
    document.addEventListener('keydown', this.__onKeyDown);
  }

  componentWillUnmount() {
    this.playing = false;
    document.removeEventListener('keydown', this.__onKeyDown);
  }

  _update() {
    if (!this.playing) {
      return;
    }

    window.requestAnimationFrame(::this._update);

    const now = timeNow();
    const dt = timeNow() - this.lastFrame;

    if (dt < LEVEL_SPEED) {
      return;
    }

    this.grid.update();
    this.setState({ gridMatrix: this.grid.getRenderedGrid() });
    this.lastFrame = now;

  }

  render() {
    return (<div>
      <Grid grid={this.state.gridMatrix}/>
    </div>);
  }
}
