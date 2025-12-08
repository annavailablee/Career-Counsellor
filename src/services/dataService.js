// Import the data from our local JSON files
import questionsData from '../data/questions.json';
import careersData from '../data/careers.json';

/**
 * Fetches the list of quiz questions.
 * @returns {Promise<Array>} - A promise that resolves to the array of questions.
 */
export const getQuestions = async () => {
  // Simulate a network request by using a Promise and a small delay
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(questionsData);
    }, 100); // 100ms delay to simulate network latency
  });
};

/**
 * Fetches the list of all available careers.
 * @returns {Promise<Array>} - A promise that resolves to the array of careers.
 */
export const getCareers = async () => {
  // Simulate a network request
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(careersData);
    }, 100);
  });
};