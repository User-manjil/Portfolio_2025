import React from 'react'
import  './Home.css'

import Portfolio from '../Portfolio/Portfolio'
// import gsap from 'gsap'
import gsap from 'gsap/all'
const Home = () => {
  // gsap.fromTo('.title_profession',{
  //   x:400,
  //   duration:10,
  //   opacity:0,
  //   zIndex:-1,

    

  // },{
  //   opacity:1,
  //   x:1


  // }
// )
  
  return (
    <>
    <div className="home">
     <div className="text_title">
       <h3 className='title_name'>Hi,I am Manjil, </h3>
        <h1 className='title_profession'> a  Web <span>Developer</span></h1>
     </div>

     <div className="social_handles">
      <ul>
        <li><a target='_blank' href="https://www.facebook.com/manjil.aryal.307027/">Facebook</a></li>
        <li><a target='_blank' href="https://www.linkedin.com/in/manzeel-aryal/">Linkedin</a></li>
        <li><a target='_blank' href="https://www.instagram.com/ma_manjil/">Instagram</a></li>
        <li><a target='_blank' href="https://www.youtube.com/">Youtube</a></li>
        {/* <li>Linkedin</li>
        <li>Instagram</li>
        <li>Youtube</li> */}
      </ul>
     </div>

   <div className='decorationCircle'> </div>
   <div className='decorationCircle2'> </div>
     </div>
      <Portfolio/>
    
    
    
    </>
   
   
  )
}

export default Home