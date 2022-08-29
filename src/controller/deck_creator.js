import { Deck } from "./deck"

export class DeckCreator {
	make(cards, ancient, diff) {
		this.deck = new Deck()
		this.cardsRequired = this.getRequiredCardsAmount(ancient)

		switch (diff.id) {
			case "very_easy":
				cards = this.keep(cards, ["easy"])
				break

			case "easy":
				cards = this.keep(cards, ["easy", "normal"])
				break

			case "normal":
				break

			case "hard":
				cards = this.keep(cards, ["normal", "hard"])
				break

			case "very_hard":
				cards = this.keep(cards, ["hard"])
				break
		}

		cards = this.deck.shuffle(cards)
		cards = this.deck.splitByStages(cards, ancient)

		return cards
	}

	keep(cards, keep) {
		const filtered = {}
		for (let color in cards) {
			// filter card
			filtered[color] = cards[color].filter((card) =>
				keep.includes(card.difficulty)
			)

			// check if left enought
			const needCardsMore =
				this.cardsRequired[color] - filtered[color].length
			if (needCardsMore > 0)
				for (let i = 0; i < needCardsMore; i++) {
					const [card] = this.deck.pick(cards, color, "normal")
					filtered[color].push(card)
				}
		}

		return filtered
	}

	getRequiredCardsAmount(ancient) {
		const stages = ["firstStage", "secondStage", "thirdStage"]
		const amount = (type) =>
			stages.reduce((amount, stage) => amount + ancient[stage][type], 0)

		return {
			brown: amount("brownCards"),
			green: amount("greenCards"),
			blue: amount("blueCards")
		}
	}
}
