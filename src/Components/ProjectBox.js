import React from 'react';
import {FaGithub} from "react-icons/fa";
import {CgFileDocument} from "react-icons/cg";


const  ProjectBox = ({projectPhoto, projectKey, projectName}) => {
  const desc = {
    sneakerGithub : "https://github.com/aashirwadtyagi/Sneakered",
    sneakerWebsite : "https://aashirwadtyagi.github.io/Sneakered/",
    
    collGithub:"https://github.com/aashirwadtyagi/cgram",
    collWebsite : "https://collgram.netlify.app/",
  
    // FashionStoreGithub:"https://github.com/officialDeveloper01/Fashionstore",
    // FashionStoreWebsite:"https://fashionstore-beryl.vercel.app/",

    // ResumeBuilderGithub:"https://github.com/officialDeveloper01/react-resume-builder",
    // ResumeBuilderWebsite:"https://resumebuilder-nj.vercel.app/",

    // FingerSpeedsGithub:"https://github.com/officialDeveloper01/finger-speeds",
    // FingerSpeedsWebsite:"https://fingerspeeds.vercel.app",
  }

  let show ='';
  if(desc[projectName + 'Github']===""){
    show="none";
  }
    
  return (
    <div className='projectBox'> 
        <img className='projectPhoto' src={projectPhoto} alt="Project display" /> 
        <div>
            <br />
            <h3>{projectName}</h3>
            <br />
            {desc[projectKey + 'Desc']}
            <br />

            <a style={{display:show}} href={desc[projectKey + 'Github']} target='_blank' rel="noreferrer">
              <button className='projectbtn'><FaGithub/> Github</button>
            </a>

            <a href={desc[projectKey + 'Website']} target='_blank' rel="noreferrer">
              <button className='projectbtn' href={desc[projectKey + 'Website']}><CgFileDocument/> Demo</button>
            </a>
        </div>
    </div>
  )
}

export default  ProjectBox
