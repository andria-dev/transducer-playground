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
for (let i = 0; i < 3; ++i) {
  dragons = dragons.concat(dragons);
}

dragons.length; //?

const getDragonTitle = dragon => {
  if (dragon.size > 300) {
    return `${dragon.name} The Great`;
  } else if (dragon.size < 250) {
    return `${dragon.name} The Small`;
  }

  return dragon.name;
};
const upperCase = value => value.toUpperCase();
const isGreat = name => name.includes('GREAT');

const getDragonTitleTransducer = tMap(getDragonTitle);
const upperCaseTransducer = tMap(upperCase);
const isGreatFilterTransducer = tFilter(isGreat);

// const includeKeysFilterTransducer = (...keys) =>
//   tFilter(([key]) => keys.includes(key));
// const excludeKeysFilterTransducer = (...keys) =>
//   tFilter(([key]) => !keys.includes(key));

const dragonReducer = compose(
  isGreatFilterTransducer,
  upperCaseTransducer,
  getDragonTitleTransducer
)(arrayReducer);

// Transducers (SLOWEST)
dragons.reduce(dragonReducer, []);
//?.

// Array methods
dragons
  .map(getDragonTitle)
  .map(upperCase)
  .filter(isGreat);
//?.

// For loop (FASTEST)
(() => {
  const dragonNames = [];
  for (const dragon of dragons) {
    dragonNames.push(dragon.name);
  }
})(); //?.
