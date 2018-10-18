import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMovies, resetStore } from '../actions/index';
import _ from 'lodash';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: ' ' };
  }

  componentDidMount() {
    this.props.fetchMovies(this.state.term);
  }

  onSearchTermChange(term) {
    this.props.resetStore();
    this.setState({ term });
    this.props.fetchMovies(term);
  }

  render() {
    return (
      <div className="search-bar">
        <input
          className="shadow"
          value={ this.state.term }
          onChange={ event => this.onSearchTermChange(event.target.value)}/>
      </div>
    );
  }
}

export default connect(null, { fetchMovies, resetStore })(SearchBar);
