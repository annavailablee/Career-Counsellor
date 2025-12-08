import { useMemo, useState, useEffect } from 'react';
import { calculateMatches } from '../utils/matchingAlgorithm';
// Import the service function
import { getCareers } from '../services/dataService';

export const useCareerMatch = (answers) => {
  // We need to load careers data. We'll use state for this.
  const [allCareers, setAllCareers] = useState([]);

  useEffect(() => {
    const fetchCareers = async () => {
      const data = await getCareers();
      setAllCareers(data);
    };
    fetchCareers();
  }, []); // Runs only once on component mount

  const topMatches = useMemo(() => {
    // If there are no answers or no careers, don't calculate anything.
    if (!answers || Object.keys(answers).length === 0 || allCareers.length === 0) {
      return [];
    }
    // Call our pure function with the fetched careers
    return calculateMatches(answers, allCareers);
  }, [answers, allCareers]); // Re-calculate if answers or careers change

  return topMatches;
};