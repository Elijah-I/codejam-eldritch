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
	baseDeck: [],
	stage: ENUM.STAGES.ACIENT
}

export const state = Object.assign({}, initialState)
