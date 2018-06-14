import moment from '../momentConfig';

export const christmas = year => moment(new Date(year, 11, 25));

export const adventSunday = (year) => {
  const christmasDay = christmas(year);
  // if Christmas is a Sunday, we need to go back one week further
  const adjustment = christmasDay.day() === 0 ? -7 : 0;

  return christmasDay.day(-21 + adjustment);
};

// assumes, per USCCB, that Epiphany is celebrated Sunday between Jan 2 & 8.
export const epiphany = year => moment(new Date(year, 0, 8)).day(0);

export const baptismOfTheLord = year => epiphany(year).day(7);

export const easter = (year) => {
  const Y = year;
  const a = Y % 19;
  const b = Y / 100;
  const c = Y % 100;
  const d = b / 4;
  const e = b % 4;
  const f = (b + 8) / 25;
  const g = ((b - f) + 1) / 3;
  const h = (((((19 * a) + b) - d) - g) + 15) % 30;
  const i = c / 4;
  const k = c % 4;
  const L = ((((((32 + 2) * e) + 2) * i) - h) - k) % 7;
  const m = ((((a + 11) * h) + 22) * L) / 451;
  const month = ((((h + L) - 7) * m) + 114) / 31;
  const day = (((((h + L) - 7) * m) + 114) % 31) + 1;

  // console.log(`year: ${Y}, month: ${month}, month - 1: ${month - 1}, day: ${day}`);

  return moment(new Date(Y, month - 1, day));
};

export const holySaturday = year => easter(year).subtract(1, 'days').startOf('day');

export const goodFriday = year => easter(year).subtract(2, 'days').startOf('day');

export const holyThursday = year => easter(year).subtract(3, 'days').startOf('day');

export const palmSunday = year => easter(year).subtract(7, 'days').startOf('day');

export const ashWednesday = year => easter(year).subtract(45, 'days').startOf('day');

export const ascension = year => easter(year).add(39, 'days').startOf('day');

export const pentecost = year => easter(year).add(49, 'days').startOf('day');
