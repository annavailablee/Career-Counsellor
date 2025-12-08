import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import careersData from '../../../data/careers.json';
import Button from '../../common/Button';
import Card from '../../common/Card';
// Import the helper function
import { slugify } from '../../../utils/helpers';

const CareerDetailPage = () => {
  const { roleName } = useParams(); // Gets the career name from the URL (e.g., 'data-scientist')
  const [career, setCareer] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Find the career by comparing the slugified role name with the URL parameter
    const foundCareer = careersData.find(
      (c) => slugify(c.roleName) === roleName
    );

    setCareer(foundCareer);
    setLoading(false);
  }, [roleName]); // Re-run this effect if the roleName in the URL changes

  if (loading) {
    return <p>Loading career details...</p>;
  }

  if (!career) {
    return (
      <div>
        <h2>Career Not Found</h2>
        <p>Sorry, we couldn't find a career matching that name.</p>
        <Button to="/explore" variant="secondary">Back to Explore</Button>
      </div>
    );
  }

  return (
    // ... rest of the component remains the same
    <div className="career-detail-page">
      <Button to="/explore" variant="secondary" className="back-button">
        &larr; Back to Explore
      </Button>

      <h1 className="career-detail-title">{career.roleName}</h1>
      
      {/* ... rest of the JSX ... */}
    </div>
  );
};

export default CareerDetailPage;