import m from 'moment';
import { extendMoment } from 'moment-range';

const moment = extendMoment(m);

export const curDate = moment(new Date(2015, 0, 1)).startOf('day');
export const today = new Date();
export const year = today.getFullYear();
export const month = today.getMonth();
export const day = today.getDay();
export const momentNow = moment(today).startOf('day');
