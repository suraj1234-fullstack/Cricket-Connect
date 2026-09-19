import React, { useCallback, useState } from 'react'

const navbar = () => {

    const [num, setnum] = useState(false)
   
   
   
   
    const usehandle =()=>{
        setnum(!num)
    }

  return (
   
   <div className="navbar" style={{backgroundColor:'white' , width:'100%',height:'4rem',display: 'flex', justifyContent:'space-between',alignItems:'center',position:'fixed',zIndex:'1000',top:'0px'}}>
        
        
        <div  style={{display:'flex', justifyContent:'flex-start', alignItems:'center', gap:'25px', fontSize:'15px',fontWeight:'500',paddingLeft:'10%'
        }}>
        <div className="logo"style={{display:'flex', justifyContent:'center', alignItems:'center',textAlign:'center',gap:'1%px' }}>
            <img  style={{width:'35px'}} src="https://cricketconnect.ai/logo.png" alt="" />
            &nbsp;
           {/*<i  style ={{fontSize:'1.7rem'}}class="fa-solid fa-volleyball"></i>*/}
           <h1 style={{fontSize:'1.6rem',whiteSpace:'nowrap' }}>Cricket <span style={{color:'grey'}}>Connect</span></h1>
        </div>
           
        <div  className={num ? 'mobilemenubar' : 'allmenubar'}>
            <a  style={{color:'#353638'}} >About</a>
            <a style={{color:'#353638' ,whiteSpace:'nowrap'}}> How it work</a>
            <a style={{color:'#353638'}}>Team</a>
             <a style={{color:'#353638'}}>News</a>
            <a style={{color:'#353638'}}>FAQ</a>
             <a  style={{color:'#353638'}}>Contact</a>
       </div>
        </div>


        <div className="component2"  >

            <div className='button1' 
            style={{display:'flex',justifyContent:'flex-end',alignItems:'center',marginRight:'80px'
            }}>
                <button    style={{fontSize:'1.0rem',fontWeight:'600',border:'none', backgroundColor:'none', color:'black',marginRight:'7px'}}><a style={{textDecoration:'none', color:'inherit'}} href='https://cricket-connect.us.auth0.com/u/login?state=hKFo2SB4SUR1VmhjZ0FlalVHdXJ1QWs3dEpwS0htNkhGVUE0bqFur3VuaXZlcnNhbC1sb2dpbqN0aWTZIFAwVjhWVG5LeEJEc3pnUzh0Y0xob0NMTXJTUWkxbnFJo2NpZNkgc0FoelFIRTVLOG1BSDBBeVFQM3Q5am9mSkVzVDN1eW8'>Sign in </a></button>
                <button style={{fontSize:'1.0rem',fontWeight:'600', borderRadius:'8px', border:'none' , backgroundColor:'#0a53c4',color:'white', padding:'12px 15px'}}>Book a demo</button>
            </div>
        </div>


     <div className="media3dot" style={{position:'absolute',fontSize:'1.7rem',right:'0%'}}>
            <i style={{cursor:'pointer',marginRight:'10px'}}onClick={usehandle} class="fa-solid fa-bars"></i>
        </div>

   </div>
   
   
   
   
   
   
  )
}

export default navbar