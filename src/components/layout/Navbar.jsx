import React from 'react';
import Button from '../common/Button'; // Import the Button component

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        {/* The logo itself is usually best as a simple link, not a button */}
        <Button to="/" variant="secondary" className="logo-link">
          CSE Career Compass
        </Button>
      </div>
      <div className="navbar-nav">
        <Button to="/" variant="secondary">Home</Button>
        <Button to="/quiz" variant="secondary">Quiz</Button>
        <Button to="/explore" variant="secondary">Explore</Button>
      </div>
    </nav>
  );
};

export default NavBar;