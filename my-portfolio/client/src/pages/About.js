import React from 'react';
import './About.css';
import profilePic from '../assets/khaleda.jpg'; // Ensure this path is correct based on your project structure

function About() {
  return (
    <div className="about-container">
      <img src={profilePic} alt="Khaleda Islam" className="about-photo" />
      <div className="about-text">
        <h2>About Me</h2>
        <p className="center-text">
          I am an experienced Software Engineer with a strong background in the information technology and services industry. I have hands-on experience as both a Software Developer and SQL Developer, specializing in building and supporting enterprise solutions across sectors like ERP, the Stock Market, and productivity tools.
        </p>
        <p>
          I am skilled in MS SQL Server, Oracle, MongoDB, C#, Java, React.js, Crystal Reports, IIS, and Object-Oriented Programming (OOP). As an Oracle Certified Professional (OCP) and Oracle Certified Associate (OCA), I bring a high level of technical expertise and commitment to quality in every project I take on.
        </p>
        <p>
          Passionate about solving complex problems and delivering impactful software solutions, I thrive in dynamic environments where innovation and collaboration drive success.
        </p>

        <p>
          <a 
            href="/Resume_Khaleda_Islam.pdf" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="resume-link"
          >
            View My Resume (PDF)
          </a>
        </p>
      </div>
    </div>
  );
}

export default About;
