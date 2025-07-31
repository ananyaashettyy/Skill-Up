// src/App.jsx
import React, { useState } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';

import Home from './pages/Home';
import About from "./pages/About";
import Feedback from "./pages/Feedback";
import JobSearch from './pages/JobSearch';
import Dashboard from './pages/Dashboard';
import ResumeBuilder from './pages/ResumeBuilder';
import Login from './pages/Login';
import Signup from './pages/Signup';

import './App.css';

function App() {
  const [sidebarVisible, setSidebarVisible] = useState(true);
  const location = useLocation();

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  // Pages where sidebar/navbar should be hidden
  const hideNav = location.pathname === '/login' || location.pathname === '/signup';

  return (
    <div className="app-container">
      {!hideNav && sidebarVisible && (
        <aside className="sidebar">
          <h2>Skill Up</h2>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/resume-builder">Resume Builder</Link>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/job-search">Job Search</Link>
            <Link to="/feedback">Feedback</Link>
            <Link to="/about">About</Link>
          </nav>
        </aside>
      )}

      <div className="main-content">
        {!hideNav && (
          <div className="navbar">
            <button className="toggle-button" onClick={toggleSidebar}>☰</button>
            <div className="logo">Skill Up</div>
            <div className="nav-buttons">
              <Link to="/login"><button>Login</button></Link>
              <Link to="/signup"><button>Sign Up</button></Link>
            </div>
          </div>
        )}

        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/job-search" element={<JobSearch />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/resume-builder" element={<ResumeBuilder />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
