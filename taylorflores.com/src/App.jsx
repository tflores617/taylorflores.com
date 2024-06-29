import { useState } from 'react'
import Nav from './components/Nav'
import Banner from './components/Banner'
import './styles/index.css'
import { Route, Routes } from 'react-router-dom'
import useBackgroundAnimation from './hooks/backgroundAnimation'
import Wrapper from './components/Wrapper'
import Contact from './pages/Contact'
import Work from './pages/Work'
import About from './pages/About'
import Home from './pages/Home'
import VerticalSpacer from './components/VerticalSpacer'


function App() {

    useBackgroundAnimation();
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
            <Nav toggleMobileNav={toggleMobileNav} mobileNavIsOpen={mobileNavIsOpen} />


            <Routes>
                <Route path='/'>

                    <Route index element={
                        <>
                            <Banner mobileNavIsOpen={mobileNavIsOpen} />
                            <Wrapper>
                                <Home />
                            </Wrapper>
                        </>
                    }></Route>

                    <Route path='contact' element={
                        <>
                            <VerticalSpacer />
                            <Wrapper>
                                <Contact />
                            </Wrapper>
                        </>
                    }>
                    </Route>

                    <Route path='work' element={
                        <>
                            <VerticalSpacer />
                            <Wrapper>
                                <Work />
                            </Wrapper>
                        </>
                    }>
                    </Route>

                    <Route path='about' element={
                        <>
                            <VerticalSpacer />
                            <Wrapper>
                                <About />
                            </Wrapper>
                        </>
                    }>
                    </Route>
                </Route>
            </Routes>
        </div>
    )
}

export default App
