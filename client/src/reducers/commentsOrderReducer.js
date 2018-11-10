import * as types from '../actions/types';
import { DEFAULT_ORDER } from '../utils/orderTypes';

const commentsOrder = (state = DEFAULT_ORDER, action) => {
  switch (action.type) {
    case types.SORT_COMMENTS:
      return action.value;
    default:
      return state;
  }
};

export default commentsOrder;
