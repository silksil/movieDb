import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchMovie, resetStore } from '../actions/index';
import { withRouter } from "react-router-dom";

class ShowMovie extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchMovie(id);
  }

  componentWillUnmount() {
    this.props.resetStore();
  }

  renderTrailer(trailers){
    if (!Array.isArray(trailers) || !trailers.length ) {
      return <div> No trailer available </div>;
    }
    return trailers.map(trailer => {
      const videoId = trailer.id;
      const videoKey = trailer.key;
      const url = `https://www.youtube.com/embed/${videoKey}`;

      return (
        <li key={videoId}>
          <iframe src={url}/>
        </li>
      );
    });
  }

  render() {
    const { movie } = this.props;
    if (movie.length == 0  ) {
      return <div className="loader"> loading </div>;
    }

    return (
      <div className="show-page">
        <h1> {movie.original_title} </h1>
        <p> {movie.overview} </p>
        <div>
          <h2> Trailers </h2>
          <ul className="video-list">
            {this.renderTrailer(movie.videos.results)}
          </ul>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ movie }) {
  return { movie };
}

export default connect(mapStateToProps, { fetchMovie, resetStore })(withRouter(ShowMovie));
