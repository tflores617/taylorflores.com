import { Link } from "react-scroll"


export default function Nav() {
  return (
    <div className='nav flex justify-between items-center min-h-16 backdrop-blur-sm w-full sticky top-0 z-20'>
        <div className='w-13 text-4xl pl-32 text-white'> TAYLOR FLORES</div>
        <div className='w-1/3 flex mr-32 justify-around items-center text-white text-xl'>
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
        </div>
    </div>
  )
}
