import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub'
import { faLink } from '@fortawesome/free-solid-svg-icons/faLink'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function WorkSection({
    img,
    title,
    description,
    timeWorkedOn,
    toolsUsed,
    codeLink,
    siteLink
}) {

    const toolElements = toolsUsed.map((el, i) =>
        <li
            className=' border-[#999999] border-solid border-[1px] text-[#999999] rounded-full contain-content pl-5 pr-5 ml-[1px] mr-[1px]'
            key={`${title}-${i}`}
        >
            {el}
        </li>
    )
    return (
        <div className='border-2 border-solid rounded-xl  pl-8 pr-8 pb-4 md:mt-8 md:mb-8 flex flex-col justify-start items-center md:w-3/4 w-5/6  text-white '>

            {/* title */}
            <h3 className='text-2xl mt-4 mb-4 text-center'>{title}</h3>

            {/* internal container*/}
            <div className='flex md:flex-row flex-col flex-wrap justify-between w-full'>

                {/* image container */}
                <div className='xl:max-w-1/4 xl:w-1/4 md:w-1/2 w-full h-fit flex flex-row justify-center'>
                    <img src={img} className=' rounded-xl xl:w-full w-4/5' />

                </div>

                {/* description, time worked on */}
                <div className='flex flex-col items-start justify-around max-sm:items-center md:-ml-8 md:w-1/2 w-full max-w-1/2 md:mt-0 mt-8'>
                    <span className='text-md max-sm:text-center'>{description}</span>
                    <span className='text-lg max-sm:text-center max-sm:mt-4'>{timeWorkedOn}</span>

                </div>
                {/* Code and site buttons */}
                <div className='xl:max-w-1/6 xl:w-1/6 min-h-full flex xl:flex-col flex-row lg:justify-around md:justify-between justify-around items-center md:w-1/2 w-full xl:pl-0 xl:pr-0 pl-5 pr-5 xl:mt-0 md:mt-4 mt-8'>
                    {
                        (codeLink === '') ?
                            <></> :
                            <a className=' pt-1 pb-1 xl:w-full lg:w-2/5 w-5/12 border-solid border-[1px] rounded-md text-center border-[#565656] text-[#999999] xl:mb-2' href={codeLink} target='_blank'>
                                <FontAwesomeIcon icon={faGithub} className='mr-3 text-sm' />
                                view code
                            </a>
                    }
                    <a className=' pt-1 pb-1 xl:w-full lg:w-2/5 w-5/12 border-solid border-[1px] rounded-md text-center border-[#565656] text-[#999999]' href={siteLink} target='_blank'>
                        <FontAwesomeIcon icon={faLink} className='mr-3 text-md' />
                        view site
                    </a>
                </div>
                <div className='xl:w-1/4 xl:min-w-1/4 w-0'>

                </div>

                <ul className='flex flex-row flex-wrap md:mt-4 xl:justify-start justify-center items-center xl:w-1/2 xl:min-w-1/2  xl:-ml-8 md:w-1/2 w-full mt-8'>
                    {
                        toolElements
                    }
                </ul>
                <div className='xl:w-1/6 xl:min-w-1/6 w-0'>

                </div>
            </div>


        </div>
    )
}
