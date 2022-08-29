export const ENUM = {
	STAGES: {
		ACIENT: "ACIENT",
		DIFF: "DIFF",
		GAME: "GAME"
	}
}

export const initialState = {
	ancient: null,
	stage: ENUM.STAGES.ACIENT
}

export const state = Object.assign({}, initialState)
