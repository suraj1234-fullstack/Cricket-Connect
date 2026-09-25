import React from 'react'

const hero4 = () => {
  return (
    <><div className="whatsits" style={{display:'flex' ,height:'500px',padding:'5%'}}>
                
                
                <div className='d321' style={{  display:'flex', flexWrap:'wrap',padding:'4%'}}>
                  <p> <h5 style={{fontSize:'0.8rem',textTransform:'uppercase',color:'#1e65cf',fontWeight:'500'}}>The intelligence</h5>
                 <h5  style={{fontSize:'2.6rem',fontWeight:'600',fontFamily:'serif'}}> What sits under every answer</h5>
                  <h5 style={{color:'#6b6565dd', fontSize:'1.2rem',fontWeight:'450',paddingTop:"5%"}}>Whether you are a fan or a first-team analyst, the answers come from the same core.</h5></p>
                </div>
              


              <div  cl style={{  flex: '0 0 calc( 70% - 10px)',display:'flex', flexWrap:'wrap', flexDirection:'row',gap:'20px'}} >

                <div className="card11" style={{width:'353px', height:'205px' , backgroundColor:'white',borderTop:'2px solid #a19a9a44',borderRight:' none',
                borderBottom:'2px solid #a19a9a44', borderLeft:'none '}}>
                  <p><i style={{ color:'white',padding:'5%' , backgroundColor:'black',borderRadius:'30%',margin:'5%'}} class="fa-solid fa-arrow-trend-up"></i></p>
                     <p style={{fontWeight:'500', fontSize:'1.2rem',padding:'5% 5% 2% 5% '}}> Pattern-based analysis</p>
                  <p style={{color:'#6b6666',padding:'0% 5%',fontWeight:'400'}}>Meaningful trends across matches, tournaments, and seasons. Signal, not noise.</p>
                </div>


                <div className="card22" style={{width:'353px', height:'205px'  , backgroundColor:'white',borderTop:'2px solid #a19a9a44',borderRight:' none',
                borderBottom:'2px solid #a19a9a44', borderLeft:'none '}}>
                    <p><i style={{ color:'white',padding:'5%' , backgroundColor:'black',borderRadius:'30%',margin:'5%'}} class="fa-solid fa-share-nodes"></i></p>
                     <p style={{fontWeight:'500', fontSize:'1.2rem',padding:'5% 5% 2% 5% '}}> Strategic & tactical insight</p>
                  <p style={{color:'#6b6666',padding:'0% 5%'}}>AI evaluation of decisions, roles, and situations — how tactics shape outcomes.</p>

                </div>


                <div className="card33" style={{width:'353px', height:'205px' , backgroundColor:'white',borderTop:'2px solid #a19a9a44',borderRight:' none',
                borderBottom:'2px solid #a19a9a44', borderLeft:'none '}}>
                  <p><i style={{ color:'white',padding:'5%' , backgroundColor:'black',borderRadius:'30%',margin:'5%'}}  class="fa-regular fa-hourglass-half"></i></p>
                     <p style={{fontWeight:'500', fontSize:'1.2rem',padding:'5% 5% 2% 5% '}}> Probabilistic forecasting</p>
                  <p style={{color:'#6b6666',padding:'0% 5%'}}>Probabilities grounded in form, conditions, and history. For likelihood — not gambling.</p>
                </div>





                <div className="card44" style={{width:'353px', height:'205px' , backgroundColor:'white',borderTop:'2px solid #a19a9a44',borderRight:' none',
                borderBottom:'2px solid #a19a9a44', borderLeft:'none ' }}>
                  <p><i style={{ color:'white',padding:'5%' , backgroundColor:'black',borderRadius:'30%',margin:'5%'}}  class="fa-solid fa-location-dot"></i></p>
                     <p style={{fontWeight:'500', fontSize:'1.2rem',padding:'5% 5% 2% 5% '}}> Context-aware understanding</p>
                  <p style={{color:'#6b6666',padding:'0% 5%'}}>Pitch, venue, matchups, game phase, and pressure. Cricket is situational.</p>
                </div>

              </div>
              </div></>
  )
}

export default hero4