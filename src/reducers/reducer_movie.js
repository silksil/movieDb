import { LOCATION_CHANGE } from 'react-router-redux';
import { FETCH_MOVIE, RESET_STORE } from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_MOVIE:
      return action.payload.data;
    case RESET_STORE:
      return [];
    default:
      return state;
  }
}
