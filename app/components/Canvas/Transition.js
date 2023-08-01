import { Mesh, Plane, Program} from 'ogl'
import GSAP from 'gsap'
import vertex from 'shaders/plane-vertex.glsl'
import fragment from 'shaders/plane-fragment.glsl'

export default class {
    constructor ({ collections, gl, scene, sizes, url }) {
        this.collections = collections
        this.gl = gl
        this.scene = scene
        this.sizes = sizes
        this.url = url

        this.geometry = new Plane(this.gl)
    }
    
    createProgram (texture) {
        this.program = new Program(this.gl, {
            fragment,
            vertex,
            uniforms: {
                uAlpha: { value: 1 },
                tMap: { texture }
            }
        })
    }

    createMesh (mesh) {
        this.mesh = new Mesh(this.gl, {
            program: this.program,
            geometry: this.geometry
        })

        this.mesh.scale.x = mesh.scale.x
        this.mesh.scale.y = mesh.scale.y
        this.mesh.scale.z = mesh.scale.z

        this.mesh.position.x = mesh.position.x
        this.mesh.position.y = mesh.position.y
        this.mesh.position.z = mesh.position.z + 0.01
        
        this.mesh.setParent(this.scene)
    }
    

    // Element

    setElement (element) {
        console.log(element.id)

        if (element.id === 'collections') {
            const { index, medias } = element
            const media = medias[index]

            console.log(media)

            this.createProgram(media.texture)
            this.createMesh(media.mesh)
        } else {
            this.createProgram(element.texture)
            this.createMesh(element)
        }
    }


    // Animations

    animate (element, onComplete, flag) {
        if(this.transition === 'detail') {
            GSAP.to(this.mesh.scale, {
                duration: 1.5,
                ease: 'expo.inOut',
                x: element.mesh.scale.x,
                y: element.mesh.scale.y,
                z: element.mesh.scale.z
            })
            
            GSAP.to(this.mesh.position, {
                duration: 1.5,
                ease: 'expo.inOut',
                onComplete,
                x: element.mesh.position.x,
                y: element.mesh.position.y,
                z: element.mesh.position.z
            })
        }
    }
}