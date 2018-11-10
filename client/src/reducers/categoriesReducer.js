import * as types from '../actions/types';

const categories = (state = [], action) => {
  switch (action.type) {
    case types.FETCH_CATEGORIES:
      return action.data;
    default:
      return state;
  }
};

export default categories;
