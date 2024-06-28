import { useState } from 'react'
import Nav from './components/Nav'
import Content from './components/Content'
import Banner from './components/Banner'
import './index.css'
import { Route, Routes } from 'react-router-dom'
import useBackgroundAnimation from './hooks/backgroundAnimation'
function App() {
    const animation = useBackgroundAnimation();
    const [mobileNavIsOpen, changeMobileNavStatus] = useState(false)
    const toggleMobileNav = () => {
        if (mobileNavIsOpen) {
            changeMobileNavStatus(false)
        } else {
            changeMobileNavStatus(true)
        }
    }
    return (
        <div className='w-full flex flex-col items-center justify-start'>
            <Nav toggleMobileNav={toggleMobileNav} mobileNavIsOpen={mobileNavIsOpen}/>
            <Routes>
                <Route path='/'>
                    <Route index element={
                        <>
                            <Banner mobileNavIsOpen={mobileNavIsOpen}/>
                            <Content mobileNavIsOpen={mobileNavIsOpen}  />
                        </>
                    }></Route>
                    <Route path='contact' element={
                        <Content />
                    }>
                    </Route>
                </Route>
            </Routes>
        </div>
    )
}

export default App
