import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchBar from './SearchBar'
import MovieList from './MovieList';;

class Home extends Component {
  render() {
    return(
      <div>
        <SearchBar />
        <MovieList />
      </div>
    );
  }
}

export default(Home);
