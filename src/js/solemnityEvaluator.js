import moment from './momentConfig';
import ms from './moveableSolemnities';
import { momentNow, year } from './vars';
// import { year } from './vars';
// const momentNow = moment(new Date(2018, 11, 7));

let isSolemnity = false;
let isDayBeforeSolemnity = false;

if (momentNow.isSame(moment([year, 0, 1]), 'day')) isSolemnity = true;
else if (momentNow.isSame(moment([year, 5, 24]), 'day')) isSolemnity = true;
else if (momentNow.isSame(moment([year, 7, 15]), 'day')) isSolemnity = true;
else if (momentNow.isSame(moment([year, 11, 8]), 'day')) isSolemnity = true;
else if (momentNow.isSame(ms.momentStJoseph, 'day')) isSolemnity = true;
else if (momentNow.isSame(ms.momentAnnunciation, 'day')) isSolemnity = true;

else if (momentNow.isSame(moment([year, 11, 31]), 'day')) isDayBeforeSolemnity = true;
else if (momentNow.isSame(moment([year, 5, 23]), 'day')) isDayBeforeSolemnity = true;
else if (momentNow.isSame(moment([year, 7, 14]), 'day')) isDayBeforeSolemnity = true;
else if (momentNow.isSame(moment([year, 11, 7]), 'day')) isDayBeforeSolemnity = true;
else if (momentNow.isSame(ms.momentStJoseph.dayBefore(), 'day')) isDayBeforeSolemnity = true;
else if (momentNow.isSame(ms.momentAnnunciation.dayBefore(), 'day')) isDayBeforeSolemnity = true;

export default {
  isSolemnity,
  isDayBeforeSolemnity,
};
