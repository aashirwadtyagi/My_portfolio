import React from 'react';
import ProjectBox from './ProjectBox';
import chunkymonkey from "../images/chunkymonkey.png"
import fashionstore from "../images/fashionstore.png"
import starbattle from "../images/starbattle.png"
import dict from "../images/vocabulary.gif"
import resumeb from "../images/resumebuilder.png"
import fingerspeeds from "../images/fingerspeeds.png"

const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>
        <ProjectBox projectPhoto={starbattle} projectName="Star Battle" projectKey="Starbattle" />
        <ProjectBox projectPhoto={chunkymonkey} projectName="Chunky Monkey App" projectKey="chunkeymonkey" />
        <ProjectBox projectPhoto={dict} projectName="Pocket Dictonary App" projectKey="PocketDict" />
        <ProjectBox projectPhoto={fashionstore} projectName="Fashion Store" projectKey="FashionStore" />
        <ProjectBox projectPhoto={resumeb} projectName="Resume Builder" projectKey="ResumeBuilder"/>
        <ProjectBox projectPhoto={fingerspeeds} projectName="Finger Speeds" projectKey="FingerSpeeds"/>
      </div>

    </div>
  )
}

export default Projects
