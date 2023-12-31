import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle"

import Home from './Components/Home'
import About from './Components/About'
import Services from './Components/Services'
import Contact from './Components/Contact'
import Navbar from './Components/Navbar'
import {Route, Routes} from 'react-router-dom'

function App() {

  return (
    <>
      {/* <Home/> */}

      <Navbar></Navbar>
      <Routes>
        <Route exact path='/' element={<Home/>} ></Route>
        <Route exact path='/home' element={<Home/>} ></Route>
        <Route exact path='/about' element={<About/>}></Route>
        <Route exact path='/services' element={<Services/>}></Route>
        <Route exact path='/contact' element={<Contact/>}></Route>
        {/* <Redirect to='/'/> */}
      </Routes>
    </>
  )
}

export default App
