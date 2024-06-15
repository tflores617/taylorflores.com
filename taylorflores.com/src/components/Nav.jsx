import { useRef } from "react"

export default function Nav({aboutRef, experienceRef, contactRef}) {
  return (
    <div className='nav flex justify-between items-center min-h-16 backdrop-blur-sm w-full sticky top-0 z-20'>
        <div className='w-13 text-4xl pl-32 text-white'> TAYLOR FLORES</div>
        <div className='w-1/3 flex mr-32 justify-around items-center text-white text-xl'>
            <a >EXPERIENCE</a>
            <a >CONTACT</a>
            <a >ABOUT ME</a>
        </div>
    </div>
  )
}
