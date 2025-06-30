import React from 'react';
import './Contact.css'; // Optional for styling

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact Me</h1>
      <p>If you’d like to connect or learn more about my work, feel free to reach out using the information below:</p>

      <ul className="contact-info">
        <li><strong>Email:</strong> <a href="mailto:shaon5310@gmail.com">shaon5310@gmail.com</a></li>
        <li><strong>Mobile:</strong> <a href="tel:+15062928357">+1 (506) 292-8357</a></li>
        <li><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/khaledaislam/" target="_blank" rel="noopener noreferrer">Visit my LinkedIn Profile</a></li>
      </ul>
    </div>
  );
};

export default Contact;
