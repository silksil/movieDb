import React, { Component } from 'react';
import SearchBar from './SearchBar'
import MovieList from './MovieList';
import { fetchMovies } from '../actions/index';

const Home = () => {
  return (
    <div>
      <div className="header">
        <h1> MovieTrail </h1>
        <h2> Your library for movie trailers </h2>
      </div>
      <SearchBar />
      <ul className="video-list">
        <MovieList />
      </ul>
    </div>
  );
}

export default(Home);
