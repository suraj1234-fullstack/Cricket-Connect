import React from 'react'

const footerbar = () => {
  return (
    <>
    <div className="footersection" style={{height:'300px', backgroundColor:'black',color:'white',padding:'4% 5% ', display:'flex',justifyContent:'space-between' , flexWrap:'wrap'}}>

                <div style={{padding:'5%', backgroundColor:'black'}}> 
                  <p style={{margin:'10px 10px 10px 0px'}}> 
                    <img  style={{width:'30px',filter: 'brightness(0) invert(1)' }} src="https://cricketconnect.ai/logo.png" alt="" />
            &nbsp; <span style={{fontSize:'25px',fontWeight:'700',color:'white'}}>Cricket </span> <span style={{fontSize:'25px',fontWeight:'700',color:'grey'}}>Connect</span></p>
                  <p style={{color:'#ccc0c0'}}>AI-native cricket intelligence for fans, teams, and <br/>the business of the game.</p>

                </div>




                  <div style={{display:'flex', justifyContent:'space-around',gap:'70px',padding:'5%', lineHeight:'40px',height:""}}>
                    <div>
                      <p style={{color:'#8b8181',fontWeight:'600'}}>Product</p>
                      <p style={{whiteSpace:'nowrap'}}>Works</p>
                      <p>About</p>
                      <p>FAQ</p>
                    </div>

                    <div>
                      <p style={{color:'#8b8181',fontWeight:'600'}}>Company</p>
                      <p>Team</p>
                      <p>News</p>
                      <p>Contact</p>
                    </div>
                    
                    <div>
                    <p style={{color:'#8b8181',fontWeight:'600'}}>Legal</p>
                      <p>Privacy</p>
                      <p>Terms</p>
                      </div>
                  </div>

              </div></>
  )
}

export default footerbar