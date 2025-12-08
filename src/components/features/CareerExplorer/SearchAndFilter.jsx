import React, { useState, useEffect } from 'react';
import Card from '../../common/Card';
import Button from '../../common/Button';

const SearchAndFilter = ({ allTags, onFilterChange }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTags, setSelectedTags] = useState([]);

  // This effect will run whenever searchTerm or selectedTags changes
  // It calls the onFilterChange function passed down from the parent
  useEffect(() => {
    onFilterChange({ searchTerm, selectedTags });
  }, [searchTerm, selectedTags, onFilterChange]);

  const handleTagChange = (tag) => {
    setSelectedTags(prev =>
      prev.includes(tag)
        ? prev.filter(t => t !== tag) // Remove tag if already selected
        : [...prev, tag]             // Add tag if not selected
    );
  };

  const handleClearFilters = () => {
    setSearchTerm('');
    setSelectedTags([]);
  };

  return (
    <Card title="Search & Filter">
      <div className="search-filter-container">
        <div className="search-input-group">
          <label htmlFor="career-search">Search by Name or Description</label>
          <input
            id="career-search"
            type="text"
            className="search-input"
            placeholder="e.g., Python, Design, AI..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="filter-tags-group">
          <h4>Filter by Tags</h4>
          <div className="tags-list">
            {allTags.map(tag => (
              <label key={tag} className="tag-checkbox-label">
                <input
                  type="checkbox"
                  className="tag-checkbox"
                  checked={selectedTags.includes(tag)}
                  onChange={() => handleTagChange(tag)}
                />
                {tag}
              </label>
            ))}
          </div>
        </div>

        <Button onClick={handleClearFilters} variant="secondary" className="clear-filters-btn">
          Clear Filters
        </Button>
      </div>
    </Card>
  );
};

export default SearchAndFilter;