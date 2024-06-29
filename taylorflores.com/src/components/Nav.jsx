import { Link, useNavigate } from 'react-router-dom'
import './../styles/nav.css'
import { useState } from "react"

export default function Nav({ toggleMobileNav, mobileNavIsOpen }) {
    const navigate = useNavigate();
    let mobileNavStyling = "md:hidden flex transition-all duration-700 z-30 flex-col flex-wrap overflow-hidden mt-16 pt-8 border-t-2 border-white border-solid backdrop-blur-md" //!add transition styling
    if (mobileNavIsOpen) {
        mobileNavStyling += ' w-3/4 '
    } else {
        mobileNavStyling += ' w-0'
    }
    return (
        <>
            <div className='nav'>
                <h1
                    className={`md:ml-8 xl:w-13 xl:text-4xl xl:pl-32 text-white md:text-3xl text-3xl max-md:mt-2 max-md:mb-2 max-md:text-center md:w-1/2  background transition-all hover:cursor-pointer duration-700 ${(mobileNavIsOpen) ? 'w-0 overflow-hidden opacity-0' : 'opacity-100 w-2/3'}`}
                    onClick={() => { navigate('/') }}
                > TAYLOR FLORES</h1>
                <div className='2xl:w-1/3 md:w-1/2 w-full md:flex xl:mr-32 md:mr-16 justify-around items-center text-white text-2xl hidden'>
                    <Link
                        to="work"
                        className='hover:cursor-pointer'
                        activeClass=''
                    >
                        WORK
                    </Link>
                    <Link
                        to="/about"
                        className='hover:cursor-pointer'
                        activeClass=''
                    >
                        ABOUT
                    </Link>

                    <Link
                        to="contact"
                        className='hover:cursor-pointer overflow-hidden'
                        activeClass=''
                    >
                        CONTACT
                    </Link>
                    <Link
                        to="/"
                        className='hover:cursor-pointer overflow-hidden'
                        activeClass=''
                    >
                        HOME
                    </Link>
                </div>
                <div className={`md:hidden h-full duration-700 transition-all ${(mobileNavIsOpen) ? 'w-3/4 pb-4' : ' w-[64px] mr-4'}`}>
                    <button
                        className={`md:hidden flex flex-col justify-around  h-[32px] w-[32px] transition-all duration-700 ${(mobileNavIsOpen) ? 'float-left' : 'float-right'}`}
                        onClick={toggleMobileNav}
                    >
                        <span className={`block h-1 w-full radius-sm bg-white`}></span>
                        <span className={`block h-1 w-3/4 radius-sm bg-white transition-all duration-700 ${(mobileNavIsOpen) ? ' ml-0 mr-2' : 'ml-2 mr-0'}`}></span>
                        <span className={`block h-1 w-full radius-sm bg-white`}></span>
                    </button>
                </div>
            </div>
            <div id="navMenu" className={mobileNavStyling}>
                <Link
                    to="work"
                    className='rounded-sm hover:cursor-pointer hover:bg-white hover:text-[#343434] hover:transition-all hover:underline h-16 flex justify-start pl-12 text-xl text-white'
                    activeClass=''
                    onClick={toggleMobileNav}
                >
                    <span className="content-wrapper">MY WORK</span>

                </Link>
                <Link
                    to="about"
                    className='rounded-sm hover:cursor-pointer hover:bg-white hover:text-[#343434] hover:transition-all hover:underline h-16 flex justify-start pl-12 text-xl text-white'
                    activeClass=''
                    onClick={toggleMobileNav}
                >
                    <span className="content-wrapper">ABOUT ME</span>
                </Link>
                <Link
                    to="contact"
                    className='rounded-sm hover:cursor-pointer hover:bg-white hover:text-[#343434] hover:transition-all hover:underline h-16 flex justify-start pl-12 text-xl text-white'
                    activeClass=''
                    onClick={toggleMobileNav}
                >
                    <span className="content-wrapper">CONTACT ME</span>
                </Link>
                <Link
                    to="/"
                    className='rounded-sm hover:cursor-pointer hover:bg-white hover:text-[#343434] hover:transition-all hover:underline h-16 flex justify-start pl-12 text-xl text-white'
                    activeClass='' onClick={toggleMobileNav}
                >
                    <span className="content-wrapper">HOME</span>

                </Link>
            </div>
            <div className={`h-screen fixed bg-[#343434]  r-0 w-full transition-all duration-700 ${(mobileNavIsOpen) ? 'opacity-50 block' : 'opacity-0 z-0'}`}>

            </div>
        </>
    )
}
