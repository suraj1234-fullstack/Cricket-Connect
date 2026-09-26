import React, { useCallback, useState } from 'react'
import { Link } from 'react-router-dom'

const navbar = () => {

    const [num, setnum] = useState(false)
    
   
   
   
    const usehandle =()=>{
        if(window.innerWidth <= 1194){
        setnum(!num)
    }}

  return (
   
   <div className="navbar" style={{backgroundColor:'white' , width:'100%',height:'4rem',display: 'flex', justifyContent:'space-between',alignItems:'center',position:'fixed',zIndex:'1000',top:'0px'}}>
        
        
        <div  className='logoparent' style={{display:'flex', justifyContent:'flex-start', alignItems:'center', gap:'1vw', fontSize:'15px',fontWeight:'500',padding:'10%',minWidth:'100%'
        }}>

        <div className="logo"style={{display:'flex', justifyContent:'center', alignItems:'center',textAlign:'center',gap:'3%' }}>
            <img  style={{width:'35px'}} src="https://cricketconnect.ai/logo.png" alt="" />
            &nbsp;
           {/*<i  style ={{fontSize:'1.7rem'}}class="fa-solid fa-volleyball"></i>*/}
           <Link to= '/'
           style={{textDecoration:'none',color:'inherit'}}>
           <h1 style={{fontSize:'1.6rem',whiteSpace:'nowrap' }}>Cricket <span style={{color:'grey'}}>Connect</span></h1></Link>
        </div>&nbsp;&nbsp;
           
        <div  className={num ? 'mobilemenubar' : 'allmenubar' } >
           
               
            <Link to='/aboutpage' className='aboutlink'
            style={{textDecoration:'none'}}
            onClick={usehandle}>
            <a  className='a1' style={{color:'#353638'}} >About</a>
            </Link>

            <Link to='/Howitwork' className='aboutlink'
            style={{textDecoration:'none'}}
                 onClick={usehandle}>
            <a className='a1' style={{color:'#353638' ,whiteSpace:'nowrap'}}> How it work</a></Link>


            <Link to='/team' className='aboutlink'
            style={{textDecoration:'none'}}
                 onClick={usehandle}>
            <a  className='a1' style={{color:'#353638'}}>Team</a></Link>

            <Link to='/news' className='aboutlink'
            style={{textDecoration:'none'}}
                 onClick={usehandle}>
             <a  className='a1'style={{color:'#353638'}}>News</a></Link>

             <Link to='/faq' className='aboutlink'
            style={{textDecoration:'none'}}
                 onClick={usehandle}>
            <a className='a1'style={{color:'#353638'}}>FAQ</a></Link>

            <Link to='/contact' className='aboutlink'
            style={{textDecoration:'none'}}
                 onClick={usehandle}>
             <a  className='a1'style={{color:'#353638'}}>Contact</a></Link>
             
             
             <div className='button1' >
                
                <button className='btn1w'   style={{fontSize:'1.0rem',fontWeight:'600',border:'none', backgroundColor:'white', color:'black',marginRight:'7px'}}><a className='anchor1' style={{textDecoration:'none', color:'grey'}} >Sign in </a></button>
                <button style={{fontSize:'1.0rem',fontWeight:'600', borderRadius:'8px', border:'none' , backgroundColor:'#0a53c4',color:'white', padding:'12px 15px'}}>Book a demo</button>
            
            </div>
           



       </div>
        </div>


        


     <div className="media3dot" style={{position:'absolute',fontSize:'1.2rem',right:'0%',paddingRight:'15px'}}>
            <i style={{cursor:'pointer',marginRight:'10px'}}onClick={usehandle} className={`fa-solid ${num ? 'fa-xmark' : 'fa-bars'}`}></i>
            
        </div>

   </div>
   
   
   
   
   
   
  )
}

export default navbar