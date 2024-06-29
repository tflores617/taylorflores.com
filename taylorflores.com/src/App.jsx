import { useState } from 'react'
import Nav from './components/Nav'
import Content from './pages/Content'
import Banner from './components/Banner'
import './index.css'
import { Route, Routes } from 'react-router-dom'
import useBackgroundAnimation from './hooks/backgroundAnimation'
import Wrapper from './components/Wrapper'
import Contact from './pages/Contact'
import Work from './pages/Work'
import About from './pages/About'
import Home from './pages/Home'
import TopSpacer from './components/TopSpacer'


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

            <Wrapper>

                <Routes>
                    <Route path='/'>

                        <Route index element={
                            <>
                                <Banner mobileNavIsOpen={mobileNavIsOpen} />
                                <Home />
                            </>
                        }></Route>

                        <Route path='contact' element={
                            <>
                                <TopSpacer />
                                <Contact />
                            </>
                        }>
                        </Route>

                        <Route path='work' element={
                            <>
                                <TopSpacer />
                                <Work />
                            </>
                        }>
                        </Route>

                        <Route path='about' element={
                            <>
                                <TopSpacer />
                                <About />
                            </>
                        }>
                        </Route>
                    </Route>
                </Routes>
            </Wrapper>
        </div>
    )
}

export default App
