import { Ancients, Level, brownCards, blueCards, greenCards } from "../model"

import { Game } from "./game"
import { Diff } from "./diff"
import { Ancient } from "./ancient"
import { Interface } from "./inerface"
import { Controller } from "../controller"

class App {
	constructor() {
		this.interface = new Interface()
		this.controller = new Controller()

		this.game = new Game(Level, this.controller)
		this.diff = new Diff(Level, this.controller)
		this.ancient = new Ancient(Ancients, this.controller, this.diff)

		this.controller.init({
			diff: this.diff,
			ancient: this.ancient,
			cards: {
				brown: brownCards,
				blue: blueCards,
				green: greenCards
			}
		})
	}

	render() {
		this.interface.render()
		this.game.render()
	}
}

document.addEventListener("DOMContentLoaded", () => new App().render())
