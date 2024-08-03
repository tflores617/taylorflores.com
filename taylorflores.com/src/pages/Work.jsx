import WorkSection from '../components/WorkSection'
import professionalWork from '../content/professionalWork'
import personalWork from '../content/personalWork'
export default function Work() {
    const professionalComponents = professionalWork.map((project, i)=>{
        return <WorkSection {...project} key={`prof ${i}`}/>
    })
    const personalComponents = personalWork.map((project, i)=>{
        return <WorkSection {...project} key={`prof ${i}`}/>
    })
    return (
        <>
            <h1 className='text-3xl mb-12 text-white'>Professional Work</h1>
            {
                professionalComponents
            }
            <h1 className='text-3xl mb-12 mt-12 text-white'>Personal Work</h1>
            {
                personalComponents
            }
            <WorkSection/>
        </>
    )
}
