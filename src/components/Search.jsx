import React from 'react';

export const Search = ({ searchQuery, handleSearchInputChange, handleSearchSubmit }) => {
  return (
      <form onSubmit={handleSearchSubmit} className="w-50 text-dark">
        <div className="form-floating rounded-3">
          <input
            type="text"
            className="form-control rounded-3"
            placeholder="Search Country..."
            value={searchQuery}
            onChange={handleSearchInputChange}
          />
          <label>Search Country</label>
        </div>
      </form>
  );
};