import { Element } from 'react-scroll'


export default function TextSection({ title = '', text }) {

    return (
        <Element id={title} className='text-white md:pl-16 md:pr-16 pl-7 pr-7 lg:w-3/4 mt-16 mb-16 content-wrapper text-sm' >
            {(title === '') ?
                <h1 className='text-3xl mb-12'>{title}</h1> :
                ''
            }
            <p className=' indent-8 text-xl'>{text}</p>
        </Element>
    )
}
