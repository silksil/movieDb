import axios from 'axios';
import { API_KEY, API_URL}  from '../config.js';
import { FETCH_MOVIES, FETCH_MOVIE, RESET_STORE } from './types';

export function fetchMovies(term, page) {
  const urlPopular = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`;
  const urlSearch = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${term.trim()}&page=${page}`;
  let url = '';

  if (term.trim() === '') {
    url = urlPopular;
  } else {
    url = urlSearch;
  }

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

export function resetStore() {
  return { type: RESET_STORE };
}
