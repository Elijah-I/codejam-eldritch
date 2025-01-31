import { id, delay, addEvent } from "../data/default"

export class Ancient {
	constructor(Ancients, Controller, Diff) {
		this.diff = Diff
		this.ancients = Ancients
		this.controller = Controller
	}

	async render() {
		const ancients = document.createElement("div")
		ancients.classList.add("ancients", "container")

		const content = []
		for (let ancient of this.ancients) {
			const item = document.createElement("div")
			item.classList.add("ancient__item", "card")
			item.id = ancient.id

			const img = new Image()
			img.src = ancient.cardFace

			item.append(img)
			addEvent(item, "click", () => this.pickAncient(ancient))

			content.push(item)
		}

		ancients.append(...content)

		await id("#root").append(ancients)
		await delay(0)

		ancients.classList.add("ancients-active")
	}

	pickAncient(ancient) {
		id(`#${ancient.id}`).classList.add("ancient-selected")

		setTimeout(() => {
			id(`.ancients`).remove()
			this.diff.render()
		}, 800)

		this.controller.pickAncient(ancient)
	}
}
