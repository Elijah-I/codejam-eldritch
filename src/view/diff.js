import { id, delay, addEvent } from "../data/default"

export class Diff {
	constructor(Level, Controller) {
		this.level = Level
		this.controller = Controller
	}

	async render() {
		const diff = document.createElement("div")
		diff.classList.add("diff", "container")

		const content = []
		for (let order in this.level) {
			const star = document.createElement("div")
			star.classList.add("star")

			addEvent(star, "mouseover", () => {
				const stars = id(".star")
				for (let star_order in stars) {
					if (!Number.isInteger(+star_order)) continue

					stars[star_order].classList[
						star_order <= order ? "add" : "remove"
					]("star-active")
				}
			})

			addEvent(star, "mouseout", () => {
				const stars = id(".star")
				for (let star_order in stars) {
					if (!Number.isInteger(+star_order)) continue
					stars[star_order].classList.remove("star-active")
				}
			})

			addEvent(star, "click", () => this.pickLevel(this.level[order]))

			content.push(star)
		}

		diff.append(...content)

		await id("#root").append(diff)
		await delay(0)

		diff.classList.add("diff-active")
	}

	pickLevel(level) {
		id(`.diff`).remove()

		this.controller.pickLevel(level)
	}
}
