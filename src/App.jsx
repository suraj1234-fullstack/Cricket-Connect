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
import Howitwork from './components/howitwork'
import Team from './components/team'
import News from './components/news'
import Faq from './components/faq'
import Contact from './components/contact'

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

      <Route 
        path='/howitwork'
      element={
        <div>
          <Navbar/>
          <Howitwork/>
          <Footerbar/>
        </div>
      }/>

      <Route 
        path='/team'
      element={
        <div>
          <Navbar/>
          <Team/>
          <Footerbar/>
        </div>
      }/>

      <Route 
        path='/news'
      element={
        <div>
          <Navbar/>
          <News/>
          <Footerbar/>
        </div>
      }/>

      <Route 
        path='/faq'
      element={
        <div>
          <Navbar/>
          <Faq/>
          <Footerbar/>
        </div>
      }/>


      <Route 
        path='/contact'
      element={
        <div>
          <Navbar/>
          <Contact/>
          <Footerbar/>
        </div>
      }/>

      </Routes>
      </BrowserRouter>
  
  )
}

export default App