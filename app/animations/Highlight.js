import Animation from 'classes/Animation';
import GSAP from 'gsap'
import { calculate, split } from 'utils/text'
import each from 'lodash/each'

export default class Highlight extends Animation {
    constructor ({ element, elements}) {
        super({
            element,
            elements
        })
        
        this.elementLinesSpans = split({ 
            append: true,
            element: this.element
        })
    }

    animateIn () {
        this.timelineIn = GSAP.timeline({
            delay: 0.5
        })

        this.timelineIn.fromTo(this.element, {
            autoAlpha: 0,
            scale: 1.2
        }, {
            autoAlpha: 1,
            duration: 1.5,
            ease: 'expo.out',
            scale: 1
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