export const ENUM = {
	STAGES: {
		ACIENT: "ACIENT",
		DIFF: "DIFF",
		GAME: "GAME"
	}
}

export const initialState = {
	level: null,
	ancient: null,
	currentCard: null,

	deck: [],

	stage: ENUM.STAGES.ACIENT,
	gameStage: "firstStage"
}

export let state = Object.assign(
	{
		get subDeck() {
			return this.deck[this.gameStage]
		}
	},
	initialState
)
