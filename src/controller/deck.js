export class Deck {
	pick(deck, color, diff = "any") {
		const card = deck[color]
			.filter((card) => diff === "any" || diff == card.difficulty)
			.sort(() => 0.5 - Math.random())
			.pop()

		deck[color] = deck[color].filter((c) => c.id !== card.id)

		return [card, deck]
	}

	shuffle(deck, sort_color = "all") {
		return Object.keys(deck).reduce((shuffeled, color) => {
			const sort = sort_color === "all" || sort_color == color ? 0.5 : 2
			shuffeled[color] = deck[color].sort(() => sort - Math.random())
			return shuffeled
		}, {})
	}

	splitByStages(deck, ancient) {
		const compileStage = (cards_need) => {
			const colorDeck = []
			const colors = ["green", "blue", "brown"]

			for (let color of colors)
				for (let i = 0; i < cards_need[`${color}Cards`]; i++) {
					const [card, newDeck] = this.pick(deck, color)
					deck = newDeck
					colorDeck.push(card)
				}

			return colorDeck.sort(() => 0.5 - Math.random())
		}

		return {
			firstStage: compileStage(ancient.firstStage),
			secondStage: compileStage(ancient.secondStage),
			thirdStage: compileStage(ancient.thirdStage)
		}
	}
}
