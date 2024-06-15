import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareGithub,faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faSquareEnvelope } from '@fortawesome/free-solid-svg-icons'

export default function Footer() {
  return (
    <div className='w-full content-wrapper mt-32 pt-32'>
        <div className='mid-divider w-2/6 mt-8'></div>
        <div className=' flex justify-around flex-row items-center w-1/2 text-white mt-16 mb-16'>
            <FontAwesomeIcon icon={faSquareGithub} size='2x'/>
            <FontAwesomeIcon icon={faLinkedin} size='2x'/>
            <FontAwesomeIcon icon={faSquareEnvelope} size='2x'/>
        </div>
    </div>
  )
}
