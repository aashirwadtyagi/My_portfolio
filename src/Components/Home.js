import React from 'react';
import Lottie from  "lottie-react";
import mobile from "../LottieFiles/mobile-first.json";
import Typed from "./Typed.js";
import Tilt from 'react-parallax-tilt';
import Avatar from '../images/Avatar.png';


const Home = () => {
  return (
    <div >
      <div className='HomePage'>

        <div className='HomeText'>
          <h1>Hi There!</h1>
          <h1>I'M <b>AASHIRWAD TYAGI</b></h1>
          <Typed/>   
        </div>

        <Lottie 
          className="illustration" 
          animationData={mobile} 
          loop={true} 
        />
        
      </div>

      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading'>Brief <b>introduction</b></h1>
          <p>
          My name is Aashirwad Tyagi, persuing BTech in Computer Science and  Engineering at KIET Group of Institutions.
            I want to do work that challenges me as a developer & work that I can 
            be proud of.<br /><br />
            I am fluent in <b>React</b> and know <b>Figma</b> and am working on a few 
            projects in the <b>React and Nodejs</b> stack.<br />
            I an learning <b>Next.js</b>, <b>Java</b> currently. <br /><br />
            Also, I love <b>playing Basketball</b>   
          </p>
        </div>
        <Tilt>
          <img className='Avatar' src={Avatar} alt="" />
        </Tilt>
      </div>
    </div>
  )
}

export default Home