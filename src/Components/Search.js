import React, { useState } from 'react';
import searchIcon from '../Assets/Icon.png';
import classes from './Search.module.css';

const SearchInput = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Function to handle input changes
  // const handleInputChange = (event) => {
  //   setSearchQuery(event.target.value);
  // };

  // Function to handle search when the search icon is clicked
  const handleSearch = () => {
    // Implement your search logic here using the 'searchQuery' state
    console.log('Searching for:', searchQuery);
  };

  return (
    <div className={classes.searchContainer}>
      <input
        className={classes.searchInput}
        type="text"
        placeholder="What do you want to search"
        value={searchQuery}
        // onChange={handleInputChange}
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
