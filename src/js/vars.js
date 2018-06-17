import m from 'moment';
import { extendMoment } from 'moment-range';

const moment = extendMoment(m);

// TEST VARS //
export const today = new Date(2018, 4, 12);

// export const today = new Date();
export const year = today.getFullYear();
export const month = today.getMonth();
export const day = today.getDay();
export const momentNow = moment(today).startOf('day');
