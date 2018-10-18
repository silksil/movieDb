import { FETCH_MOVIES } from '../actions/types';
import { arrayToObject } from '../helpers/array_to_object';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_MOVIES:
      return arrayToObject(action.payload.data.results, 'id')
    default:
      return state;
  }
}
