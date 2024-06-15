import { Link } from 'react-scroll'
import './../styles/banner.css'
// const ScrollLink = Scroll.ScrollLink
export default function Banner() {
    return (
        <div className='banner w-full pb-40 flex flex-col-reverse justify-start items-center'>
            <Link
                to="wrapper"
                spy={true}
                smooth={true}
                duration={1000}
                className=' w-96 h-20 flex prl-16 justify-center items center hover:cursor-pointer'
                activeClass=''
            >
                <div className='h-16 w-16 rotate-45 border-b-2 border-r-2'></div>
            </Link>
        </div>
    )
}
