import Animation from 'classes/Animation';
import GSAP from 'gsap'

export default class Highlight extends Animation {
    constructor ({ element, elements}) {
        super({
            element,
            elements
        })
    }

    animateIn () {
        GSAP.fromTo(this.element, {
            autoAlpha: 0,
            delay: 0.5
        }, {
            autoAlpha: 1,
            duration: 1
        })
    }

    animateOut () {
        GSAP.set(this.element, {
            autoAlpha: 0
        })
    }
}