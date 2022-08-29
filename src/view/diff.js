import { id, delay, addEvent } from "../data/default"

export class Diff {
	constructor(Level, Controller) {
		this.level = Level
		this.controller = Controller
	}

	async render() {
		const diff = document.createElement("div")
		diff.classList.add("diff")

		console.log(this.level)
	}
}
