import React from 'react';
import {FaGithub, FaInstagram} from "react-icons/fa";
import {GrMail} from "react-icons/gr";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer>
      <div className='footerLinks'>
        <a href="https://github.com/officialDeveloper01" target='_blank'><FaGithub/></a>
        <a href='mailTo:namanprocoder@gmail.com' target='_blank'><GrMail/></a>
        <a href='https://instagram.com/kuttyjain' target='_blank'><FaInstagram/></a>
        <a href='https://twitter.com/_namanjain_1' target='_blank'><FaXTwitter/></a>
      </div>
    </footer>
  )
}

export default Footer