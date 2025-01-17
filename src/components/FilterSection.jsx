import React from 'react';
import FilterButton from './FilterButton';
import '../styles/FilterSection.css';

const FilterSection = ({ categories, statuses, activeFilters, onFilterChange }) => (
  <div className="filter-section">
    <input
      type="text"
      placeholder="Search claims..."
      className="filter-section__search"
    />
    <div className="filter-section__categories">
      {categories.map((category, index) => (
        <FilterButton
          key={index}
          label={category}
          active={activeFilters.categories.includes(category)}
          onClick={() => onFilterChange('categories', category)}
        />
      ))}
    </div>
    <div className="filter-section__statuses">
      {statuses.map((status, index) => (
        <FilterButton
          key={index}
          label={status}
          active={activeFilters.statuses.includes(status)}
          onClick={() => onFilterChange('statuses', status)}
        />
      ))}
    </div>
  </div>
);

export default FilterSection;
