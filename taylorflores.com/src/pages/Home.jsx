import SectionHeader from '../components/SectionHeader'
import TextSection from '../components/TextSection'
import about from '../content/about'
import { Link } from 'react-router-dom'

export default function Home() {
    return (<>
        <SectionHeader>Welcome to my Site!</SectionHeader>
        <TextSection text={about.text}></TextSection>

        <div id="checkOutSection" className='w-3/4 flex flex-row justify-around items-center mt-6 mb-6'>
           
            <Link
                to="work"
                className='hover:cursor-pointer rounded-lg h-72 w-[35%] border-white border-solid border-[1px] flex flex-col items-center pt-12 justify-around pb-12'
            >
                <img className='w-1/3' src="code.png"></img>
                <p className='text-white text-3xl'>My Work </p>
            </Link>
            <Link
                to="about"
                className='hover:cursor-pointer rounded-lg h-72 w-[35%] border-white border-solid border-[1px] flex flex-col items-center pt-12 justify-around pb-12'
            >
                <img className='w-1/3' src="about.png"></img>
                <p className='text-white text-3xl'>About Me</p>
            </Link>

        </div>
    </>
    )
}
