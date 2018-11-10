import * as types from '../actions/types';

const comments = (state = [], action) => {
  switch (action.type) {
    case types.FETCH_COMMENTS:
      return [...action.data];
    case types.ADD_COMMENT:
      return [...state, action.data];
    case types.UPDATE_COMMENT:
      return state.map(comment =>
        action.data.id === comment.id ? action.data : comment
      );
    case types.DELETE_COMMENT:
      return state.filter(comment => comment.id !== action.value.id);
    default:
      return state;
  }
};

export default comments;
