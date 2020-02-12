import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = () => {
  // state
  const [searchTerm, setsearchTerm] = useState("");

  // event handlers
  const onFormSubmit = (event) => {
    event.preventDefault();
  };

  const onInputChange = (event) => {
    setsearchTerm(event.target.value);
  };

  return (
    <div className="SearchBar">
      <div className="ui segment">
        <form className="ui form" onSubmit={onFormSubmit}>
          <div className="field">
            <label>Image Searchasdfasdf: </label>
            <input type="text" value={searchTerm} onChange={onInputChange} placeholder="Search..." />
          </div>
        </form>
      </div>
    </div>
  );
};

export default SearchBar;