// ID , show , style, rect //
export function id(selector) {
	const elem = document.querySelectorAll(selector)

	for (let i = 0; i < elem.length; i++) {
		const el = elem[i]

		el.css = (s) => {
			if (s) el.setAttribute("style", s)
			else el.removeAttribute("style")
			return el
		}
		el.html = (h) => {
			el.innerHTML = h
				.toString()
				.replace(/[\r\n]/g, "")
				.replace(/\s\s+/g, " ")
			return el
		}
		el.clear = () => {
			while (el.firstChild) el.removeChild(el.firstChild)
			return el
		}
		el.setVal = (v) => {
			el.value = v
		}

		el.getVal = () => {
			return el.value
		}
		el.getEVal = () => {
			return encodeURIComponent(el.value)
		}
		el.getOffsetRect = (_relative) => {
			const box = el.getBoundingClientRect()
			const body = document.body
			const docElem = document.documentElement

			const scrollTop =
				window.pageYOffset || docElem.scrollTop || body.scrollTop
			const scrollLeft =
				window.pageXOffset || docElem.scrollLeft || body.scrollLeft

			const clientTop = docElem.clientTop || body.clientTop || 0
			const clientLeft = docElem.clientLeft || body.clientLeft || 0

			let parentTop = 0
			let parentLeft = 0

			if (_relative) {
				const pBox = el.parentNode.getBoundingClientRect()
				parentTop = pBox.top
				parentLeft = pBox.left
			}

			const top = box.top + scrollTop - clientTop - parentTop
			const left = box.left + scrollLeft - clientLeft - parentLeft

			return {
				t: Math.round(top),
				l: Math.round(left),
				w: Math.round(box.right - box.left),
				h: Math.round(box.bottom - box.top)
			}
		}
	}

	return elem.length === 1 ? elem[0] : elem
}
// ID , show , style, rect //

// async delay //
export const delay = (ms) => new Promise((r) => setTimeout(() => r(), ms))
// async delay //

// EVENTS //
export function addEvent(elem, event, func) {
	const params = { passive: true }
	const callback =
		elem === document.body && event === "click"
			? (e) => {
					func(e)
			  }
			: (e) => {
					e.cancelBubble = true
					func(e)
			  }

	elem.removeEventListener(event, func, false)
	elem.addEventListener(event, callback, params)
}

export function isClickedOn(e, item_class) {
	const elemIsItem = e.target.classList.contains(item_class)
	const elemParentIsItem = e.target.closest(`.${item_class}`)

	return elemIsItem || elemParentIsItem
}
// EVENTS //

// DEFINE MBILE //
export let isMobile = false
const defineMobile = () => {
	isMobile = window.matchMedia("screen and (max-width: 700px)").matches
}
addEvent(document, "DOMContentLoaded", () => defineMobile())
// DEFINE MBILE //
