import React from 'react';
import GridModel from './Model/GridModel';
import InfosModel from './Model/InfosModel';
import ContainerView from './View/ContainerView';

let grid = new GridModel();
let infos = new InfosModel();

let keyboardListener = document.addEventListener('keydown', (event) => { grid.onKeyboardInput(event) });

//requestAnimationFrame(animate);

let main = React.render(<ContainerView grid={grid.getRenderedGrid()} score={infos.score} timer={infos.timer} />, document.getElementById('scene'));

let updateGame = () => {
	grid.update();
	infos.updateTimer();
	main.setProps({grid: grid.getRenderedGrid(), score: infos.score, timer: infos.timer});	
} 

setTimeout(() => { grid.onGameOver() }, 1000);

let interval = setInterval(updateGame, 200);

grid.onGameOver = () => {
	main.setProps({grid: grid.getRenderedGrid(), score: infos.score, timer: infos.timer, gameOver: true})
	clearInterval(interval);
};

grid.onLineCompleted = (numberLines) => {
	infos.increaseScore(numberLines);
};