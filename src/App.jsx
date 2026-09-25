import React from 'react'
import Navbar from './components/navbar'
import Herosection from './components/herosection'
import Hero2 from './components/hero2'
import Hero3 from './components/hero3'
import Hero4 from './components/hero4'
import Footerbar from './components/footerbar'
import {Routes , Route, BrowserRouter } from 'react-router-dom'
import Aboutpage from './aboutpage'
import { Link } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>    
     <Routes>

<Route 
     path='/'
      element={
        <div>

      <Navbar/>
      <Herosection/>
      <Hero2/>
      <Hero3/>
      <Hero4/>
      <Footerbar/>
      
      </div>
}/>
 

       
       
        <Route 
        path='/aboutpage'
      element={
        <div>
          <Navbar/>
          <Aboutpage/>
          <Hero2/>
          <Hero4/>
          <Footerbar/>
        </div>
      }/>

      </Routes>
      </BrowserRouter>
  
  )
}

export default App