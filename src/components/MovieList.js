import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMovie } from '../actions/index';
import { Link } from 'react-router-dom';
import { IMAGE_URL } from '../config';
import PropTypes from 'prop-types';

class MovieList extends Component {
  renderMovies(movies){
    return movies.map(movie => {
      return (
        <li key={movie.id}>
          <Link to={`/movie/${movie.id}`}>
            <div className="video-item shadow">
              <img className="poster shadow" src={`${IMAGE_URL}${movie.poster_path}`} alt={`'Poster'${movie.title}`}/>
              <h1> {movie.title} </h1>
            </div>
          </Link>
        </li>
      );
   });
 }
  render() {
    const movies = this.props.movies;

    if (!movies.length) {
      return null;
    }

    return (
      <div>
        <div className="video-list">
          {this.renderMovies(movies)}
        </div>
        <button type="submit" onClick={() => this.props.onLoadMore() }>
          Load more movies
        </button>
      </div>
    );
  }
}

function mapStateToProps({ movies }) {
  return { movies };
}

MovieList.propTypes = {
  movies: PropTypes.array.isRequired,
};

export default connect(mapStateToProps, { fetchMovie })(MovieList);
