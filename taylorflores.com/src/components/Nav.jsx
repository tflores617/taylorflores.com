import { Link } from "react-scroll"
import './../styles/nav.css'
import { useState } from "react"

export default function Nav({toggleMobileNav, mobileNavIsOpen}) {
    let mobileNavStyling = "md:hidden flex transition-all duration-700 z-30 flex-col flex-wrap overflow-hidden mt-16 pt-8 border-t-2 border-white border-solid backdrop-blur-md" //!add transition styling
    if (mobileNavIsOpen) {
        mobileNavStyling += ' w-3/4 '
    } else {
        mobileNavStyling += ' w-0'
    }
  return (
    <>
        <div className='nav'>
            <div className={`md:ml-8 xl:w-13 xl:text-4xl xl:pl-32 text-white md:text-3xl text-3xl max-md:mt-2 max-md:mb-2 max-md:text-center md:w-1/2  background transition-all duration-700 ${(mobileNavIsOpen)? 'w-0 overflow-hidden opacity-0' : 'opacity-100 w-2/3'}`}> TAYLOR FLORES</div>
            <div className='2xl:w-1/3 md:w-1/2 w-full md:flex xl:mr-32 md:mr-16 justify-around items-center text-white text-2xl hidden'>
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
            <div className={`md:hidden h-full duration-700 transition-all ${(mobileNavIsOpen)?'w-3/4 pb-4':' w-[64px] mr-4'}`}>
                <button 
                    className={`md:hidden flex flex-col justify-around  h-[32px] w-[32px] transition-all duration-700 ${(mobileNavIsOpen)?'float-left':'float-right'}`} 
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
                        duration={1200}
                        offset={-100}
                        className='rounded-sm hover:cursor-pointer hover:bg-white hover:text-[#343434] hover:transition-all hover:underline h-16 flex justify-start pl-12 text-xl text-white'
                        activeClass=''
                        onClick={toggleMobileNav}
                        >
                    <span className="content-wrapper">EXPERIENCE</span>
                    
                </Link>
                <Link
                        to="wrapper"
                        spy={true}
                        smooth={true}
                        duration={1200}
                        className='rounded-sm hover:cursor-pointer hover:bg-white hover:text-[#343434] hover:transition-all hover:underline h-16 flex justify-start pl-12 text-xl text-white'
                        activeClass=''
                        onClick={toggleMobileNav}
                        >
                    <span className="content-wrapper">ABOUT ME</span>
                </Link>
                <Link
                        to="footer"
                        spy={true}
                        smooth={true}
                        duration={1200}
                        offset={-600}
                        className='rounded-sm hover:cursor-pointer hover:bg-white hover:text-[#343434] hover:transition-all hover:underline h-16 flex justify-start pl-12 text-xl text-white'
                        activeClass=''                        onClick={toggleMobileNav}
                        >
                    <span className="content-wrapper">CONTACT</span>
                    
                </Link>
        </div>
        <div className={`h-screen fixed bg-[#343434]  r-0 w-full transition-all duration-700 ${(mobileNavIsOpen) ? 'opacity-50 block':'opacity-0 z-0'}`}>

        </div>
    </>
  )
}
