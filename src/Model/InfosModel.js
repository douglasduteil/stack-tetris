class Infos {
	constructor() {
		this.timer = 10000;
		this.score = 0;
	}
	updateTimer() {
		this.timer -= 1;
	}
	increaseScore(numberLines) {
		this.score += numberLines;
	}
	getTimerInSec() {
		return Math.floor(this.timer / 1000);
	}
}

export default Infos;