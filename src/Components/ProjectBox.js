import React from 'react';
import {FaGithub} from "react-icons/fa";
import {CgFileDocument} from "react-icons/cg";


const  ProjectBox = ({projectPhoto, projectName}) => {
  const desc = {
    StarbattleGithub : "https://github.com/officialDeveloper01/star-battle",
    StarbattleWebsite : "https://starbattle-game.vercel.app/",
    
    chunkeymonkeyGithub:"https://github.com/officialDeveloper01/chunkey-monkey",
    chunkeymonkeyWebsite:"https://newsletter-signup-teal.vercel.app/",
  
    PocketDictGithub : "https://github.com/officialDeveloper01/Pocket-Dictionary",
  
    FashionStoreGithub:"https://github.com/officialDeveloper01/Fashionstore",
    FashionStoreWebsite:"https://fashionstore-beryl.vercel.app/",
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
            {desc[projectName + 'Desc']}
            <br />

            <a style={{display:show}} href={desc[projectName + 'Github']} target='_blank'>
              <button className='projectbtn'><FaGithub/> Github</button>
            </a>

            <a href={desc[projectName + 'Website']} target='_blank'>
              <button className='projectbtn' href={desc[projectName + 'Website']}><CgFileDocument/> Demo</button>
            </a>
        </div>
    </div>
  )
}

export default  ProjectBox