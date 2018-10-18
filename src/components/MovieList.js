import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMovie } from '../actions/index';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import { IMAGE_URL } from '../config';

class VideoList extends Component {
  render() {
    const movies = this.props.movies;
    return _.map(movies, movie => {
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
}

function mapStateToProps({ movies }) {
  return { movies };
}

export default connect(mapStateToProps, { fetchMovie })(VideoList);
