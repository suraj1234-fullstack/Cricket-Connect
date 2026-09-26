import React from 'react'
import {Routes , Route, BrowserRouter } from 'react-router-dom'
import { Link } from 'react-router-dom'

const aboutpage = () => {
  return (
    <>
    <div className='heros1' style={{marginTop:'10px'}}>

   

    <div className="txtbox12"style={{fontFamily:'serif',marginTop:'3%'}}>
      
        


       <p className='pfont124'  style={{fontSize:'3rem',fontWeight:'600'}}> <p  style={{fontSize:'0.7rem',color:'grey',fontWeight:'700'}}><i  style={{color:"#135ac5",fontSize:'0.7rem',textAlign:'center',  boxShadow:' 0 0 0 3px #1e6bff33 ', borderRadius:'50%'}} class="fa-solid fa-circle"></i>&nbsp; &nbsp;ABOUT CRICKET  CONNECT</p><span style={{fontFamily:'serif'}}>
        The intelligence layer for professional cricket.</span></p>

          
       <p  className='hpp123' style={{fontSize:'1.5vw',width:'50vw', padding:'2% 0%',color:'#d4d0d0'}}>Cricket Connect is an AI-native cricket intelligence platform. We exist to transform how cricket is understood, analysed, and decided — making decision-grade analysis explainable, trustworthy, and usable by the people who run the professional game, and by the fans who love it.</p>
       
    
    </div>



     <div className='hs1abts'  style={{display:'flex',alignItems:'center', justifyContent:'center',objectFit:'cover'}}>
      <video className='hs21abts'  style={{ filter: 'brightness(0.3) contrast()'}} src="heropagevdu.mp4" autoPlay loop muted playsInline />
    </div>
    </div>




    <div className='abts21' style={{alignItems:'center',justifyContent:'center',margin :' 0% 3% 0% 3%',width:'100%'}}>
      

        
      <div style={{fontSize:'1rem',width:'80%',fontWeight:'400',color:'#2e2d2d',border:'2px solid #f3ecec',padding:'5%',borderRadius:'7px'}}>
        <p style={{color:"#135ac5",fontWeight:'500'}}>OUR MISSION</p>
We believe cricket deserves deeper insight than headlines, gut feel, or opaque statistics. Cricket Connect connects data, context, and strategy — and turns it into intelligence that coaches, analysts, and franchises can act on. Built professional-first, the same engine now also reaches fans — through a companion that explains the game and a product that tests how well they read it. Our platform is already in active use across professional teams, leagues, and competitions.

      </div>
       <div style={{fontSize:'1rem',width:'80%',fontWeight:'400',color:'#2e2d2d',border:'2px solid #f3ecec',padding: '6.6% 5%',borderRadius:'7px'}}>
        <p style={{color:"#135ac5",fontWeight:'500'}}>BUILD PROFESSIONAL           FIRST</p>

Cricket Connect began with the hardest problem: decision-grade analysis for the people inside the game. That professional core — CC Pro — now runs live in the Vitality Blast and the Caribbean Premier League, across three modules: preparation, live decisions, and post-match review. CC AI extends the same intelligence to fans. One engine, two products, a single standard of rigour.

      </div>

    </div>








    









    </>
  )
}

export default aboutpage