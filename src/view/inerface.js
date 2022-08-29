import { addEvent, id } from "../data/default"

export class Interface {
	constructor(ancient, controller) {
		this.ancient = ancient
		this.controller = controller
	}

	render() {
		const fone = document.createElement("div")
		fone.classList.add("fone")

		const reload = document.createElement("div")
		reload.classList.add("reload")
		reload.innerHTML = "&#x21bb;"

		addEvent(reload, "click", () => this.reload())

		id("#root").append(fone, reload)
	}

	reload() {
		this.controller.reload()
		id(".container").remove()
		this.ancient.render()
	}
}
