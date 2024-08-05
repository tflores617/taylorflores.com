import SectionHeader from '../components/SectionHeader'
import TextSection from '../components/TextSection'
import about from '../content/about'
import { Link } from 'react-router-dom'
import { animateScroll } from 'react-scroll'

export default function Home() {
    return (<>
        <SectionHeader>Welcome to my Site!</SectionHeader>
        <TextSection text={about.text}></TextSection>

        <div id="checkOutSection" className='md:pl-16 md:pr-16 pl-7 pr-7 lg:w-3/4 flex flex-row flex-wrap justify-around items-center mt-6 mb-6 md:h-auto h-72 w-full'>

            <Link
                to="work"
                className='hover:cursor-pointer rounded-lg md:h-72 h-20 md:w-[35%] w-3/4 border-white border-solid border-[1px] flex md:flex-col flex-row  items-center md:pt-12 justify-around md:pb-12'
                onClick={() => { animateScroll.scrollToTop({ duration: 1000, smooth: true }) }}
            >
                <img className='md:w-1/3 md:h-auto h-5/6 w-auto' src="code.png"></img>
                <p className='text-white md:text-3xl text-2xl'>My Work </p>
            </Link>
            <Link
                to="about"
                className='hover:cursor-pointer rounded-lg md:h-72 h-20 md:w-[35%] w-3/4 border-white border-solid border-[1px] flex md:flex-col flex-row  items-center md:pt-12 justify-around md:pb-12'
                onClick={() => { animateScroll.scrollToTop({ duration: 1000, smooth: true }) }}
            >
                <img className='md:w-1/3 md:h-auto h-5/6 w-auto' src="about.png"></img>
                <p className='text-white md:text-3xl text-2xl'>About Me</p>
            </Link>

        </div>
    </>
    )
}
