import React from 'react';
import Card from '../../common/Card';

const QuestionCard = ({ question, selectedAnswer, onAnswerSelect }) => {
  if (!question) {
    return <p>Loading question...</p>;
  }

  return (
    <Card title={question.text}>
      <div className="question-options">
        {question.answers.map((option) => (
          <label
            key={option.value}
            className={`question-option ${
              selectedAnswer === option.value ? 'question-option--selected' : ''
            }`}
          >
            <input
              type="radio"
              name="quiz-question"
              value={option.value}
              checked={selectedAnswer === option.value}
              onChange={() => onAnswerSelect(question.id, option.value)}
              className="question-option-radio"
            />
            <span className="question-option-text">{option.text}</span>
          </label>
        ))}
      </div>
    </Card>
  );
};

export default QuestionCard;