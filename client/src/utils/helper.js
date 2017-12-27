import * as moment from "moment";
import {TIMESTAMP_ORDER, SCORE_ORDER, DEFAULT_ORDER } from './orderTypes'

export function capitalize(str = '') {
    return typeof str !== 'string'
        ? ''
        : str[0].toUpperCase() + str.slice(1);
};

export function formatDate(timestamp) {
    return moment(timestamp).format('Do MMM YYYY');
};

function sortByVoteScore(elements){
    return Array.isArray(elements)
        ? elements.sort((a, b) => b.voteScore - a.voteScore)
        : elements;
};

function sortByTimeStamp(elements){
    return Array.isArray(elements)
        ? elements.sort((a, b) => b.timestamp - a.timestamp)
        : elements;
};

export function sortBy(elements, order = DEFAULT_ORDER) {
    switch (order) {
        case SCORE_ORDER:
            return sortByVoteScore(elements);
        case TIMESTAMP_ORDER:
            return sortByTimeStamp(elements);
        default:
            return elements;
    }
};