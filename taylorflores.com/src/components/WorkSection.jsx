import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub'
import { faLink } from '@fortawesome/free-solid-svg-icons/faLink'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function WorkSection({
    img = './../../public/site-test2.png',
    title = 'testing testing testing',
    description = 'this is the - i mean the - when i - when your mom',
    timeWorkedOn = '(2018-2019)',
    toolsUsed = [],
    codeLink = '',
    siteLink = ''
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
        <div className='border-2 border-solid rounded-xl  pl-8 pr-8 pb-4 mt-8 mb-8 flex flex-col justify-start items-center w-3/4 text-white h-[250px]'>
            <h3 className='text-2xl mt-4 mb-4'>{title}</h3>
            <div className='flex flex-row justify-between w-full'>
                <img src={img} className='max-w-1/4 w-1/4 rounded-xl' />

                <div className='flex flex-col items-start justify-around -ml-8 w-1/2 max-w-1/2'>
                    <span className='text-md'>{description}</span>
                    <span className='text-lg'>{timeWorkedOn}</span>

                </div>
                <div className='max-w-1/6 w-1/6 min-h-full flex flex-col justify-around items-center '>
                    {
                        (codeLink === '') ?
                            <></> :
                            <a className=' pt-1 pb-1 w-full border-solid border-[1px] rounded-md text-center border-[#565656] text-[#999999] mb-2' href={codeLink}>
                                <FontAwesomeIcon icon={faGithub} className='mr-3 text-sm' />
                                view code
                            </a>
                    }
                    <a className=' pt-1 pb-1 w-full border-solid border-[1px] rounded-md text-center border-[#565656] text-[#999999]' href={siteLink}>
                        <FontAwesomeIcon icon={faLink} className='mr-3 text-md' />
                        view site
                    </a>
                </div>
            </div>
            <div className='flex flex-row justify-between items-center w-full'>
                <div className='w-1/4 min-w-1/4'>

                </div>

                <ul className='flex flex-row flex-wrap mt-4 justify-start items-center w-1/2 min-w-1/2 -ml-8'>
                    {
                        toolElements
                    }
                </ul>
                <div className='w-1/6 min-w-1/6'>

                </div>
            </div>

        </div>
    )
}
