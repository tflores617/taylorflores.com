import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareGithub,faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faSquareEnvelope } from '@fortawesome/free-solid-svg-icons'
import { Element } from 'react-scroll'

export default function Footer() {
  return (
    <Element id='footer' className='w-full content-wrapper mt-32 pt-32'>
        <div className='mid-divider w-2/6 mt-8'></div>
        <div className=' flex justify-around flex-row items-center w-1/2 text-white mt-16 mb-16'>
            <a href="https://www.linkedin.com/in/taylor-flores-/">
                <FontAwesomeIcon icon={faLinkedin} size='2x'/>

            </a>
            <a href="https://github.com/tflores617">
                <FontAwesomeIcon icon={faSquareGithub} size='2x'/>
            </a>
            <a href="mailto:contact@taylorflores.com">
                <FontAwesomeIcon icon={faSquareEnvelope} size='2x'/>
            </a>
        </div>
    </Element>
  )
}
