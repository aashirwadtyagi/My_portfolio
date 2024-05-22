import React from 'react';
import {FaGithub, FaInstagram, FaLinkedin} from "react-icons/fa";
import {GrMail} from "react-icons/gr";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer>
      <div className='footerLinks'>
        <a href="https://github.com/aashirwadtyagi" target='_blank'><FaGithub/></a>
        <a href='mailTo:aashirwadtyagi940@gmail.com' target='_blank'><GrMail/></a>
        <a href='NA' target='_blank'><FaInstagram/></a>
        <a href='https://www.linkedin.com/in/aashirwad-tyagi-b0040b1a3/' target='_blank'><FaLinkedin/></a>
      </div>
    </footer>
  )
}

export default Footer