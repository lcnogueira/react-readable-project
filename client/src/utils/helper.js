import * as moment from "moment";

export function capitalize (str = '') {
    return typeof str !== 'string'
      ? ''
      : str[0].toUpperCase() + str.slice(1)
  }

export function formatDate(timestamp) {
    return moment(timestamp).format('Do MMM YYYY');
}