import moment from 'moment';

moment.fn.dayAfter = function dayAfter() {
  return this.add(1, 'days');
};

moment.fn.dayBefore = function dayBefore() {
  return this.subtract(1, 'days');
};
