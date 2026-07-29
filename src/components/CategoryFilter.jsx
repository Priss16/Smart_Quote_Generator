import React from 'react';

// Dropdown to narrow the quote pool down to a single category, or "All".
function CategoryFilter({ categories, selected, onChange }) {
  return (
    <div className="category-filter">
      <select
        value={selected}
        onChange={(e) => onChange(e.target.value)}
        aria-label="Filter by category"
      >
        <option value="All">All Categories</option>
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CategoryFilter;
