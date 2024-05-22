import React from 'react';
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {GrMail} from "react-icons/gr";

const Footer = () => {
  return (
    <footer>
      <div className='footerLinks'>
        <a href="https://github.com/aashirwadtyagi" target='_blank' rel="noreferrer"><FaGithub/></a>
        <a href='mailTo:aashirwadtyagi940@gmail.com' target='_blank' rel="noreferrer"><GrMail/></a>
        <a href='https://www.linkedin.com/in/aashirwad-tyagi-b0040b1a3/' target='_blank' rel="noreferrer"><FaLinkedin/></a>
      </div>
    </footer>
  )
}

export default Footer