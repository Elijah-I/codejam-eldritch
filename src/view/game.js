import { state } from "../model/storage"
import { id, delay, addEvent } from "../data/default"
import deck_BG from "../assets/mythicCardBackground.png"

export class Game {
	constructor(Level, Controller) {
		this.level = Level
		this.tosser = "default"
		this.controller = Controller
	}

	async render() {
		// base
		const game = document.createElement("div")
		game.classList.add("game", "container")
		// base

		// deck
		const deck = document.createElement("div")
		deck.classList.add("deck", "card")

		const deck_img = new Image()
		deck_img.src = deck_BG
		deck.append(deck_img)

		addEvent(deck, "click", () => this.tossCard())
		// deck

		// ancient
		const ancient = document.createElement("div")
		ancient.classList.add("game__ancient", "card")

		const ancient_img = new Image()
		ancient_img.src = state.ancient.cardFace
		ancient.append(ancient_img)
		// ancient

		// difficulty
		const diff = document.createElement("div")
		diff.classList.add("game__diff")

		for (let i = 0; i < this.level.length; i++) {
			const star = document.createElement("div")
			star.classList.add("star", "game__star")
			if (i <= state.level.point) star.classList.add("star-active")
			diff.append(star)
		}
		// difficulty

		// label
		const label = document.createElement("div")
		label.classList.add("game__label")
		label.append(document.createTextNode("GAME STAGE 1"))
		// label

		// stage info
		const info = document.createElement("div")
		info.classList.add("game__info")

		const green = document.createElement("div")
		green.classList.add("green_status")

		const brown = document.createElement("div")
		brown.classList.add("brown_status")

		const blue = document.createElement("div")
		blue.classList.add("blue_status")

		info.append(green, brown, blue)
		// stage info

		// table
		const table = document.createElement("div")
		table.classList.add("game__table")
		// table

		game.append(deck, ancient, diff, label, info, table)

		await id("#root").append(game)
		await delay(0)

		game.classList.add("game-active")
		this.renderStageInfo()
	}

	tossCard() {
		id(".deck").classList.toggle("deck-reverse")

		this.controller.tossCard()

		if (this.tosser === "next") {
			this.controller.nextStage()
			this.setDeck("default")
		}

		if (!state.subDeck.length) {
			if (state.gameStage === "thirdStage") this.setDeck("over")
			else this.setDeck("next")
		}

		this.renderStageInfo()
		this.renderLabel()
		this.renderTable()
	}

	renderLabel() {
		let stage = 1
		if (state.gameStage === "secondStage") stage = 2
		if (state.gameStage === "thirdStage") stage = 3

		id(".game__label").html(`GAME STAGE ${stage}`)
	}

	async renderTable() {
		const table = id(".game__table")

		if (state.currentCard === null) {
			if (this.tosser !== "over") table.clear()
			return
		}

		const card = document.createElement("div")
		card.classList.add("card", "game__card")

		const img = new Image()
		img.src = state.currentCard.cardFace

		card.append(img)

		await table.append(card)
		await delay(0)

		card.classList.add("card-active")
	}

	setDeck(status) {
		this.tosser = status
		const deck = id(".deck")

		let html = this.deckContent
		if (status === "next") html = "<b>NEXT STAGE</b>"
		if (status === "over") html = "<b>THE GAME IS OVER</b>"

		if (!this.deckContent) this.deckContent = deck.innerHTML

		deck.html(html)
	}

	renderStageInfo() {
		const count = (color) =>
			state.subDeck.filter((card) => card.color === color).length

		id(".green_status").html(count("green"))
		id(".brown_status").html(count("brown"))
		id(".blue_status").html(count("blue"))
	}
}
