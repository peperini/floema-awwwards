import { Transform } from 'ogl'

import map from 'lodash/map'
import GSAP from 'gsap'

import Media from './Media'

export default class Gallery {
    constructor ({ element, geometry, index, gl, scene, sizes }) {
        this.element = element
        this.elementWrapper = element.querySelector('.about__gallery__wrapper')

        this.geometry = geometry
        this.index = index
        this.gl = gl
        this.scene = scene
        this.sizes = sizes

        this.group = new Transform()

        this.scroll = {
            start: 0,
            current: 0,
            target: 0,
            lerp: 0.1
        }

        this.createMedias()

        this.group.setParent(this.scene)
    }

    createMedias () {
        this.mediasElements = this.element.querySelectorAll('.about__gallery__media')
        
        this.medias = map(this.mediasElements, (element, index) => {
            return new Media({
                element,
                geometry: this.geometry,
                index,
                gl: this.gl,
                scene: this.group,
                sizes: this.sizes
            })
        })
    }

    // Animations

    show () {
        map(this.medias, media => media.show())
    }

    hide () {
        map(this.medias, media => media.hide())

    }

    // Events

    onResize (event) {
        this.bounds = this.elementWrapper.getBoundingClientRect()

        this.sizes = event.sizes
        
        this.width = this.bounds.width / window.innerWidth * this.sizes.width

        this.scroll.current = this.scroll.target = 0

        map(this.medias, media => media.onResize(event, this.scroll.current))
    }

    onTouchDown ({ x, y }) {
        this.scroll.start = this.scroll.current
    }

    onTouchMove ({ x, y }) {
        const distance = x.start - x.end 

        this.scroll.target = this.scroll.start - distance 
    }

    onTouchUp ({ x, y }) {

    }


    // Update

    update () {
        if (!this.bounds) return

        if (this.scroll.current < this.scroll.target) {
            this.direction = 'right'
        } else if (this.scroll.current > this.scroll.target) {
            this.direction = 'left'
        }
        
        this.scroll.current = GSAP.utils.interpolate(this.scroll.current, this.scroll.target, this.scroll.lerp)

        map(this.medias, (media, index) => {
            const scaleX = media.mesh.scale.x / 2

            if (this.direction === 'left') {
                const x = media.mesh.position.x + scaleX

                if (x < -this.sizes.width / 2) {
                    media.extra += this.width
                }
            } else if (this.direction === 'right') {
                const x = media.mesh.position.x - scaleX

                if (x > this.sizes.width / 2) {
                    media.extra -= this.width
                }
            }
            
            media.update(this.scroll.current)

            // media.mesh.position.y = Math.cos((media.mesh.position.x / this.width) * Math.PI) * 1 - 1
        })
    }

    // Destroy

    destroy () {
        this.scene.removeChild(this.group)
    }
}