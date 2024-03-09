import React from 'react';
import ProjectBox from './ProjectBox';
import chunkymonkey from "../images/chunkymonkey.png"
import fashionstore from "../images/fashionstore.png"
import starbattle from "../images/starbattle.png"
import dict from "../images/vocabulary.gif"

const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>
        <ProjectBox projectPhoto={starbattle} projectName="Star Battle" />
        <ProjectBox projectPhoto={chunkymonkey} projectName="Chunky Monkey App" />
        <ProjectBox projectPhoto={dict} projectName="Pocket Dictonary App" />
        <ProjectBox projectPhoto={fashionstore} projectName="Fashion Store" />
      </div>

    </div>
  )
}

export default Projects