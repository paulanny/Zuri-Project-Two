import React, { useState } from "react";
import searchIcon from "../Assets/Icon.png";
import classes from "./Search.module.css";

const SearchInput = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };
  const handleSearch = () => {
    onSearch(query);
    console.log("Searching for:", query);
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
