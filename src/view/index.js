import { Ancients, Level, brownCards, blueCards, greenCards } from "../model"

import { Diff } from "./diff"
import { Ancient } from "./ancient"
import { Interface } from "./inerface"
import { Controller } from "../controller"

class App {
	constructor() {
		this.interface = new Interface()
		this.controller = new Controller()

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
		this.ancient.render()
	}
}

document.addEventListener("DOMContentLoaded", () => new App().render())
