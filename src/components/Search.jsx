import React from 'react';

export const Search = ({ searchQuery, handleSearchInputChange, handleSearchSubmit }) => {
  return (
    <div className="container d-flex justify-content-center input-group mb-3 p-3">
      <form onSubmit={handleSearchSubmit} className="w-75 text-dark">
        <div className="form-floating rounded-bottom-5">
          <input
            type="text"
            className="form-control rounded-bottom-5"
            placeholder="Search Country..."
            value={searchQuery}
            onChange={handleSearchInputChange}
          />
          <label>Search Country</label>
        </div>
      </form>
    </div>
  );
};