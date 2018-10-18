import { combineReducers } from 'redux';
import movies from './reducer_movies';
import movie from './reducer_movie';

export default combineReducers({
  movies,
  movie,
})
