import * as moment from 'moment';
import { TIMESTAMP_ORDER, SCORE_ORDER, DEFAULT_ORDER } from './orderTypes';

export const capitalize = (str = '') =>
  typeof str !== 'string' ? '' : str[0].toUpperCase() + str.slice(1);

export const formatDate = timestamp => moment(timestamp).format('Do MMM YYYY');

const sortByVoteScore = elements =>
  Array.isArray(elements)
    ? elements.sort((a, b) => b.voteScore - a.voteScore)
    : elements;

const sortByTimeStamp = elements =>
  Array.isArray(elements)
    ? elements.sort((a, b) => b.timestamp - a.timestamp)
    : elements;

export const sortBy = (elements, order = DEFAULT_ORDER) => {
  switch (order) {
    case SCORE_ORDER:
      return sortByVoteScore(elements);
    case TIMESTAMP_ORDER:
      return sortByTimeStamp(elements);
    default:
      return elements;
  }
};
