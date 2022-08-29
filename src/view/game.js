import { id, delay, addEvent } from "../data/default"

export class Game {
	constructor(Controller) {
		this.controller = Controller
	}

	async render() {
		const game = document.createElement("div")
		game.classList.add("game", "container")

		await id("#root").append(game)
		await delay(0)

		game.classList.add("game-active")
	}
}
