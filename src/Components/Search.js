import React, { useState } from 'react';
import searchIcon from '../Assets/Icon.png';
import classes from './Search.module.css';

const SearchInput = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  // Function to handle input changes
  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  // Function to handle search when the search icon is clicked
  const handleSearch = () => {
    // Implement your search logic here using the 'query' state
    onSearch(query);
    console.log('Searching for:', query); // Corrected: Log the 'query' state variable
  };

  return (
    <div className={classes.searchContainer}>
      <input
        className={classes.searchInput}
        type="text"
        placeholder="What do you want to search"
        value={query}
        onChange={handleInputChange}
      />
      <img
        className={classes.searchIcon}
        src={searchIcon}
        alt="Search Icon"
        onClick={handleSearch}
      />
    </div>
  );
};

export default SearchInput;

