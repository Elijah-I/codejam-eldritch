import { state, ENUM } from "../model/storage"

export class Controller {
	init({ diff, ancient }) {
		this.diff = diff
		this.anctient = ancient
	}

	pickAncient(ancient) {
		state.ancient = ancient
		state.stage = ENUM.STAGES.DIFF

		setTimeout(() => {
			this.anctient.clear()
			this.diff.render()
		}, 800)
	}
}
