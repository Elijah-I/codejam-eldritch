import { state, ENUM } from "../model/storage"
import { DeckCreator } from "./deck_creator"

export class Controller {
	init({ diff, ancient, cards }) {
		this.diff = diff
		this.cards = cards
		this.anctient = ancient

		this.deckCreator = new DeckCreator()

		this.pickAncient({
			id: "azathoth",
			name: "azathoth",
			cardFace:
				"http://localhost:8080/js/../assets/Ancients/Azathoth.png",
			firstStage: {
				greenCards: 1,
				blueCards: 1,
				brownCards: 2
			},
			secondStage: {
				greenCards: 2,
				blueCards: 1,
				brownCards: 3
			},
			thirdStage: {
				greenCards: 2,
				blueCards: 0,
				brownCards: 4
			}
		})

		this.pickLevel({ id: "very_easy", name: "Очень легкая", point: 0 })
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
}
