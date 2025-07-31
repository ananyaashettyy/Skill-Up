// src/pages/Dashboard.jsx
import React, { useState } from 'react';
import './Dashboard.css';

const Dashboard = () => {
  const [user] = useState({
    name: 'Ananya R Shetty',
    email: 'ananya@email.com',
    resumeLink: 'https://drive.google.com/file/d/1H8xms52PvUO0rkk37wzql0oRTtIiO5mX/view?usp=drive_link',
  });

  return (
    <div className="dashboard-container">
      {/* Notification Bar */}
      <div className="notification-bar">
        <marquee behavior="scroll" direction="left">
          📢 Infosys Internship deadline extended | 📝 New Resume Tips Added | 💼 Infosys hiring React Dev Interns
        </marquee>
      </div>

      {/* Profile Section */}
      <div className="dashboard-card profile-card">
        <h2>👤 {user.name}</h2>
        <p>Email: {user.email}</p>
        <a
          href={user.resumeLink}
          target="_blank"
          rel="noopener noreferrer"
          className="resume-link"
        >
          📄 View Resume
        </a>
      </div>

      {/* ATS Scanner Section */}
      <div className="dashboard-sections">
        <div className="dashboard-card ats-card">
          <h3> ATS Resume Scan</h3>
          <p><strong>Score:</strong> 82/100 </p>
          <p><strong>Suggestions:</strong></p>
          <ul>
            <li>Add a portfolio link</li>
            <li>Use action verbs in experience</li>
          </ul>
          <p><strong>Missing Keywords:</strong> <em>Redux, TypeScript</em></p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
