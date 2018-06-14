/* eslint max-len:0 */
import './js/advent';
import { momentNow, year, today } from './js/vars';
import {
  advent,
  firstChristmasSeason,
  secondChristmasSeason,
  thirdChristmasSeason,
  lenti,
  lentii,
  triduum,
  easterOctave,
  easteri,
  easterii,
  secondOrdinaryTime,
} from './js/adventjs/seasons';
import { isDayBeforeSolemnity, isSolemnity } from './js/solemnityEvaluator';
import {
  christmas,
  ashWednesday,
  easter,
  pentecost,
} from './js/adventjs/feasts';

// const advEx = moment(new Date(2018, 11, 8));
// const pxEx = moment(new Date(2018, 11, 29));
// const lentEx = moment(new Date(2018, 1, 16));

// ****************************************************** //
// ********************* Advent ************************* //
// ****************************************************** //

if (momentNow.within(advent(year))) {
  if (isDayBeforeSolemnity === true) console.log('adventvigilsolemn.html');
  else if (isSolemnity === true) console.log('adventsolemn.html');
  else if (today.getDay() === 6) console.log('adventsuni.html');
  else if (today.getDay() === 0) console.log('adventsunii.html');
  else if (today.getDay() === 1) console.log('adventmon.html');
  else if (today.getDay() === 2) console.log('adventtues.html');
  else if (today.getDay() === 3) console.log('adventweds.html');
  else if (today.getDay() === 4) console.log('adventthurs.html');
  else if (today.getDay() === 5) console.log('adventfri.html');
}

// ****************************************************** //
// ********************* Christmas ********************** //
// ****************************************************** //

// Christmas Eve
if (momentNow.isSame(christmas(year).dayBefore())) console.log('christmaseve.html');
// Christmas Day until the end of the year
if (momentNow.within(secondChristmasSeason(year))) console.log('nativityuntilepiphanysun.html');
// Christmas, Jan 1 to Epiphany
if (momentNow.within(firstChristmasSeason())) console.log('nativityuntilepiphanysun.html');
// // Christmas, Epiphany to Baptism
if (momentNow.within(thirdChristmasSeason())) console.log('nativityuntilepiphanysun.html');

// ****************************************************** //
// ************************ Lent ************************ //
// ****************************************************** //
// Week of Ash Weds
// if (momentNow.isSame(ashWednesday(year))) window.location.replace('ashweds.html');
// else if (momentNow.isSame(easter(year).subtract(44, 'days').startOf('day'))) window.location.replace('thursafterashweds.html');
// else if (momentNow.isSame(easter(year).subtract(43, 'days').startOf('day'))) window.location.replace('friafterashweds.html');


if (momentNow.isSame(ashWednesday(year))) console.log('ashweds.html');
else if (momentNow.isSame(easter(year).subtract(44, 'days').startOf('day'))) console.log('thursafterashweds.html');
else if (momentNow.isSame(easter(year).subtract(43, 'days').startOf('day'))) console.log('friafterashweds.html');

// Lent, until Saturday before 3rd Sunday
// if (momentNow.within(lenti)) {
//   if (isDayBeforeSolemnity === true) window.location.replace('lentisat.html');
//   else if (isSolemnity === true) window.location.replace('lentisun.html');
//   else if (today.getDay() === 6) window.location.replace('lentisat.html');
//   else if (today.getDay() === 0) window.location.replace('lentisun.html');
//   else if (today.getDay() === 1) window.location.replace('lentimon.html');
//   else if (today.getDay() === 2) window.location.replace('lentitues.html');
//   else if (today.getDay() === 3) window.location.replace('lentiweds.html');
//   else if (today.getDay() === 4) window.location.replace('lentithurs.html');
//   else if (today.getDay() === 5) window.location.replace('lentifri.html');
// };

if (momentNow.within(lenti)) {
  if (isDayBeforeSolemnity === true) console.log('lentisat.html');
  else if (isSolemnity === true) console.log('lentisun.html');
  else if (today.getDay() === 6) console.log('lentisat.html');
  else if (today.getDay() === 0) console.log('lentisun.html');
  else if (today.getDay() === 1) console.log('lentimon.html');
  else if (today.getDay() === 2) console.log('lentitues.html');
  else if (today.getDay() === 3) console.log('lentiweds.html');
  else if (today.getDay() === 4) console.log('lentithurs.html');
  else if (today.getDay() === 5) console.log('lentifri.html');
}

// Lent, 3rd Sunday until Triduum
// if (momentNow.within(lentii)) {
//   if (isDayBeforeSolemnity === true) window.location.replace('lentiisat.html');
//   else if (isSolemnity === true) window.location.replace('lentiisun.html');
//   else if (today.getDay() === 6) window.location.replace('lentiisat.html');
//   else if (today.getDay() === 0) window.location.replace('lentiisun.html');
//   else if (today.getDay() === 1) window.location.replace('lentiimon.html');
//   else if (today.getDay() === 2) window.location.replace('lentiitues.html');
//   else if (today.getDay() === 3) window.location.replace('lentiiweds.html');
//   else if (today.getDay() === 4) window.location.replace('lentiithurs.html');
//   else if (today.getDay() === 5) window.location.replace('lentiifri.html');
// }

if (momentNow.within(lentii)) {
  if (isDayBeforeSolemnity === true) console.log('lentiisat.html');
  else if (isSolemnity === true) console.log('lentiisun.html');
  else if (today.getDay() === 6) console.log('lentiisat.html');
  else if (today.getDay() === 0) console.log('lentiisun.html');
  else if (today.getDay() === 1) console.log('lentiimon.html');
  else if (today.getDay() === 2) console.log('lentiitues.html');
  else if (today.getDay() === 3) console.log('lentiiweds.html');
  else if (today.getDay() === 4) console.log('lentiithurs.html');
  else if (today.getDay() === 5) console.log('lentiifri.html');
}

