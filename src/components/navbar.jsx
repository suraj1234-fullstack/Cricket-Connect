import React, { useCallback, useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react";

const navbar = () => {
      const { loginWithRedirect,logout,user,isAuthenticated,isLoading} = useAuth0();
      
     console.log("user",user,"isloading",isLoading,"auth",isAuthenticated)




    const [num, setnum] = useState(false)
    
   
   
   
    const usehandle =()=>{
        if(window.innerWidth <= 1194){
        setnum(!num)
    }

          window.scrollTo({
               top:0,
               behavior:'smooth'}
          )}

  return (
   
   <div className="navbar" style={{backgroundColor:'#f8f7f7' , width:'100%',height:'4rem',display: 'flex', justifyContent:'space-between',alignItems:'center',position:'fixed',zIndex:'1000',top:'0px',borderBottom:'1px solid #d8d8d8'}}>
        
        
        <div  className='logoparent' style={{display:'flex', justifyContent:'flex-start', alignItems:'center', gap:'1vw', fontSize:'15px',fontWeight:'500',paddingLeft:'10%',minWidth:'100%'
        }}>

        <div className="logo"style={{display:'flex', justifyContent:'center', alignItems:'center',textAlign:'center',gap:'3%' }}>
            <img  style={{width:'35px'}} src="https://cricketconnect.ai/logo.png" alt="" />
            
           {/*<i  style ={{fontSize:'1.7rem'}}class="fa-solid fa-volleyball"></i>*/}
           <Link to= '/'
           style={{textDecoration:'none',color:'inherit'}}>
           <h1 style={{fontSize:'1.3rem',whiteSpace:'nowrap' }}>Cricket <span style={{color:'grey'}}>Connect</span></h1></Link>
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
                { isAuthenticated ? <button className='btn1w'   style={{fontSize:'1.0rem',fontWeight:'600',border:'none', backgroundColor:'#ffffff', color:'black',marginRight:'7px'}}><a className='anchor1' style={{textDecoration:'none', color:'#0a53c4',cursor:'pointer'}} 
                onClick={()=>logout()}> Hi {user.name} <span style={{fontSize:'1rem',fontWeight:'600',color:'grey',backgroundColor:'#ffffff',padding:'8px',borderRadius:'3px'}}>| Sign out</span> </a></button> :

                <button className='btn1w'   style={{fontSize:'1.0rem',fontWeight:'600',border:'none', backgroundColor:'#f8f7f7', color:'black',marginRight:'7px'}}><a className='anchor1' style={{textDecoration:'none', color:'#525050',cursor:'pointer'}} onClick={()=>loginWithRedirect()}>Sign in </a></button> }

                <Link to='/contact' 
                                     style={{textDecoration:'none'}}
                                     onClick={usehandle}>
                <button style={{fontSize:'1.0rem',fontWeight:'600', borderRadius:'8px', border:'none' , backgroundColor:'#0a53c4',color:'white', padding:'12px 15px',cursor:'pointer'}}>Book a demo</button></Link>
            
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