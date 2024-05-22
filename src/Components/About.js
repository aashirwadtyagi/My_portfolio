import React from 'react';
import Skills from './Skills.js';
import Tilt from 'react-parallax-tilt';
import Lottie from "lottie-react"
import Coder from '../LottieFiles/coder.json';

const About = () => {
  return (
    <>
      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading' >Get to <b>know</b> me!</h1>
          <p>
          My name is Aashirwad Tyagi, I'm a B.Tech CSE 3rd year student with a passion for Web development and data structures and algorithm. I also enjoy competitive programming and have solved 100+ problems on Leetcode. To improve my skills, I regularly practice on Leetcode and GeeksforGeeks. 

I excel in solving complex challenges with my strong problem- solving skills and attention to detail. I'm always eager to learn and keep up with the rapidly evolving technology industry. 

Along with my technical skills, I am an excellent communicator and collaborator, who can work effectively independently and as part of a team. I'm excited to connect with fellow tech enthusiasts and explore new opportunities to grow and develop professionally.
          </p>
        </div>

        <div>
          <Tilt>
              <Lottie 
              className="illustration" 
              animationData={Coder} 
              loop={true} 
            />
          </Tilt>
        </div>

      </div>
      
      <h1 className='SkillsHeading'>Professional Skillset</h1>
      <div className='skills'>
        
        <Skills skill='React' />
        <Skills skill='Node' />
        <Skills skill='Git' />
        <Skills skill='Github' />
        <Skills skill='Javascript' />
        <Skills skill='JAVA' />
        <Skills skill='Npm' />
        <Skills skill='Html'/>
        <Skills skill='css' />
      </div>
    </>
  )
}

export default About
