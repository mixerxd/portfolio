import React from 'react';

const AboutMe = () => {
  return (
    <div className="content about-me">
      <h2>About Me</h2>
      <p>🇨🇳/🇵🇱 speaking Russian, Polish, Chinese and English.</p>
      <div className="bio-section">
        <h3>Background</h3>
        <p>Just doing it.</p>
      </div>
      
      <div className="skills-section">
        <h3>Skills</h3>
        <div className="skills-grid">
          <div className="skill-category">
            <h4>Frontend Languages</h4>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
            </ul>
          </div>
          <div className="skill-category">
            <h4>Backend Languages</h4>
            <ul>
              <li>TypeScript</li>
              <li>Go</li>
              <li>Kotlin</li>
            </ul>
          </div>
          <div className="skill-category">
            <h4>Tools</h4>
            <ul>
              <li>Git/GitHub</li>
              <li>Docker</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;