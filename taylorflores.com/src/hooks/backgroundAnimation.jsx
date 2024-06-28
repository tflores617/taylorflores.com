
import { useEffect } from "react";
import './../styles/animation.css'
export default function useBackgroundAnimation() {
    useEffect(() => {

        //the array to store the particles so they can be modified later
        let particleArray = []

        //page location used in contrast to new page positions to calculate particle movement
        let pagePosition = 0

        //Particle object class
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

            //moves the particle with the z location in consideration
            scroll(distance) {
                let movementDistance = this.factorInZ(distance)
                this.position.y -= movementDistance
                this.el.style.top = `${this.position.y}px`
            }

            //resets the position of the particle to its original location
            reset() {
                this.position = {
                    ...this.position,
                    y: this.originalPosition.y,
                }
                this.el.style.top = `${this.position.y}px`
            }

            //arbitrary calculation that modifies the input  based upon the particle's z location 
            factorInZ(input) {
                let zFactor = 30 / this.position.z
                return Math.floor(input * zFactor)
            }

            //generates the particle's html element
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

        //places the particle elements and sets the page scroll listeners
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

        //start function runs on window load
        addEventListener('load', () => {
            start();
        });

    });
}

