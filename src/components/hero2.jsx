import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const hero2 = () => {
  const usehandle =()=>{
          window.scrollTo({
               top:0,
               behavior:'smooth'}
          )}
  return (
    <>
        <div className="headingsection12" style={{padding:'8% 3%', fontSize:'1.3rem'}}>

        <div>
          <p style={{color:"#1e65cf", textTransform:'uppercase', fontSize:'1rem',fontWeight:'500'}}>
            For professionals and for fans
          </p>

          <p  className='hsp213' style={{fontSize:'2.5rem' ,fontWeight:'600',fontFamily:'serif'}}>Built for everyone who lives the game</p>

          <p style={{color:'grey'}}>The same analytical core powers both products — <br/>explainable, context-aware, and never built around odds.</p>
          </div>
    </div>




    <div className="carddivs" style={{display:'flex', justifyContent:'center', alignItems:'center', padding:'3%',gap:'20px',flexWrap:'wrap' }}>

        <div className="card1" style={{minWidth:'350px', width:'600px', height:'500px', backgroundColor:'#ffff',borderRadius:'2%',boxShadow:"0px 15px 25px rgba(0,0,0,0.30)",
          border:'3px solid rgba(7, 3, 3, 0.07)',borderLeft:'8px solid rgba(52, 52, 53, 0.73)'
        }}>

 
         
          <div 
          className="txtbx1" style={{padding:'10% 5%',fontWeight:'500'}}>
                    <motion.div
                    whileHover={{
 
  boxShadow:'0px 10px 25px rgba(0,0,0,0.2)'
}}
transition={{
  type:'spring',
  stiffness:300,
  damping:20
}}>
                  <p style={{fontSize:'0.8rem',fontWeight:'600',textTransform:'uppercase',padding:'2% 2% 2% 0%'}}>CC AI · for fans</p>
                 <h4 style={{fontSize:'2rem',fontWeight:'500',fontFamily:'serif'}}>The fan platform</h4>
                 <p style={{padding:'2%  ',color:'#857d7d' }}> Fans who want more than the scorecard</p>
                  <ul style={{padding:'5% ' ,  color:'#857d7d'}}>The professional engine, made accessible. No jargon, no noise — two ways in  in the Vitality Blast and the Caribbean Premier League, with pilots prepared.

                  <li style={{color:'#3f3c3c' , paddingTop:'6%'}}> <span style={{fontWeight:'600',color:'black'}}>Match Companion —</span> what is happening, why, and what comes next</li>
                 <li style={{color:'#3f3c3c'}}> <span style={{fontWeight:'600',color:'black'}}>Cricket Minds —</span> call the game and build a Cricket IQ · Q4 2026
                 </li>
                  
                  <li style={{color:'#3f3c3c'}}> <span style={{fontWeight:'600',color:'black'}}></span> 
                  Win probability, partnership intelligence, tactical context</li>
                  </ul>
 <Link to='/contact' 
                                     style={{textDecoration:'none'}}
                                     onClick={usehandle}>
                  <button style={{marginTop:'6%',fontSize:'0.8rem', fontWeight:'500', border:'none',backgroundColor:'white',cursor:'pointer'}}>Try CC Ai free  →</button></Link>
</motion.div>
          </div>

        </div>
        <div className="card2" style={{ minWidth:'350px', width:'600px',height:'500px',backgroundColor:'#fff',borderRadius:'2%',boxShadow:"0px 15px 25px rgba(0,0,0,0.30)",
          border:'3px solid rgba(7, 3, 3, 0.07)',borderLeft:'8px solid #1e65cf'}}>


            <div className="txtbx2" style={{padding:'10% 5%',fontWeight:'500'}}>
<motion.div
                    whileHover={{

  boxShadow:'0px 10px 25px rgba(0,0,0,0.2)'
}}
transition={{
  type:'spring',
  stiffness:300,
  damping:20
}}>
                  <p style={{fontSize:'0.8rem',fontWeight:'600',textTransform:'uppercase',color:'#1e65cf',padding:'2% 2% 2% 0%'}}>CC Pro · for professionals</p>
                 <h4 style={{fontSize:'2rem',fontWeight:'500',fontFamily:'serif'}}>The analytics suite</h4>
                 <p style={{padding:'2%',color:'#857d7d'}}> Coaches, analysts, franchises & media</p>
                  <ul style={{padding:'5%' ,color:'#857d7d'}}>
Three modules across the life of a match. In live use in the Vitality Blast and the Caribbean Premier League, with pilots prepared for the ILT20, Super Smash, Big Bash and SA20.

                  <li style={{color:'#3f3c3c' ,paddingTop:'2%'}}> <span style={{fontWeight:'600',color:'black'}}>Reporting —</span> opposition and match reports before the game</li>
                 <li style={{color:'#3f3c3c'}}> <span style={{fontWeight:'600',color:'black'}}>Analysis — </span> the live analyst dashboard during it</li>
                  <li style={{color:'#3f3c3c'}}> <span style={{fontWeight:'600',color:'black'}}>Explorer —  </span> every tracked delivery afterwards, in 3D and charted</li>

                  </ul>
                  <Link to='/contact' 
                                     style={{textDecoration:'none'}}
                                     onClick={usehandle}>

                  <button style={{marginTop:'12%',fontSize:'0.8rem', fontWeight:'500', border:'none',color:'#1e65cf', backgroundColor:'white',cursor:'pointer'}}>Request a demo  →</button></Link>
</motion.div>
          </div>

        </div>

    </div>
    </>
  )
}

export default hero2