import React from 'react';

const ProgressBar = ({ currentStep, totalSteps }) => {
  // Calculate the percentage of completion
  const progressPercentage = (currentStep / totalSteps) * 100;

  return (
    <div className="progress-bar-container">
      <div className="progress-bar-filler" style={{ width: `${progressPercentage}%` }}></div>
      <div className="progress-bar-text">
        Question {currentStep} of {totalSteps}
      </div>
    </div>
  );
};

export default ProgressBar;