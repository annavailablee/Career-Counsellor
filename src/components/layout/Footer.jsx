import React from 'react';
import Button from '../common/Button'; // Import the Button component

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} CSE Compass. All Rights Reserved.</p>
        <div className="footer-author">
          <p>Created by annavailablee</p>
          <Button 
            to="https://github.com/annavailable" 
            variant="secondary"
            className="footer-github-btn" // Add a specific class for fine-tuning if needed
          >
            GitHub
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;