import React from 'react';
import './Services.css';

function Services() {
  return (
    <div className="services-container">
      <h2>My Services</h2>
      <p >
        I am currently open for work and available to take on new software development projects, freelance tasks, or part-time opportunities. With a solid background in full-stack development, databases, and enterprise software, I can contribute to your project from start to finish.
      </p>
      <p>
        Here's what I can help you with:
      </p>
      <ul className="services-info">
        <li>Full-Stack Web Application Development</li>
        <li>Database Design & Optimization (MS SQL Server, Oracle, MongoDB)</li>
        <li>Custom Reporting Solutions (Crystal Reports, SQL)</li>
        <li>Software Testing & Quality Assurance</li>
        <li>Bug Fixing and Application Support</li>
      </ul>
      <p>
        If you have a project or opportunity you'd like to discuss, feel free to reach out through the contact page. Let's build something great together!
      </p>
    </div>
  );
}

export default Services;
