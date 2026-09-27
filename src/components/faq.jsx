import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faq = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);
const [isOpen6, setIsOpen6] = useState(false);
const [isOpen7, setIsOpen7] = useState(false);
const [isOpen8, setIsOpen8] = useState(false);
const [isOpen9, setIsOpen9] = useState(false);
const [isOpen10, setIsOpen10] = useState(false);
const [isOpen11, setIsOpen11] = useState(false);
const [isOpen12, setIsOpen12] = useState(false); 
const [isOpen13, setIsOpen13] = useState(false);
const [isOpen14, setIsOpen14] = useState(false);
const [isOpen15, setIsOpen15] = useState(false);
  

  return (
     <div style={{display:'flex',flexDirection:'column',justifyContent:'center', alignItems:'center'}}>


      <div className='heros112' style={{marginTop:'10px'}}>

   

    <div className="txtbox12"style={{fontFamily:'serif',marginTop:'3%'}}>
      
        


       <p className='pfont124'  style={{fontSize:'3rem',fontWeight:'600'}}> <p  style={{fontSize:'0.7rem',color:'grey',fontWeight:'700'}}><i  style={{color:"#135ac5",fontSize:'0.7rem',textAlign:'center',  boxShadow:' 0 0 0 3px #1e6bff33 ', borderRadius:'50%'}} class="fa-solid fa-circle"></i>&nbsp; &nbsp;HOW IT WORK</p><span style={{fontFamily:'serif'}}>
        Built around the match</span></p>

          
       <p  className='hpp123' style={{fontSize:'1.5vw',width:'50vw', padding:'2% 0%',color:'#d4d0d0'}}>
The professional platform is built in three modules, and they map onto the shape of a match: prepare for it, decide inside it, take it apart afterwards. The same cricket data and the same modelling sit under all three — what changes is what you need at that moment.</p>
       
    
    </div>



     <div className='hs1abts'  style={{display:'flex',alignItems:'center', justifyContent:'center',objectFit:'cover'}}>
      <video className='hs21abts'  style={{ filter: 'brightness(0.3) contrast()'}} src="heropagevdu.mp4" autoPlay loop muted playsInline />
    </div>
    </div>

         
    <div  className='faq1' style={{  fontFamily: 'sans-serif',margin:'5%'}}>

       {/*card1strt*/}
      <div
      className='a123'
        style={{
          marginTop:'3%',
          border: '1.3px solid #d8d8d8', 
          padding: '20px',
          borderRadius: '15px',
          cursor: 'pointer'
        }}
        onClick={() => setIsOpen(!isOpen)}
      >
       
        <div className='a422' style={{ display: 'flex',  alignItems: 'center',justifyContent:'space-between' }}>
         
          <h3 className='a420' style={{ margin: 0, fontSize: '18px',fontWeight:'520' }}>What is Cricket Connect?</h3>
          <motion.span
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <i className='a512' class="fa-solid fa-angle-up"></i>
          </motion.span>
        </div>

        
        <AnimatePresence >
          {isOpen && (
            <motion.div className='a214'
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              style={{ overflow: 'hidden', marginTop: '15px' }}
            >
              <p className='a120' style={{ color: '#555', fontSize: '16px', lineHeight: '1.8',wordSpacing:'1.5px' }}>
                Cricket Connect is a cricket intelligence platform that delivers explainable, context-aware insights across players, teams, and matches. It combines advanced analytics with cricket expertise to help users explore performance, tactics, and decision-making through natural language questions.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      
 {/*card1*/}
      <div
      className='a123'
        style={{
          marginTop:'3%',
          border: '1.3px solid #d8d8d8', 
          padding: '20px',
          borderRadius: '15px',
          cursor: 'pointer'
        }}
        onClick={() => setIsOpen2(!isOpen2)}
      >
       
        <div className='a422' style={{ display: 'flex',  alignItems: 'center',justifyContent:'space-between' }}>
         
          <h3 className='a420' style={{ margin: 0, fontSize: '18px',fontWeight:'520' }}>Who is Cricket Connect for?</h3>
          <motion.span
            animate={{ rotate: isOpen2 ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <i className='a512' class="fa-solid fa-angle-up"></i>
          </motion.span>
        </div>

        
        <AnimatePresence >
          {isOpen2 && (
            <motion.div className='a214'
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              style={{ overflow: 'hidden', marginTop: '15px' }}
            >
              <p className='a120' style={{ color: '#555', fontSize: '16px', lineHeight: '1.8',wordSpacing:'1.5px' }}>
                Cricket Connect is built for serious cricket fans, analysts, coaches, media professionals, and anyone who wants a deeper, data-driven understanding of the game without needing to be a data scientist.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

 {/*card1*/}
      <div
      className='a123'
        style={{
          marginTop:'3%',
          border: '1.3px solid #d8d8d8', 
          padding: '20px',
          borderRadius: '15px',
          cursor: 'pointer'
        }}
        onClick={() => setIsOpen3(!isOpen3)}
      >
       
        <div className='a422' style={{ display: 'flex',  alignItems: 'center',justifyContent:'space-between' }}>
         
          <h3 className='a420' style={{ margin: 0, fontSize: '18px',fontWeight:'520' }}> What kinds of questions can I ask?</h3>
          <motion.span
            animate={{ rotate: isOpen3 ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <i className='a512' class="fa-solid fa-angle-up"></i>
          </motion.span>
        </div>

        
        <AnimatePresence >
          {isOpen3 && (
            <motion.div className='a214'
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              style={{ overflow: 'hidden', marginTop: '15px' }}
            >
              <p className='a120' style={{ color: '#555', fontSize: '16px', lineHeight: '1.8',wordSpacing:'1.5px' }}>
               
You can ask questions about player performance and roles, match dynamics and turning points, tactical trends, team strategies, and contextual comparisons across competitions and conditions. The platform is designed to go beyond surface-level statistics by explaining why something happened, not just what happened.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

       {/*card1*/}
      <div
      className='a123'
        style={{
          marginTop:'3%',
          border: '1.3px solid #d8d8d8', 
          padding: '20px',
          borderRadius: '15px',
          cursor: 'pointer'
        }}
        onClick={() => setIsOpen4(!isOpen4)}
      >
       
        <div className='a422' style={{ display: 'flex',  alignItems: 'center',justifyContent:'space-between' }}>
         
          <h3 className='a420' style={{ margin: 0, fontSize: '18px',fontWeight:'520' }}> How is Cricket Connect different from traditional cricket statistics websites?</h3>
          <motion.span
            animate={{ rotate: isOpen4 ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <i className='a512' class="fa-solid fa-angle-up"></i>
          </motion.span>
        </div>

        
        <AnimatePresence >
          {isOpen4 && (
            <motion.div className='a214'
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              style={{ overflow: 'hidden', marginTop: '15px' }}
            >
              <p className='a120' style={{ color: '#555', fontSize: '16px', lineHeight: '1.8',wordSpacing:'1.5px' }}>
              
Traditional statistics platforms focus on raw numbers and static tables. Cricket Connect is designed to help users understand performance and context by combining structured data with cricket-specific intelligence, enabling exploration through natural language rather than manual filtering.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

       {/*card1*/}
      <div
      className='a123'
        style={{
          marginTop:'3%',
          border: '1.3px solid #d8d8d8', 
          padding: '20px',
          borderRadius: '15px',
          cursor: 'pointer'
        }}
        onClick={() => setIsOpen5(!isOpen5)}
      >
       
        <div className='a422' style={{ display: 'flex',  alignItems: 'center',justifyContent:'space-between' }}>
         
          <h3 className='a420' style={{ margin: 0, fontSize: '18px',fontWeight:'520' }}> Does Cricket Connect explain its insights?</h3>
          <motion.span
            animate={{ rotate: isOpen5 ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <i className='a512' class="fa-solid fa-angle-up"></i>
          </motion.span>
        </div>

        
        <AnimatePresence >
          {isOpen5 && (
            <motion.div className='a214'
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              style={{ overflow: 'hidden', marginTop: '15px' }}
            >
              <p className='a120' style={{ color: '#555', fontSize: '16px', lineHeight: '1.8',wordSpacing:'1.5px' }}>
               
Yes. Cricket Connect provides explainable insights grounded in cricket context, historical patterns, and situational factors, helping users understand the reasoning behind conclusions rather than presenting isolated metrics.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

       {/*card1*/}
      <div
      className='a123'
        style={{
          marginTop:'3%',
          border: '1.3px solid #d8d8d8', 
          padding: '20px',
          borderRadius: '15px',
          cursor: 'pointer'
        }}
        onClick={() => setIsOpen6(!isOpen6)}
      >
       
        <div className='a422' style={{ display: 'flex',  alignItems: 'center',justifyContent:'space-between' }}>
         
          <h3 className='a420' style={{ margin: 0, fontSize: '18px',fontWeight:'520' }}>Which formats and competitions do you cover?</h3>
          <motion.span
            animate={{ rotate: isOpen6 ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <i className='a512' class="fa-solid fa-angle-up"></i>
          </motion.span>
        </div>

        
        <AnimatePresence >
          {isOpen6 && (
            <motion.div className='a214'
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              style={{ overflow: 'hidden', marginTop: '15px' }}
            >
              <p className='a120' style={{ color: '#555', fontSize: '16px', lineHeight: '1.8',wordSpacing:'1.5px' }}>
                
Cricket Connect is built as a global, cross-format cricket intelligence platform. Its analysis is grounded in deep historical datasets from major T20 competitions such as the IPL and T20 World Cups, allowing reliable and well-contextualized insights.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

       {/*card1*/}
      <div
      className='a123'
        style={{
          marginTop:'3%',
          border: '1.3px solid #d8d8d8', 
          padding: '20px',
          borderRadius: '15px',
          cursor: 'pointer'
        }}
        onClick={() => setIsOpen7(!isOpen7)}
      >
       
        <div className='a422' style={{ display: 'flex',  alignItems: 'center',justifyContent:'space-between' }}>
         
          <h3 className='a420' style={{ margin: 0, fontSize: '18px',fontWeight:'520' }}>  Do you provide predictions?</h3>
          <motion.span
            animate={{ rotate: isOpen7 ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <i className='a512' class="fa-solid fa-angle-up"></i>
          </motion.span>
        </div>

        
        <AnimatePresence >
          {isOpen7 && (
            <motion.div className='a214'
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              style={{ overflow: 'hidden', marginTop: '15px' }}
            >
              <p className='a120' style={{ color: '#555', fontSize: '16px', lineHeight: '1.8',wordSpacing:'1.5px' }}>
             
Cricket Connect provides probabilistic insights and scenario-based analysis, not fixed predictions or guarantees. All outputs reflect uncertainty and context, recognising the inherent variability of cricket outcomes.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

       {/*card1*/}
      <div
      className='a123'
        style={{
          marginTop:'3%',
          border: '1.3px solid #d8d8d8', 
          padding: '20px',
          borderRadius: '15px',
          cursor: 'pointer'
        }}
        onClick={() => setIsOpen8(!isOpen8)}
      >
       
        <div className='a422' style={{ display: 'flex',  alignItems: 'center',justifyContent:'space-between' }}>
         
          <h3 className='a420' style={{ margin: 0, fontSize: '18px',fontWeight:'520' }}>How accurate are the insights?</h3>
          <motion.span
            animate={{ rotate: isOpen8 ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <i className='a512' class="fa-solid fa-angle-up"></i>
          </motion.span>
        </div>

        
        <AnimatePresence >
          {isOpen8 && (
            <motion.div className='a214'
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              style={{ overflow: 'hidden', marginTop: '15px' }}
            >
              <p className='a120' style={{ color: '#555', fontSize: '16px', lineHeight: '1.8',wordSpacing:'1.5px' }}>
                
Insights are based on historical data, contextual modelling, and domain-informed assumptions. They are designed to support understanding and discussion rather than replace expert judgment.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

       {/*card1*/}
      <div
      className='a123'
        style={{
          marginTop:'3%',
          border: '1.3px solid #d8d8d8', 
          padding: '20px',
          borderRadius: '15px',
          cursor: 'pointer'
        }}
        onClick={() => setIsOpen9(!isOpen9)}
      >
       
        <div className='a422' style={{ display: 'flex',  alignItems: 'center',justifyContent:'space-between' }}>
         
          <h3 className='a420' style={{ margin: 0, fontSize: '18px',fontWeight:'520' }}>    Can I trust the AI's conclusions?</h3>
          <motion.span
            animate={{ rotate: isOpen9 ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <i className='a512' class="fa-solid fa-angle-up"></i>
          </motion.span>
        </div>

        
        <AnimatePresence >
          {isOpen9 && (
            <motion.div className='a214'
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              style={{ overflow: 'hidden', marginTop: '15px' }}
            >
              <p className='a120' style={{ color: '#555', fontSize: '16px', lineHeight: '1.8',wordSpacing:'1.5px' }}>
           
Cricket Connect provides decision-support insights, not absolute truths. Outputs are probabilistic, transparent, and context-dependent, reflecting the complex factors influencing cricket performance.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

       {/*card1*/}
      <div
      className='a123'
        style={{
          marginTop:'3%',
          border: '1.3px solid #d8d8d8', 
          padding: '20px',
          borderRadius: '15px',
          cursor: 'pointer'
        }}
        onClick={() => setIsOpen10(!isOpen10)}
      >
       
        <div className='a422' style={{ display: 'flex',  alignItems: 'center',justifyContent:'space-between' }}>
         
          <h3 className='a420' style={{ margin: 0, fontSize: '18px',fontWeight:'520' }}>   Is Cricket Connect replacing human analysts or experts?</h3>
          <motion.span
            animate={{ rotate: isOpen10 ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <i className='a512' class="fa-solid fa-angle-up"></i>
          </motion.span>
        </div>

        
        <AnimatePresence >
          {isOpen10 && (
            <motion.div className='a214'
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              style={{ overflow: 'hidden', marginTop: '15px' }}
            >
              <p className='a120' style={{ color: '#555', fontSize: '16px', lineHeight: '1.8',wordSpacing:'1.5px' }}>
             
No. Cricket Connect is designed to augment human expertise by helping users explore data efficiently, surface patterns, and ask better questions, while interpretation and judgment remain human.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

       {/*card1*/}
      <div
      className='a123'
        style={{
          marginTop:'3%',
          border: '1.3px solid #d8d8d8', 
          padding: '20px',
          borderRadius: '15px',
          cursor: 'pointer'
        }}
        onClick={() => setIsOpen11(!isOpen11)}
      >
       
        <div className='a422' style={{ display: 'flex',  alignItems: 'center',justifyContent:'space-between' }}>
         
          <h3 className='a420' style={{ margin: 0, fontSize: '18px',fontWeight:'520' }}> Do you provide betting odds or gambling advice?</h3>
          <motion.span
            animate={{ rotate: isOpen11 ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <i className='a512' class="fa-solid fa-angle-up"></i>
          </motion.span>
        </div>

        
        <AnimatePresence >
          {isOpen11 && (
            <motion.div className='a214'
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              style={{ overflow: 'hidden', marginTop: '15px' }}
            >
              <p className='a120' style={{ color: '#555', fontSize: '16px', lineHeight: '1.8',wordSpacing:'1.5px' }}>
               
No. Cricket Connect is not a gambling product. It does not provide betting odds, betting recommendations, or gambling-related services, and does not partner with betting companies.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

       {/*card1*/}
      <div
      className='a123'
        style={{
          marginTop:'3%',
          border: '1.3px solid #d8d8d8', 
          padding: '20px',
          borderRadius: '15px',
          cursor: 'pointer'
        }}
        onClick={() => setIsOpen12(!isOpen12)}
      >
       
        <div className='a422' style={{ display: 'flex',  alignItems: 'center',justifyContent:'space-between' }}>
         
          <h3 className='a420' style={{ margin: 0, fontSize: '18px',fontWeight:'520' }}> What data sources do you use?</h3>
          <motion.span
            animate={{ rotate: isOpen12 ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <i className='a512' class="fa-solid fa-angle-up"></i>
          </motion.span>
        </div>

        
        <AnimatePresence >
          {isOpen12 && (
            <motion.div className='a214'
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              style={{ overflow: 'hidden', marginTop: '15px' }}
            >
              <p className='a120' style={{ color: '#555', fontSize: '16px', lineHeight: '1.8',wordSpacing:'1.5px' }}>
              
Cricket Connect combines structured third-party cricket data with proprietary enrichment, modelling, and contextual layers developed in-house. Over time, this approach allows increasingly differentiated and proprietary cricket intelligence.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

       {/*card1*/}
      <div
      className='a123'
        style={{
          marginTop:'3%',
          border: '1.3px solid #d8d8d8', 
          padding: '20px',
          borderRadius: '15px',
          cursor: 'pointer'
        }}
        onClick={() => setIsOpen13(!isOpen13)}
      >
       
        <div className='a422' style={{ display: 'flex',  alignItems: 'center',justifyContent:'space-between' }}>
         
          <h3 className='a420' style={{ margin: 0, fontSize: '18px',fontWeight:'520' }}>How often is the data updated?</h3>
          <motion.span
            animate={{ rotate: isOpen13 ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <i className='a512' class="fa-solid fa-angle-up"></i>
          </motion.span>
        </div>

        
        <AnimatePresence >
          {isOpen13 && (
            <motion.div className='a214'
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              style={{ overflow: 'hidden', marginTop: '15px' }}
            >
              <p className='a120' style={{ color: '#555', fontSize: '16px', lineHeight: '1.8',wordSpacing:'1.5px' }}>
              
The platform is built on regularly updated historical and competition data. Update frequency depends on competition and data availability, with continuous enrichment of underlying datasets.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

       {/*card1*/}
      <div
      className='a123'
        style={{
          marginTop:'3%',
          border: '1.3px solid #d8d8d8', 
          padding: '20px',
          borderRadius: '15px',
          cursor: 'pointer'
        }}
        onClick={() => setIsOpen14(!isOpen14)}
      >
       
        <div className='a422' style={{ display: 'flex',  alignItems: 'center',justifyContent:'space-between' }}>
         
          <h3 className='a420' style={{ margin: 0, fontSize: '18px',fontWeight:'520' }}>Is my data secure?</h3>
          <motion.span
            animate={{ rotate: isOpen14 ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <i className='a512' class="fa-solid fa-angle-up"></i>
          </motion.span>
        </div>

        
        <AnimatePresence >
          {isOpen14 && (
            <motion.div className='a214'
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              style={{ overflow: 'hidden', marginTop: '15px' }}
            >
              <p className='a120' style={{ color: '#555', fontSize: '16px', lineHeight: '1.8',wordSpacing:'1.5px' }}>
                
Yes. Cricket Connect uses industry-standard security practices, including encrypted connections and secure authentication. Personal data is not sold or shared with third parties.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

       {/*card1*/}
      <div
      className='a123'
        style={{
          marginTop:'3%',
          border: '1.3px solid #d8d8d8', 
          padding: '20px',
          borderRadius: '15px',
          cursor: 'pointer'
        }}
        onClick={() => setIsOpen15(!isOpen15)}
      >
       
        <div className='a422' style={{ display: 'flex',  alignItems: 'center',justifyContent:'space-between' }}>
         
          <h3 className='a420' style={{  fontSize: '18px',fontWeight:'520' }}>How do I report issues or give feedback?</h3>
          <motion.span
            animate={{ rotate: isOpen15 ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <i className='a512' class="fa-solid fa-angle-up"></i>
          </motion.span>
        </div>

        
        <AnimatePresence >
          {isOpen15 && (
            <motion.div className='a214'
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              style={{ overflow: 'hidden', marginTop: '15px' }}
            >
              <p className='a120' style={{ color: '#555', fontSize: '16px', lineHeight: '1.8',wordSpacing:'1.5px' }}>
              
You can contact the team via the Contact page to report issues, share feedback, or suggest improvements. User feedback plays an important role in shaping the platform.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      

     

     

       



    </div>

    
    









    </div>
  );
};

export default faq;