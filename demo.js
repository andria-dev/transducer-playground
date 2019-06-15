import dragonsJSON from './dragons.json';
import {
  tMap,
  tFilter,
  arrayReducer,
  stringReducer,
  objectReducer,
  compose
} from './index.js';

let dragons = dragonsJSON;
for (let i = 0; i < 10; ++i) {
  dragons = dragons.concat(dragons);
}

dragons.length; //?

const getDragonTitle = tMap(dragon => {
  if (dragon.size > 300) {
    return `${dragon.name} The Great`;
  } else if (dragon.size < 250) {
    return `${dragon.name} The Small`;
  }

  return dragon.name;
});
const upperCaseTransducer = tMap(value => value.toUpperCase());
const isGreatFilterTransducer = tFilter(name => name.includes('GREAT'));

const includeKeysFilterTransducer = (...keys) =>
  tFilter(([key]) => keys.includes(key));
const excludeKeysFilterTransducer = (...keys) =>
  tFilter(([key]) => !keys.includes(key));

dragons.reduce(
  compose(
    isGreatFilter,
    upperCase,
    getDragonTitle
  )(arrayReducer),
  []
); //?.
