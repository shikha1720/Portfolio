import React from 'react';
import './style.css';
import Container from '../../components/Container/Container';
import Wapper from '../../components/Wapper/Wapper';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CodeIcon from '@mui/icons-material/Code';
import { Bio } from '../../data/myData';

const Footer = () => {
  return (
    <Container>
      <Wapper>
        <div className="footer-title">{Bio.name}</div>
        <div className="footer-section">
          <a href="#about" className="footer-item">About</a>
          <a href="#skills" className="footer-item">Skills</a>
          <a href="#experience" className="footer-item">Experience</a>
          <a href="#projects" className="footer-item">Projects</a>
          <a href="#education" className="footer-item">Education</a>
        </div>
        <div className="socialMedia-icons">
          <a href={Bio.linkedin} target="_blank" className="socialMedia-icon"><LinkedInIcon /></a>
          <a href={Bio.twitter} target="_blank" className="socialMedia-icon"><TwitterIcon /></a>
          <a href={Bio.leetcode} target="_blank" className="socialMedia-icon"><CodeIcon /></a>
        </div>
      </Wapper>
    </Container>
  )
}

export default Footer