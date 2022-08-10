import exp from 'constants';

import newMoonSrc from '../images/new.jpg';
import waxingCrescentSrc from '../images/waxing-crescent.jpg';
import firstQuarterSrc from '../images/first-quarter.jpg';
import waxingGibbousSrc from '../images/waxing-gibbous.jpg';
import fullMoonSrc from '../images/full.jpg';
import waningGibbousSrc from '../images/waning-gibbous.jpg';
import lastQuarterSrc from '../images/last-quarter.jpg';
import waningCrescentSrc from '../images/waning-crescent.jpg';

export function randomIntFromInterval(min: number, max: number): number {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}
// prettier-ignore
export type phaseType = | 'New Moon' | 'Waxing Crescent' | 'First Quarter' | 'Waxing Gibbous' | 'Full Moon' | 'Waning Gibbous' | 'Last Quarter' | 'Waning Crescent';

export function getPhaseAndImage(num: number): {
  phase: phaseType;
  phaseImg: string;
} {
  let phase: phaseType = 'New Moon';
  let phaseImg = newMoonSrc;

  if (num < 0.12) {
    phase = 'New Moon';
    phaseImg = newMoonSrc;
  } else if (num < 0.25) {
    phase = 'Waxing Crescent';
    phaseImg = waxingCrescentSrc;
  } else if (num < 0.38) {
    phase = 'First Quarter';
    phaseImg = firstQuarterSrc;
  } else if (num < 0.5) {
    phase = 'Waxing Gibbous';
    phaseImg = waxingGibbousSrc;
  } else if (num < 0.62) {
    phase = 'Full Moon';
    phaseImg = fullMoonSrc;
  } else if (num < 0.75) {
    phase = 'Waning Gibbous';
    phaseImg = waningGibbousSrc;
  } else if (num < 0.88) {
    phase = 'Last Quarter';
    phaseImg = lastQuarterSrc;
  } else if (num < 1) {
    phase = 'Waning Crescent';
    phaseImg = waningCrescentSrc;
  }

  return { phase, phaseImg };
}

const count = 0;
export const fetchData = async (
  url: string,
  setStateFn: React.Dispatch<React.SetStateAction<undefined>>,
): Promise<void> => {
  const response = await fetch(url);
  const data = await response.json();
  setStateFn(data);
};

export function getIngredientKeys() {
  const keysOfIngredient = [];
  for (let index = 1; index < 21; index += 1) {
    keysOfIngredient.push(`strIngredient${index}`);
  }
  return keysOfIngredient;
}

export const ids = {
  0: '53049',
  1: '52893',
  2: '52768',
  3: '52767',
  4: '52855',
  5: '52894',
  6: '52928',
  7: '52891',
  8: '52792',
  9: '52961',
  10: '52923',
  11: '52897',
  12: '52976',
  13: '52898',
  14: '52910',
  15: '52856',
  16: '52853',
  17: '52966',
  18: '52776',
  19: '52860',
  20: '52905',
  21: '52990',
  22: '52788',
  23: '52989',
  24: '52988',
  25: '52899',
  26: '52888',
  27: '52791',
  28: '53007',
  29: '52787',
  30: '52890',
  31: '52859',
  32: '53015',
  33: '52900',
  34: '52991',
  35: '52924',
  36: '52858',
  37: '52854',
  38: '52902',
  39: '52862',
  40: '52861',
  41: '52958',
  42: '52916',
  43: '53022',
  44: '53046',
  45: '52932',
  46: '52857',
  47: '52901',
  48: '52786',
  49: '53024',
  50: '52833',
  51: '53054',
  52: '52886',
  53: '52883',
  54: '52793',
  55: '53005',
  56: '52931',
  57: '52889',
  58: '52909',
  59: '52929',
  60: '52892',
  61: '52970',
  62: '53062',
  63: '52917',
};
