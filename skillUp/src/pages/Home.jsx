import React from 'react';
import './Home.css';
import logo from '../assets/logo.png';

const Home = () => {
  return (
    <div className="home-page">
      <div className="home-content">
        <img
          src={logo}
          alt="Skill Up"
          className="home-image"
        />
        <div className="home-text">
          <h1>Welcome to <span className="highlight">Skill Up</span> </h1>
          <p>
            Discover your hidden potential, close skill gaps, and unlock job opportunities tailored just for you.
            With personalized guidance and smart tools, Skill Up helps you level up your career journey. 
          </p>
          <a href="/about" className="cta-button">Explore More</a>
        </div>
      </div>
    </div>
  );
};

export default Home;
