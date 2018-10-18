import axios from 'axios';
import { API_KEY, API_URL}  from '../config.js';
import { FETCH_MOVIES, FETCH_MOVIE } from './types';

export function fetchMovies(term) {
  const url = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${term.trim()}&page=1`;
  const request = axios.get(url);

  return {
    type: FETCH_MOVIES,
    payload: request,
  };
}

export function fetchMovie(id) {
  const url = `${API_URL}movie/${id.trim()}?api_key=${API_KEY}&append_to_response=videos`;
  const request = axios.get(url);

  return {
    type: FETCH_MOVIE,
    payload: request,
  };
}