import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchBar from './SearchBar'
import MovieList from './MovieList';
import { fetchMovies, resetStore } from '../actions/index';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      page: 1,
    };
    this.videoSearch = this.videoSearch.bind(this);
    this.loadMore = this.loadMore.bind(this);
  }

  componentDidMount() {
    this.props.fetchMovies(this.state.term);
  }

  videoSearch(term){
    this.props.resetStore();
    this.setState({ page: 1, term }, () => {
      this.props.fetchMovies(this.state.term, this.state.page);
    })
  };

  loadMore(){
    this.setState({ page: this.state.page + 1 }, () => {
      this.props.fetchMovies(this.state.term, this.state.page);
    });
  }

  render() {
    return (
      <div className="home">
        <div className="header">
          <h1> MovieTrail </h1>
          <h2> Your library for movie trailers </h2>
        </div>
        <SearchBar
          onSearchTermChange={this.videoSearch}
          term={this.state.term} />
        <MovieList onLoadMore={this.loadMore} />
      </div>
    );
  }
}

export default connect(null, { fetchMovies, resetStore })(Home);
