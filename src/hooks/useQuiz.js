import { useState, useEffect, useCallback } from 'react';
// Import the service function
import { getQuestions } from '../services/dataService';

// The rest of the hook remains the same, but the data fetching part changes
export const useQuiz = (onSubmit) => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // --- Data Fetching (Updated) ---
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Use the service to get questions
        const data = await getQuestions();
        setQuestions(data);
      } catch (err) {
        setError('Failed to load quiz questions.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // ... the rest of the hook remains exactly the same ...
  const currentQuestion = questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === questions.length - 1;
  const hasSelectedAnswer = answers[currentQuestion?.id];

  const selectAnswer = useCallback((questionId, answerValue) => {
    setAnswers(prev => ({ ...prev, [questionId]: answerValue }));
  }, []);

  const nextQuestion = useCallback(() => {
    if (!isLastQuestion) {
      setCurrentQuestionIndex(prev => prev + 1);
    }
  }, [isLastQuestion]);

  const previousQuestion = useCallback(() => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  }, [currentQuestionIndex]);

  const submitQuiz = useCallback(() => {
    if (onSubmit) {
      onSubmit(answers);
    }
  }, [onSubmit, answers]);

  return {
    questions,
    currentQuestion,
    currentQuestionIndex,
    answers,
    loading,
    error,
    isLastQuestion,
    hasSelectedAnswer,
    selectAnswer,
    nextQuestion,
    previousQuestion,
    submitQuiz,
  };
};