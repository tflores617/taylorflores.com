import { Link } from "react-scroll"
import './../styles/nav.css'

export default function Nav() {
  return (
    <div className='nav'>
        <div className=' w-full md:ml-8 xl:w-13 xl:text-4xl xl:pl-32 text-white md:text-3xl text-2xl max-md:mt-2 max-md:mb-2 max-md:text-center md:w-1/2 w-2/3'> TAYLOR FLORES</div>
        <div className='2xl:w-1/3 md:w-1/2 w-full md:flex xl:mr-32 md:mr-16 justify-around items-center text-white text-xl hidden'>
            <Link
                    to="EXPERIENCE"
                    spy={true}
                    smooth={true}
                    duration={1000}
                    className='hover:cursor-pointer'
                    activeClass=''
            >
                EXPERIENCE
            </Link>
            <Link
                    to="wrapper"
                    spy={true}
                    smooth={true}
                    duration={1000}
                    className='hover:cursor-pointer'
                    activeClass=''
            >
                ABOUT ME
            </Link>
            <Link
                    to="EXPERIENCE"
                    spy={true}
                    smooth={true}
                    duration={1000}
                    className='hover:cursor-pointer'
                    activeClass=''
            >
                CONTACT
            </Link>
            <div className='md:hidden'></div>
        </div>
    </div>
  )
}
