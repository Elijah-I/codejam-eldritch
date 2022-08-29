import { state, initialState, ENUM } from "../model/storage"
import { DeckCreator } from "./deck_creator"

export class Controller {
	init({ diff, ancient, cards }) {
		this.diff = diff
		this.cards = cards
		this.anctient = ancient

		this.deckCreator = new DeckCreator()
	}

	pickAncient(ancient) {
		state.ancient = ancient
		state.stage = ENUM.STAGES.DIFF
	}

	pickLevel(level) {
		state.level = level
		state.stage = ENUM.STAGES.GAME
		state.deck = this.deckCreator.make(
			this.cards,
			state.ancient,
			state.level
		)
	}

	tossCard() {
		state.currentCard = state.subDeck.length ? state.subDeck.pop() : null
	}

	nextStage() {
		if (state.gameStage === "secondStage") state.gameStage = "thirdStage"
		if (state.gameStage === "firstStage") state.gameStage = "secondStage"
	}

	reload() {
		Object.keys(initialState).forEach(
			(option) => (state[option] = initialState[option])
		)
	}
}
