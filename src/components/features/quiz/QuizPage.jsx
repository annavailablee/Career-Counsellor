import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import questionsData from '../../../data/questions.json';
import { useCareerMatch } from '../../../hooks/useCareerMatch';

// Import our components
import ProgressBar from './ProgressBar';
import QuestionCard from './QuestionCard';
import Button from '../../common/Button';

const QuizPage = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  // --- Data Fetching ---
  useEffect(() => {
    setQuestions(questionsData);
    setLoading(false);
  }, []);

  // --- Derived State ---
  const currentQuestion = questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === questions.length - 1;
  const hasSelectedAnswer = answers[currentQuestion?.id];

  // --- Event Handlers ---
  const selectAnswer = (questionId, answerValue) => {
    setAnswers(prev => ({ ...prev, [questionId]: answerValue }));
  };

  const nextQuestion = () => {
    if (!isLastQuestion) {
      setCurrentQuestionIndex(prev => prev + 1);
    }
  };

  const previousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };

  // --- CORRECTED: Move the hook call to the top level ---
  const matches = useCareerMatch(answers); // <-- MOVED HERE

  const handleSubmit = () => {
    // The hook is already called, so we just need to navigate now.
    navigate('/results', { state: { matches } });
  };

  // --- Rendering Logic ---
  if (loading) return <p>Loading Quiz...</p>;
  if (error) return <p style={{ color: 'red' }}>{error}</p>;

  return (
    <div className="quiz-page">
      <ProgressBar
        currentStep={currentQuestionIndex + 1}
        totalSteps={questions.length}
      />

      <QuestionCard
        question={currentQuestion}
        selectedAnswer={answers[currentQuestion?.id]}
        onAnswerSelect={selectAnswer}
      />

      <div className="quiz-navigation">
        <Button
          onClick={previousQuestion}
          disabled={currentQuestionIndex === 0}
          variant="secondary"
        >
          Previous
        </Button>

        {isLastQuestion ? (
          <Button
            onClick={handleSubmit}
            disabled={!hasSelectedAnswer}
            variant="primary"
          >
            Submit Quiz
          </Button>
        ) : (
          <Button
            onClick={nextQuestion}
            disabled={!hasSelectedAnswer}
            variant="primary"
          >
            Next
          </Button>
        )}
      </div>
    </div>
  );
};

export default QuizPage;