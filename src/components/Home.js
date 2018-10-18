import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchBar from './SearchBar'
import MovieList from './MovieList';;

class Home extends Component {
  render() {
    return(
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
}

export default(Home);
