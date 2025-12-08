import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/common/Card';
import Button from '../components/common/Button';

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="home-content">
        <Card title="Welcome to CSE Compass">
          <p>
            Find your perfect tech path- with guidance that actually gets you somewhere.
          </p>
          <div className="home-cta">
            {/* 
              The 'to' prop tells the Link where to navigate.
              It must be '/quiz' for this to work.
            */}
            <Link to="/quiz">
              <Button variant="primary">
                Find My Path
              </Button>
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default HomePage;