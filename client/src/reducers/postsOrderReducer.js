import * as types from '../actions/types';
import { DEFAULT_ORDER } from '../utils/orderTypes';

const postsOrder = (state = DEFAULT_ORDER, action) => {
    switch (action.type) {
      case types.SORT_POSTS:
        return action.value;
      default:
        return state;
    }
};

export default postsOrder;