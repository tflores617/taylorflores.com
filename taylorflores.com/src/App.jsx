import Nav from './components/Nav'
import Content from './components/Content'
import Banner from './components/Banner'
import './index.css'
import { Route, Routes } from 'react-router-dom'
function App() {

  return (
    <div className='w-full flex flex-col items-center justify-start'>
     <Nav/>
     <Routes>
        <Route path='/'>
            <Route index element={
                <>
                    <Banner/>
                    <Content/>
                </>
            }></Route>
            <Route path='contact' element={
                <Content/>
            }>
            </Route>
        </Route>
     </Routes>
    </div>
  )
}

export default App
