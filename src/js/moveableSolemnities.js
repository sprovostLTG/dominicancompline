import moment from './momentConfig';
import { year } from './vars';
import { holyWeek, triduum } from './adventjs/seasons';
import { palmSunday, easter } from './adventjs/feasts';

let momentStJoseph = moment(new Date(year, 2, 19));
let momentAnnunciation = moment(new Date(year, 2, 25));

// If the Feast of St. Joseph falls within Holy week,
// it is moved to the Saturday before Palm Sunday.
if (momentStJoseph.within(holyWeek(year)) || momentStJoseph.within(triduum(year)) || momentStJoseph.isSame(easter(year), 'day')) {
  momentStJoseph = palmSunday(year).subtract(1, 'days');
}

// If the Ascension falls within holy week, it is moved to the Monday after the octave of Easter.
if (momentAnnunciation.within(holyWeek(year)) || momentAnnunciation.within(triduum(year)) || momentAnnunciation.isSame(easter(year), 'day')) {
  momentAnnunciation = easter(year).add(1, 'weeks').add(1, 'days');
}

export default {
  momentStJoseph,
  momentAnnunciation,
};
