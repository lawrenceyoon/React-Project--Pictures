import React from 'react';
import './SearchBar.css';

const SearchBar = () => {
  return (
    <div className="SearchBar">
      <div className="ui segment">
        <form className="ui form">
          <div className="field">
            <label>Image Search: </label>
            <input type="text" placeholder="Search..." />
          </div>
        </form>
      </div>
    </div>
  );
};

export default SearchBar;