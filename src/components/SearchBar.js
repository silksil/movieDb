import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMovies} from '../actions/index';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: ' ' };
  }

  onSearchTermChange(term) {
    this.setState({ term });
    this.props.fetchMovies(term);
  }

  render() {
    return (
      <div className="search-bar">
        <input
          value={ this.state.term }
          onChange={ event => this.onSearchTermChange(event.target.value)}/>
      </div>
    );
  }
}

export default connect(null, { fetchMovies })(SearchBar);
