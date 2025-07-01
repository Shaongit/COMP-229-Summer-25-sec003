import React from 'react';
import './Projects.css';
import bluechipImg from '../assets/Bluechip.png';
import policeImg from '../assets/pcc.png';
import musicImg from '../assets/musicstore.png';
import hotelImg from '../assets/Hotel.png';

const Projects = () => {
  return (
    <div className="projects">
      <h1>Professional Projects</h1>

      <div className="project">
        <img src={bluechipImg} alt="BLUECHIP" className="project-image" />
        <div className="project-details">
          <h2>BLUECHIP</h2>
          <p className="left-text">
            A stock broker back-office application widely used in Bangladesh, supporting stock trading, loan
            management, and real-time data integration with local stock exchanges. Built with ASP.NET Web Forms, C#,
            SQL Server, and Crystal Reports, it delivers a reliable solution for financial operations.
          </p>
        </div>
      </div>

      <div className="project">
        <img src={policeImg} alt="POLICE CLEARANCE" className="project-image" />
        <div className="project-details">
          <h2>POLICE CLEARANCE</h2>
          <p className="left-text">
            Developed the Police Clearance Certificate system for Bangladesh Police using Oracle, Oracle APEX, HTML,
            and CSS to streamline application processing and enhance user experience.
          </p>
        </div>
      </div>

      <h1>Academic Projects</h1>

      <div className="project">
        <img src={musicImg} alt="Music Store" className="project-image" />
        <div className="project-details">
          <h2>Music Store Management System</h2>
          <p className="left-text">
            Developed a full-stack application using Java Spring Boot, Oracle, and Next.js. Implemented database
            optimization techniques, achieving a 40% reduction in query execution time through effective indexing.
          </p>
        </div>
      </div>

      <div className="project">
        <img src={hotelImg} alt="Hotel Booking" className="project-image" />
        <div className="project-details">
          <h2>Hotel Booking System</h2>
          <p className="left-text">
            Built a hotel reservation platform using ASP.NET Web API, C#, SQL Server, and React.js, demonstrating solid
            understanding of backend integration and responsive frontend development.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
