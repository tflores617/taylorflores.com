import React from 'react'
import './../styles/content.css'
import Footer from './Footer'
let content = [
    {
        "title":"ABOUT ME",
        "text":"Hi, I’m Taylor! A native of the Springfield, MO area, I am currently finishing up my bachelor’s degree in Philosophy with a minor in Computer Science at Missouri State University and hope to have a long career in the software development industry. For fun I enjoy playing video games, making music, and watching movies with my friends!"
    },
    {
        "title":"EXPERIENCE",
        "text":"My first exposure to technology as a field of study and work was during my freshman year of high school and I wrote my first lines of code in my sophomore year. During my senior year I participated in the Tech strand of the GO CAPS (**Greater Ozarks Centers for Advanced Professional Studies**). This gave me the opportunity to work on a shuttle management prototype for Big Cedar Lodge of the Branson Area, a project later chosen to be the Technology strand’s representative project at the annual GO CAPS Capstone Showcase. My fellow team member and I then went on to co-found a business based around the continued development of the prototype. Following my graduation from high school, I began working as a Junior Web Developer for Cart32 and attending college. Currently, I am doing AI training for Data Annotations and contract web development work."
    }
]

export default function Content() {
    let formattedContent = content.map((section, index)=>{return (
        <>
            {/* {(index === 1)? <div className='section-divider w-2/6 mt-20 mb-20'></div> : ''} */}
            <section className='text-white pl-16 pr-16 w-3/4 mt-16 mb-16 content-wrapper' key={index}>
                <h1 className='text-3xl mb-12'>{section.title}</h1>
                <p className=' indent-8 text-xl'>{section.text}</p>
            </section>
        </>
    )})
  return (
    <div id='wrapper' className='w-3/4 backdrop-blur-xl flex justify-normal flex-col items-center pt-8'>
        {
            formattedContent
        }
    <Footer/>
    </div>
  )
}
