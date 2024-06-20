import React from 'react';

const SearchBar = ({ search, onSearchChange }) => {
  return (
    <input
      type="text"
      placeholder="Search Pokémon"
      value={search}
      onChange={onSearchChange}
      className="search-bar"
    />
  );
};

export default SearchBar;
