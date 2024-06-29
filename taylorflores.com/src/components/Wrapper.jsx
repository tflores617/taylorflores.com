import { Children } from 'react'
import { Element } from 'react-scroll'
import Footer from './Footer'
import './../styles/content.css'


export default function Wrapper({mobileNavIsOpen}) {

    return (
        <Element id="wrapper" className={`xl:w-3/4 w-full backdrop-blur-xl flex justify-normal flex-col items-center transition-all duration-700 pt-8 ${(mobileNavIsOpen) ? 'opacity-0' : 'opacity-100'}`}>
            {
                Children
            }
            <Footer />
        </Element>
    )
}
