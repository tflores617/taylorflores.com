import { Link } from "react-scroll"
import './../styles/nav.css'
import { useState } from "react"

export default function Nav() {
    const [mobileNavIsOpen, changeMobileNavStatus] = useState(false)
    const toggleMobileNav = ()=>{
        console.log(mobileNavIsOpen)
        if (mobileNavIsOpen) {
            changeMobileNavStatus(false)
        } else {
            changeMobileNavStatus(true)
        }
    }
    let mobileNavStyling = "md:hidden flex transition-all duration-700 z-30 flex-col flex-wrap overflow-hidden mt-16" //!add transition styling
    if (mobileNavIsOpen) {
        mobileNavStyling += ' w-3/4 '
    } else {
        mobileNavStyling += ' w-0'
    }
  return (
    <>
        <div className='nav'>
            <div className={`md:ml-8 xl:w-13 xl:text-4xl xl:pl-32 text-white md:text-3xl text-2xl max-md:mt-2 max-md:mb-2 max-md:text-center md:w-1/2  background transition-all duration-200 ${(mobileNavIsOpen)? 'w-0 overflow-hidden opacity-0 delay-200' : 'opacity-100 w-2/3'}`}> TAYLOR FLORES</div>
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
                        className='hover:cursor-pointer overflow-hidden'
                        activeClass=''
                        >
                    CONTACT
                </Link>
            </div>
            <div className={`md:hidden flex flex-row h-full duration-700 transition-all ${(mobileNavIsOpen)?'w-3/4 justify-start':' w-auto mr-4 justify-end'}`}>
                <button 
                    className={`md:hidden flex flex-col justify-around  h-[32px] w-[32px] transition-all duration-700 ${(mobileNavIsOpen)?'':''}`} 
                    onClick={toggleMobileNav}
                    >
                    <span className={`block h-1 w-full radius-sm bg-white`}></span>
                    <span className={`block h-1 w-3/4 radius-sm bg-white transition-all duration-700 ${(mobileNavIsOpen)? ' ml-0 mr-2':'ml-2 mr-0'}`}></span>
                    <span className={`block h-1 w-full radius-sm bg-white`}></span>
                </button>
            </div>
        </div>
        <div id="navMenu" className={mobileNavStyling }>
        <Link
                        to="EXPERIENCE"
                        spy={true}
                        smooth={true}
                        duration={1000}
                        className='rounded-sm hover:cursor-pointer hover:bg-white hover:text-[#343434] hover:transition-colors h-12 flex justify-start pl-12'
                        activeClass=''
                        >
                    <span className="">EXPERIENCE</span>
                    
                </Link>
                <Link
                        to="wrapper"
                        spy={true}
                        smooth={true}
                        duration={1000}
                        className='rounded-sm hover:cursor-pointer hover:bg-white hover:text-[#343434] hover:transition-colors h-12 flex justify-start pl-12'
                        activeClass=''
                        >
                    <span className="">ABOUT ME</span>
                </Link>
                <Link
                        to="EXPERIENCE"
                        spy={true}
                        smooth={true}
                        duration={1000}
                        className='rounded-sm hover:cursor-pointer hover:bg-white hover:text-[#343434] hover:transition-colors h-12 flex justify-start pl-12'
                        activeClass=''
                        >
                    <span className="">CONTACT</span>
                    
                </Link>
        </div>
    </>
  )
}
