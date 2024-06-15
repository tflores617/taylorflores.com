import React from 'react'
import './../styles/banner.css'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export default function Banner() {
  return (
        <div className='banner w-full pb-40 flex flex-col-reverse justify-start items-center'>
            <button id='bannerButton' className=' w-96 h-20 flex prl-16 justify-center items center'>
                <div className='h-16 w-16 rotate-45 border-b-2 border-r-2'>
                </div>
            </button>
        </div>
  )
}
