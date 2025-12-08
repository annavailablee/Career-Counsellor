import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../../common/Card';
import Button from '../../common/Button';
// Import the helper function
import { slugify } from '../../../utils/helpers';

const CareerCard = ({ career }) => {
  // Use the helper function to create the slug
  const careerSlug = slugify(career.roleName);

  return (
    <Card title={career.roleName}>
      <p className="career-card-description">{career.description}</p>
      
      <div className="career-card-tags">
        {career.tags.slice(0, 4).map((tag, index) => (
          <span key={index} className="career-card-tag">
            {tag}
          </span>
        ))}
      </div>

      <div className="career-card-actions">
        <Button to={`/career/${careerSlug}`} variant="primary">
          Learn More
        </Button>
      </div>
    </Card>
  );
};

export default CareerCard;