import moment from '../momentConfig';
import {
  epiphany,
  adventSunday,
  christmas,
  ashWednesday,
  baptismOfTheLord,
  palmSunday,
  holyThursday,
  easter,
  pentecost,
  ascension,
} from './feasts';

export const advent = year => (
  moment.range(
    adventSunday(year), // 4th Sunday before Christmas
    christmas(year),
  )
);

// have to split the christmas season because it crosses the year boundary.
export const firstChristmasSeason = year => (
  moment.range(
    moment(new Date(year, 0, 1)),
    baptismOfTheLord(year).dayAfter(), // ends Sunday after Epiphany, the Baptism of the Lord
  )
);

export const secondChristmasSeason = year => (
  moment.range(
    christmas(year),
    moment(new Date(year + 1, 0, 1)),
  )
);

export const thirdChristmasSeason = year => (
  moment.range(
    epiphany(year),
    baptismOfTheLord(year).dayAfter(),
  )
);

export const firstOrdinaryTime = year => (
  moment.range(baptismOfTheLord(year).dayAfter(), ashWednesday(year))
);

export const lent = year => (
  moment.range(ashWednesday(year), palmSunday(year))
);

export const holyWeek = year => (
  moment.range(palmSunday(year), holyThursday(year))
);

// Lent from the Saturday after Ash Wednesday until the saturday before the 3rd Sunday of Lent
export const lenti = year => (
  moment.range(easter(year).subtract(42, 'days'), easter(year).subtract(28, 'days'))
);

// Lent from the Third Sunday of Lent until the Triduum
export const lentii = year => (
  moment.range(palmSunday(year).subtract(3, 'weeks'), holyThursday(year))
);

// Easter Octave
export const easteroctave = year => (
  moment.range(easter(year), easter(year).add(1, 'weeks').add(1, 'days'))
);

// Easter from the End of the Octave to the Ascension
export const easteri = year => (
  moment.range(easter(year).add(1, 'weeks').add(1, 'days'), ascension(year))
);
// Easter from the Ascension to Pentecost
export const easterii = year => (
  moment.range(ascension(year), pentecost(year))
);

export const triduum = year => (
  moment.range(holyThursday(year), easter(year))
);

export const easterOctave = year => (
  moment.range(easter(year), easter(year).add(1, 'weeks').add(1, 'days'))
);

export const easterSeason = year => (
  moment.range(easter(year), pentecost(year).dayAfter())
);

export const secondOrdinaryTime = year => (
  moment.range(pentecost(year).dayAfter(), adventSunday(year))
);

export const seasonFuncs = [
  advent,
  firstChristmasSeason,
  secondChristmasSeason,
  firstOrdinaryTime,
  lent,
  holyWeek,
  triduum,
  easterSeason,
  easterOctave,
  secondOrdinaryTime,
];
export const seasons = {
  advent: 'Advent',
  firstChristmasSeason: 'fcs',
  secondChristmasSeason: 'Christmas',
  lent: 'Lent',
  holyWeek: 'Holy Week',
  triduum: 'Triduum',
  easterSeason: 'Easter Season',
  secondOrdinaryTime: 'Second Ordinary Time',
};

export const seasonOf = (date) => {
  const momentDate = moment(date);
  const year = momentDate.year();

  let result = '';

  for (let i = 0; i < seasonFuncs.length; i += 1) {
    if (seasonFuncs[i](year).contains(momentDate, true)) {
      result = seasonFuncs[i];
      break;
    }
  }

  return seasons[result];
};
