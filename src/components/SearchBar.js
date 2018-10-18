import React, { Component } from 'react';

const SearchBar = ({ term, onSearchTermChange }) => {
  return (
    <div className="search-bar">
      <input
        className="shadow"
        value={ term }
        onChange={ event => onSearchTermChange(event.target.value) } />
    </div>
  );
}

export default(SearchBar);
