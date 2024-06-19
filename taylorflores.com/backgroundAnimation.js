let particleArray = []
let pagePosition = 0
class Particle {
    constructor(width, height) {
        this.position = {
            x: Math.floor(Math.random() * (width - 10)) + 10,
            y: Math.floor(Math.random() * (height - 10)) + 10,
            z: Math.floor((Math.random() * width) / 2),
        }
        this.generateParticle(width, height)
        this.originalPosition = {
            x: this.position.x,
            y: this.position.y,
            z: this.position.z,
        }
    }
    scroll(distance) {
        /**
         *! detect scroll distance
         *! set position using factorInZ
         *! set this.el position using particle position
         */

        let movementDistance = this.factorInZ(distance)
        this.position.y -= movementDistance
        this.el.style.top = `${this.position.y}px`
    }
    reset() {
        this.position = {
            ...this.position,
            y: this.originalPosition.y,
        }
        this.el.style.top = `${this.position.y}px`
    }
    factorInZ(input) {
        let zFactor = 30 / this.position.z
        return Math.floor(input * zFactor)
    }
    generateParticle() {
        //create element
        this.el = document.createElement("div")
        //add its class
        this.el.classList.add("particle")

        //generate grey
        let colorRand = Math.floor(Math.random() * 156) + 100
        let rgb = colorRand.toString(16)
        let color = `#${rgb}${rgb}${rgb}`

        //generate opacity
        let opacityRand = Math.random() * 0.75
        let diameterRand = Math.floor(Math.random() * 11) + 5

        //style particle
        this.el.style.backgroundColor = color
        this.el.style.height = `${diameterRand}px`
        this.el.style.width = `${diameterRand}px`
        this.el.style.opacity = `${opacityRand}`

        //place particle
        this.el.style.top = `${this.position.y}px`
        this.el.style.left = `${this.position.x}px`
        //add particle to body
        document.body.appendChild(this.el)
        return this.el
    }
}

function start() {
    const bodyHeight = document.body.clientHeight
    const bodyWidth = document.body.clientWidth
    let area = bodyWidth * bodyHeight
    let amount = Math.floor(area / 20 ** 3)
    for (let i = 0; i < amount; i++) {
        particleArray.push(new Particle(bodyWidth, bodyHeight))
    }

    window.onscroll = () => {
        let newPos = (
            document.documentElement ||
            document.body.parentNode ||
            document.body
        ).scrollTop

        if (newPos === 0) {
            particleArray.forEach((p) => {
                p.reset()
            })
        } else {
            particleArray.forEach((p) => {
                p.scroll(newPos - pagePosition)
            })
        }
        pagePosition = newPos
    }

    window.onresize = () => {
        while (particleArray.length > 0) {
            particleArray.pop().el.remove()
        }
        start()
    }
}
