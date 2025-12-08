import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import CareerCard from './CareerCard';
import Button from '../../common/Button';

const ResultsPage = () => {
  // The 'matches' array is passed from the QuizPage when it navigates here
  const location = useLocation();
  const { matches } = location.state || { matches: [] };

  // This handles the case where a user navigates to /results directly
  if (!matches || matches.length === 0) {
    return (
      <div className="results-page no-results">
        <h2>No Results Found</h2>
        <p>It looks like you haven't taken the quiz yet.</p>
        <p>Find your path by taking the CSE Compass quiz!</p>
        <Link to="/quiz">
          <Button variant="primary">Take the Quiz</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="results-page">
      <div className="results-header">
        <h1>Your Top Career Matches</h1>
        <p>Based on your answers, here are the paths that seem like a great fit for you.</p>
        <Link to="/quiz">
          <Button variant="secondary">Retake Quiz</Button>
        </Link>
      </div>

      <div className="careers-grid">
        {matches.map((career) => (
          <CareerCard key={career.id} career={career} />
        ))}
      </div>
    </div>
  );
};

export default ResultsPage;