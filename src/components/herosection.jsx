import React from 'react'

const herosection = () => {
  return (

    <>
    <div className='heros1' style={{marginTop:'10px'}}>

   

    <div className="txtbox12"style={{fontFamily:'serif',marginTop:'3%'}}>
      
        <p  style={{fontSize:'0.7rem',color:'grey',fontWeight:'700'}}><i  style={{color:"#135ac5",fontSize:'0.7rem',textAlign:'center',  boxShadow:' 0 0 0 3px #1e6bff33 ', borderRadius:'50%'}} class="fa-solid fa-circle"></i>&nbsp; &nbsp;AI-NATIVE CRICKET INTELLIENCE</p>


       <p className='pfont124'  style={{fontSize:'5vw',fontWeight:'600'}}> <span style={{whiteSpace:"nowrap",fontFamily:'serif'}}>
        Cricket, <span  style={{fontStyle:'italic',fontFamily:'serif',color:'#1e65cf'}}>understood </span> 
        </span><span style={{fontFamily:'serif',whiteSpace:"nowrap"}}><br/>from the boundary
        <br/> </span>
        <span style={{fontFamily:'serif',whiteSpace:"nowrap"}}>to the back office.
          </span></p>

          
       <p  className='hpp123' style={{fontSize:'1.5vw',width:'50vw', padding:'2% 0%',color:'#d4d0d0'}}>One intelligence engine, two products. A professional suite that prepares, decides and reviews a match — in live use across the Vitality Blast and the Caribbean Premier League — and a fan platform that explains the game and tests how well you read it.</p>
       
       <div className='ok' >
       <a className='atag1' style={{fontSize:'1.0rem',fontWeight:'600', borderRadius:'8px', border:'none' , backgroundColor:'#0a53c4',color:'white', padding:'12px 19px'}}>Explore CC  pro → </a>

       <a  className='atag2' style={{fontSize:'1.0rem',fontWeight:'600', borderRadius:'8px', border:'none' , backgroundColor:'#ffffff',color:'white', padding:'12px 15px',color:'black',marginLeft:'2%'}}>Try CC AI free</a>
      
       </div>
    </div>



     <div className='hs1'  style={{display:'flex',alignItems:'center', justifyContent:'center',objectFit:'cover'}}>
      <video className='hs21'  style={{ filter: 'brightness(0.3) contrast()'}} src="heropagevdu.mp4" autoPlay loop muted playsInline />
    </div>
    </div>








      <div className="logoec12" style={{display:'flex',alignItems:'center',justifyContent:'space-between',minHeight:'4rem',flexWrap:'wrap',padding:'30px 30px', backgroundColor:"#f5f2f2",boxSizing:'border-box'}}>
      
      
      <div  className='logoec123' style={{ flex:'1.5', minWidth:'250px',maxWidth:'350px',lineHeight:'1.2'} }>

        <p  ><span style={{fontWeight:'700'}}>In active use<br/></span>
        <span className='pg123e' style={{color:"#696262"}}>across professional teams, <br/>leagues and competitions</span></p>
      </div>

      {/*<div className="logodiv11" style={{display:'grid',alignItems:'center',gap:'2%',flexWrap:"wrap",flex:'2',boxSizing:'border-box'}}>*/}

      <div className="logodiv11" style={{display:'flex',flexDirection:'row',
        alignItems:'center',boxSizing:'border-box',flexWrap:'wrap'
      }}>

          <div style={{display:'flex',alignItems:'center',justifyContent:'center',height:'50px',
            flex:'1',maxWidth:'80px', backgroundColor:'white',padding:'1%',borderRadius:'8px',minWidth:'50px',border:'2px solid #ebe2e2'
          }}>
        <img style={{width:'100%' ,maxHeight:'100%',objectFit:'contain'}} src="https://cricketconnect.ai/images/crests/sussex.png" alt="no load" />
        </div>

         <div style={{display:'flex',alignItems:'center',justifyContent:'center',height:'50px',
            flex:'1',minWidth:'80px',backgroundColor:'white',padding:'1%',borderRadius:'8px',minWidth:'50px',border:'2px solid #ebe2e2'
          }}>
        <img style={{width:'100%' ,maxHeight:'100%',objectFit:'contain'}} src="https://cricketconnect.ai/images/crests/durham.png" alt="no load" />
        </div>
          <div style={{display:'flex',alignItems:'center',justifyContent:'center',height:'50px',
            flex:'1',minWidth:'80px',backgroundColor:'white',padding:'1%',borderRadius:'8px',minWidth:'50px',border:'2px solid #ebe2e2'
          }}>
        <img style={{width:'100%' ,maxHeight:'100%',objectFit:'contain'}} src="https://cricketconnect.ai/images/crests/kent.png" alt="no load" />
        </div>
          <div style={{display:'flex',alignItems:'center',justifyContent:'center',height:'50px',
            flex:'1',minWidth:'80px',backgroundColor:'white',padding:'1%',borderRadius:'8px',minWidth:'50px',border:'2px solid #ebe2e2'
          }}>
        <img style={{width:'100%' ,maxHeight:'100%',objectFit:'contain'}} src="https://cricketconnect.ai/images/crests/stlucia.png" alt="no load" />
        </div>
         <div style={{display:'flex',alignItems:'center',justifyContent:'center',height:'50px',
            flex:'1',minWidth:'80px',backgroundColor:'white',padding:'1%',borderRadius:'8px',minWidth:'50px',border:'2px solid #ebe2e2'
          }}>
        <img style={{width:'100%' ,maxHeight:'100%',objectFit:'contain',filter:'grayscale(100%)'}} src="https://cricketconnect.ai/images/crests/tkr.svg" alt="no load" />
        </div>
        <div style={{display:'flex',alignItems:'center',justifyContent:'center',height:'50px',
            flex:'1',minWidth:'80px',backgroundColor:'white',padding:'1%',borderRadius:'8px',minWidth:'50px',border:'2px solid #ebe2e2'
          }}>
        <img style={{width:'100%' ,maxHeight:'100%',objectFit:'contain'}} src="https://cricketconnect.ai/images/crests/etpl.png" alt="no load" />
        </div>

      </div>
    </div>









    </>

    
    
  )
}

export default herosection