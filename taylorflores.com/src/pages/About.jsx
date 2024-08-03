import SectionHeader from "../components/SectionHeader";
import TextSection from "../components/TextSection";
import about from "../content/about";
import experience from "../content/experience";

export default function About() {
    console.log({...experience})
    return (<>
        <TextSection {...about}></TextSection>
        <TextSection {...experience}></TextSection>
    </>
    )
}
/*
    About me
        -...
    Footer
*/
