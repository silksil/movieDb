import { FETCH_MOVIES, RESET_STORE } from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_MOVIES:
      return [...state, ...action.payload.data.results];
    case RESET_STORE:
      return [];
    default:
      return state;
  }
}
