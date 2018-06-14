import moment from './momentConfig';
import { year } from './vars';

export const {
  epiphany,
  ashWednesday,
  baptismOfTheLord,
  palmSunday,
  holyThursday,
  easter,
  pentecost,
  ascension,
} = './adventjs/feasts';

export const {
  advent,
  triduum,
  secondChristmasSeason,
} = './adventjs/seasons';

// Advent
advent(year);
// Christmas season
// Jan 1 to Epiphany
export const christmasi = moment().range(
  new Date(year, 0, 1),
  epiphany(year).dayAfter(),
);

// Dec 25 to end of year. This is necessary because the Christmas
// season extends beyond the calendar year.
secondChristmasSeason(year);

// Christmas season from the Epiphany of the Lord until the Baptism of the Lord
export const christmasiii = moment().range(
  epiphany(year),
  baptismOfTheLord(year).dayAfter(),
);

// Week of Ash Wednesday (Wednesday, Thursday, and Friday)
ashWednesday(year);
export const thursafterashweds = ashWednesday(year).dayAfter();
export const friafterashweds = ashWednesday(year).dayAfter().dayAfter();

// Lent from the Saturday after Ash Wednesday until the saturday before the 3rd Sunday of Lent
export const lenti = moment().range(
  easter(year).subtract(43, 'days'),
  easter(year).subtract(28, 'days'),
);
// Lent from the Third Sunday of Lent until the Triduum
export const lentii = moment().range(
  palmSunday(year).subtract(3, 'weeks'),
  holyThursday(year),
);

// The Triduum (Adventjs should already do this)
triduum(year);

// Easter Octave
export const easteroctave = moment().range(
  easter(year),
  easter(year).add(1, 'weeks').add(1, 'days'),
);

// Easter from the End of the Octave to the Ascension
export const easteri = moment().range(
  easter(year).add(1, 'weeks').add(1, 'days'),
  ascension(year),
);

// Easter from the Ascension to Pentecost
export const easterii = moment().range(
  ascension(year),
  pentecost(year),
);
