import moment from 'moment';
import { extendMoment } from 'moment-range';

moment.fn.dayAfter = function dayAfter() {
  return this.clone().add(1, 'days');
};

moment.fn.dayBefore = function dayBefore() {
  return this.clone().subtract(1, 'days');
};

export default extendMoment(moment);
