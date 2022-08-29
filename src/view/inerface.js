import { id } from "../data/default"

export class Interface {
	render() {
		const fone = document.createElement("div")
		fone.classList.add("fone")

		const reload = document.createElement("div")
		reload.classList.add("reload")
		reload.innerHTML = "&#x21bb;"

		id("#root").append(fone, reload)
	}
}
