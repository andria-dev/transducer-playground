import dragons from './dragons.json';
import { tMap, tFilter, arrayReducer } from './index.js';

const getDragonTitle = tMap(dragon => {
  if (dragon.size > 300) {
    return `${dragon.name} The Great`;
  } else if (dragon.size < 250) {
    return `${dragon.name} The Small`;
  }

  return dragon.name;
});
const upperCase = tMap(name => name.toUpperCase());
const greatFilter = tFilter(name => name.includes('GREAT'));

dragons.reduce(getDragonTitle(upperCase(greatFilter(arrayReducer))), []); //?
