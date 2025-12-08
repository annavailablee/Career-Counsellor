import React, { useState, useEffect, useMemo } from 'react';
import CareerCard from '../components/features/CareerExplorer/CareerCard';
import SearchAndFilter from '../components/features/CareerExplorer/SearchAndFilter';
import careersData from '../data/careers.json';
import { debounce } from '../utils/helpers';

const ExplorePage = () => {
  // --- State Management ---
  const [allCareers, setAllCareers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTags, setSelectedTags] = useState([]);

  // --- Data Fetching ---
  useEffect(() => {
    setAllCareers(careersData);
  }, []);

  // --- Create a list of all unique tags for the filter checkboxes ---
  const allTags = useMemo(() => {
    const tags = new Set();
    allCareers.forEach(career => {
      career.tags.forEach(tag => tags.add(tag));
    });
    return Array.from(tags).sort(); // Return a sorted array of unique tags
  }, [allCareers]);

  // --- Filtering Logic ---
  const filteredCareers = useMemo(() => {
    let filtered = allCareers;

    // Filter by selected tags
    if (selectedTags.length > 0) {
      filtered = filtered.filter(career =>
        selectedTags.some(tag => career.tags.includes(tag))
      );
    }

    // Filter by search term
    if (searchTerm) {
      const lowerCaseSearchTerm = searchTerm.toLowerCase();
      filtered = filtered.filter(career =>
        career.roleName.toLowerCase().includes(lowerCaseSearchTerm) ||
        career.description.toLowerCase().includes(lowerCaseSearchTerm)
      );
    }

    return filtered;
  }, [allCareers, selectedTags, searchTerm]);

  // --- Debounced Search Handler ---
  // This prevents the filtering from running on every single keystroke
  const debouncedSearch = useMemo(
    () => debounce(value => setSearchTerm(value), 
    300), // 300ms delay
    []
  );

  const handleFilterChange = ({ searchTerm, selectedTags }) => {
    setSearchTerm(searchTerm);
    setSelectedTags(selectedTags);
    debouncedSearch(searchTerm);
  };

  return (
    <div className="explore-page">
      <div className="explore-header">
        <h1>Explore All Careers</h1>
        <p>Discover your path by searching and filtering through our database of {allCareers.length}+ tech careers.</p>
      </div>

      <div className="explore-content">
        <aside className="explore-sidebar">
          <SearchAndFilter
            allTags={allTags}
            onFilterChange={handleFilterChange}
          />
        </aside>

        <section className="explore-results">
          {filteredCareers.length > 0 ? (
            <div className="careers-grid">
              {filteredCareers.map(career => (
                <CareerCard key={career.id} career={career} />
              ))}
            </div>
          ) : (
            <div className="no-results">
              <h2>No careers found</h2>
              <p>Try adjusting your search or filters.</p>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default ExplorePage;