// ****************************************************** //
// ********************* Triduum ************************ //
// ****************************************************** //
// if (momentNow.within(triduum(year))){
//   if (today.getDay() === 4) window.location.replace('holythurs.html');
//   else if (today.getDay() === 5) window.location.replace('goodfri.html');
//   else if (today.getDay() === 0) window.location.replace('holysat.html');
// };

if (momentNow.within(triduum(year))) {
  if (today.getDay() === 4) console.log('holythurs.html');
  else if (today.getDay() === 5) console.log('goodfri.html');
  else if (today.getDay() === 0) console.log('holysat.html');
}

// ****************************************************** //
// ********************* Easter ************************* //
// ****************************************************** //
// Easter Octave
// if (momentNow.within(easterOctave)) window.location.replace('easteroctaveii.html');
if (momentNow.within(easterOctave)) console.log('easteroctaveii.html');

// Easter, from Octave until Ascension
// if (momentNow.within(easteri)) {
//   if (isDayBeforeSolemnity === true) window.location.replace('easterisat.html');
//   else if (isSolemnity === true) window.location.replace('easterisun.html');
//   else if (today.getDay() === 6) window.location.replace('easterisat.html');
//   else if (today.getDay() === 0) window.location.replace('easterisun.html');
//   else if (today.getDay() === 1) window.location.replace('easterimon.html');
//   else if (today.getDay() === 2) window.location.replace('easteritues.html');
//   else if (today.getDay() === 3) window.location.replace('easteriweds.html');
//   else if (today.getDay() === 4) window.location.replace('easterithurs.html');
//   else if (today.getDay() === 5) window.location.replace('easterifri.html');
// }

if (momentNow.within(easteri)) {
  if (isDayBeforeSolemnity === true) console.log('easterisat.html');
  else if (isSolemnity === true) console.log('easterisun.html');
  else if (today.getDay() === 6) console.log('easterisat.html');
  else if (today.getDay() === 0) console.log('easterisun.html');
  else if (today.getDay() === 1) console.log('easterimon.html');
  else if (today.getDay() === 2) console.log('easteritues.html');
  else if (today.getDay() === 3) console.log('easteriweds.html');
  else if (today.getDay() === 4) console.log('easterithurs.html');
  else if (today.getDay() === 5) console.log('easterifri.html');
}

// Easter, from Ascension to Pentecost
// if (momentNow.within(easterii)) {
//   if (isDayBeforeSolemnity === true) window.location.replace('easteriisat.html');
//   else if (isSolemnity === true) window.location.replace('easteriisun.html');
//   else if (today.getDay() === 6) window.location.replace('easteriisat.html');
//   else if (today.getDay() === 0) window.location.replace('easteriisun.html');
//   else if (today.getDay() === 1) window.location.replace('easteriimon.html');
//   else if (today.getDay() === 2) window.location.replace('easteriitues.html');
//   else if (today.getDay() === 3) window.location.replace('easteriiweds.html');
//   else if (today.getDay() === 4) window.location.replace('easteriithurs.html');
//   else if (today.getDay() === 5) window.location.replace('easteriifri.html');
// }
if (momentNow.within(easterii)) {
  if (isDayBeforeSolemnity === true) console.log('easteriisat.html');
  else if (isSolemnity === true) console.log('easteriisun.html');
  else if (today.getDay() === 6) console.log('easteriisat.html');
  else if (today.getDay() === 0) console.log('easteriisun.html');
  else if (today.getDay() === 1) console.log('easteriimon.html');
  else if (today.getDay() === 2) console.log('easteriitues.html');
  else if (today.getDay() === 3) console.log('easteriiweds.html');
  else if (today.getDay() === 4) console.log('easteriithurs.html');
  else if (today.getDay() === 5) console.log('easteriifri.html');
}
// ****************************************************** //
// ******************* Pentecost ************************ //
// ****************************************************** //
// if (momentNow.within(pentecost(year))) window.location.replace('pentecost.html');
if (momentNow.within(pentecost(year))) console.log('pentecost.html');

// ****************************************************** //
// ********************* Ordinary ************************* //
// ****************************************************** //
// if (momentNow.within(secondOrdinaryTime(year))) {
//   if (isDayBeforeSolemnity === true) window.location.replace('otvigilsolemn.html');
//   else if (isSolemnity === true) window.location.replace('otsolemn.html');
//   else if (today.getDay() === 6) window.location.replace('otsuni.html');
//   else if (today.getDay() === 0) window.location.replace('otsunii.html');
//   else if (today.getDay() === 1) window.location.replace('otmon.html');
//   else if (today.getDay() === 2) window.location.replace('ottues.html');
//   else if (today.getDay() === 3) window.location.replace('otweds.html');
//   else if (today.getDay() === 4) window.location.replace('otthurs.html');
//   else if (today.getDay() === 5) window.location.replace('otfri.html');
// }
if (momentNow.within(secondOrdinaryTime(year))) {
  if (isDayBeforeSolemnity === true) console.log('otvigilsolemn.html');
  else if (isSolemnity === true) console.log('otsolemn.html');
  else if (today.getDay() === 6) console.log('otsuni.html');
  else if (today.getDay() === 0) console.log('otsunii.html');
  else if (today.getDay() === 1) console.log('otmon.html');
  else if (today.getDay() === 2) console.log('ottues.html');
  else if (today.getDay() === 3) console.log('otweds.html');
  else if (today.getDay() === 4) console.log('otthurs.html');
  else if (today.getDay() === 5) console.log('otfri.html');
}
