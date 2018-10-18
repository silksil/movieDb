import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMovie } from '../actions/index';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import { IMAGE_URL } from '../config';
const placeholderImage = require('../assets/placeholder.png');


//the ark of lig

class VideoList extends Component {
  render() {
      console.log(placeholderImage)
    const movies = this.props.movies;

    return _.map(movies, movie => {
      // const image = IMAGE_URL ? `${IMAGE_URL}${movie.poster_path}` : placeholderImage;
      return (
        <li className="video-list" key={movie.id}>
          <Link className="video-item" to={`/movie/${movie.id}`}>
            <img src={placeholderImage} alt={`'Poster'${movie.title}`}/>
            <h1> {movie.title} </h1>
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
