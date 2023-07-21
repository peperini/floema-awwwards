import Animation from 'classes/Animation';
import GSAP from 'gsap'
import { calculate, split } from 'utils/text'

export default class Title extends Animation {
    constructor ({ element, elements}) {
        super({
            element,
            elements
        })

        split({ element: this.element, append: true })
        split({ element: this.element, append: true })

        this.elementLinesSpans = this.element.querySelectorAll('span span')
    }

    animateIn () {
        GSAP.fromTo(this.element, {
            autoAlpha: 1,
            y: '100%'
        }, {
            autoAlpha: 1,
            delay: 0.5,
            duration: 1.5,
            stagger: 0.2,
            y: '0%' 
        })
    }

    animateOut () {
        GSAP.set(this.element, {
            autoAlpha: 0
        })
    }

    onResize () {
        this.elementLines = calculate(this.elementLinesSpans)
    }
}