// src/pages/About.jsx
import React from 'react';
import './About.css';
import myPhoto from '../assets/Ananya.jpeg';
import logo from '../assets/logo.png'; // if needed
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

const About = () => {
  return (
    <div className="about-page">
      <div className="about-content">
        <div className="about-text">
          <h1>Meet the <span className="highlight">Creator</span></h1>
          <p>
            Hi, I’m <strong>Ananya R Shetty</strong>, a Computer Science student at Sahyadri College of Engineering. 
            I built this platform to make career discovery more data-driven, intuitive, and inspiring for learners like me.
          </p>
          <p>
            Skill Up is a personalized platform designed to help individuals bridge the gap between their current skills and the rapidly evolving demands of the tech industry. 
            Whether you're a student exploring options or a professional refining your path, we’re here to guide you with clarity and confidence.
          </p>
          <p>
            Our mission is to empower future tech talent with actionable insights, real-time recommendations, and personalized resources. 
            By identifying your strengths and gaps, we help you align with high-demand roles and technologies in emerging fields.
          </p>
          <div className="footer">
            <a href="https://github.com/ananyaashettyy" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="https://www.linkedin.com/in/ananyaashettyy/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="mailto:ananyashetty82987com" aria-label="Email">
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
            <a href="tel:+918861955088" aria-label="Phone">
              <FontAwesomeIcon icon={faPhone} />
            </a>
          </div>
        </div>

        <img src={myPhoto} alt="Ananya R Shetty" className="about-image" />
      </div>
    </div>
  );
};

export default About;
