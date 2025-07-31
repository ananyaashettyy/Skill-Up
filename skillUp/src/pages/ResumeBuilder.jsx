import React, { useState, useRef } from 'react';
import './ResumeBuilder.css';
import html2pdf from 'html2pdf.js';
import { Document, Packer, Paragraph } from 'docx';
import { saveAs } from 'file-saver';

const sections = [
  'Header', 'Experience', 'Education', 'Skills', 'Achievements', 'Additional'
];

const ResumeBuilder = () => {
  const [activeSection, setActiveSection] = useState('Header');
  const [skills, setSkills] = useState(['']); // initialize with one skill input
  const resumeRef = useRef(null);

  const handleAddSkill = () => {
    setSkills([...skills, '']);
  };

  const handleSkillChange = (index, value) => {
    const updatedSkills = [...skills];
    updatedSkills[index] = value;
    setSkills(updatedSkills);
  };

  const handleDownload = (format) => {
    if (format === 'pdf') {
      html2pdf().from(resumeRef.current).save('resume.pdf');
    } else if (format === 'doc') {
      const textContent = resumeRef.current.innerText || '';
      const doc = new Document({
        sections: [
          {
            children: [new Paragraph(textContent)],
          },
        ],
      });
      Packer.toBlob(doc).then((blob) => saveAs(blob, 'resume.docx'));
    }
  };

  const renderSection = () => {
    switch (activeSection) {
      case 'Header':
        return (
          <div>
            <h2>Let’s start with your header</h2>
            <form>
              <input placeholder="First Name" />
              <input placeholder="Surname" />
              <input placeholder="City" />
              <input placeholder="Country" />
              <input placeholder="Pin Code" />
              <input placeholder="Phone" />
            </form>
          </div>
        );
      case 'Experience':
        return (
          <div>
            <h2>Let’s work on your experience</h2>
            <form>
              <input placeholder="Job Title" />
              <input placeholder="Employer" />
              <input placeholder="City" />
              <input placeholder="Country" />
              <label>Start Date: <input type="date" /></label>
              <label>End Date: <input type="date" /></label>
              <label><input type="checkbox" /> I currently work here</label>
              <textarea placeholder="Brief Description" />
            </form>
          </div>
        );
      case 'Education':
        return (
          <div>
            <h2>Let’s talk about your education</h2>
            <form>
              <input placeholder="School Name" />
              <input placeholder="Location" />
              <input placeholder="Degree" />
              <input placeholder="Field of Study" />
              <input placeholder="Graduation Month" />
              <input placeholder="Graduation Year" />
              <label><input type="checkbox" /> I am still enrolled</label>
            </form>
          </div>
        );
      case 'Skills':
        return (
          <div>
            <h2>Time to showcase your skills</h2>
            <form>
              {skills.map((skill, index) => (
                <input
                  key={index}
                  placeholder={`Skill ${index + 1}`}
                  value={skill}
                  onChange={(e) => handleSkillChange(index, e.target.value)}
                />
              ))}
              <button type="button" onClick={handleAddSkill}>➕ Add More</button>
            </form>
          </div>
        );
      case 'Achievements':
        return (
          <div>
            <h2>Achievements, Awards, and Honors</h2>
            <form>
              <textarea placeholder="Awards, Accomplishments, Honors" />
              <textarea placeholder="Certifications and Licenses" />
              <textarea placeholder="Activities" />
            </form>
          </div>
        );
      case 'Additional':
        return (
          <div>
            <h2>Additional Information</h2>
            <form>
              <input placeholder="Languages" />
              <input placeholder="Website / Portfolio" />
              <textarea placeholder="References" />
            </form>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="resume-builder-container">
      <aside className="left-menu">
        {sections.map((section) => (
          <div
            key={section}
            className={`circle ${activeSection === section ? 'active' : ''}`}
            onClick={() => setActiveSection(section)}
            title={section}
          >
            {section[0]}
          </div>
        ))}
      </aside>

      <main className="right-section">
        <div className="section-content" ref={resumeRef}>
          {renderSection()}
        </div>

        {activeSection === 'Additional' && (
          <div className="download-buttons">
            <button onClick={() => handleDownload('pdf')}> Download PDF</button>
            <button onClick={() => handleDownload('doc')}> Download DOCX</button>
          </div>
        )}
      </main>
    </div>
  );
};

export default ResumeBuilder;
