import questionsData from '../data/questions.json';

/**
 * Calculates career matches based on user's quiz answers.
 * @param {object} userAnswers - An object where keys are question IDs and values are the selected answer values (e.g., { q1: 'A', q2: 'C' }).
 * @param {Array} allCareers - The full list of career objects from careers.json.
 * @returns {Array} - An array of career objects, each with a new 'score' property, sorted by score in descending order.
 */
export const calculateMatches = (userAnswers, allCareers) => {
  // 1. Aggregate all tags from the user's answers
  const userTags = [];
  Object.values(userAnswers).forEach(answerValue => {
    const question = questionsData.find(q => q.answers.some(a => a.value === answerValue));
    if (question) {
      const selectedAnswer = question.answers.find(a => a.value === answerValue);
      userTags.push(...(selectedAnswer.tags || [])); // Use optional chaining in case tags are missing
    }
  });

  // 2. Calculate a score for each career based on matching tags
  const careerScores = allCareers.map(career => {
    const matchCount = career.tags.filter(tag => userTags.includes(tag)).length;
    return { ...career, score: matchCount };
  });

  // 3. Sort careers by score in descending order
  careerScores.sort((a, b) => b.score - a.score);

  // 4. Return the top 5 matches
  return careerScores.slice(0, 5);
};