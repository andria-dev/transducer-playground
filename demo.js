import dragons from './dragons.json';
import { tMap, arrayReducer } from './index.js';

const getDragonTitle = tMap(dragon => {
  if (dragon.size > 300) {
    return `${dragon.name} The Great`;
  } else if (dragon.size < 250) {
    return `${dragon.name} The Small`;
  }

  return dragon.name;
});
const upperCase = tMap(name => name.toUpperCase());

dragons.reduce(getDragonTitle(upperCase(arrayReducer)), []);
