import dragons from './dragons.json';

const map = transform => reducer => {
  return (accumulator, currentItem) => {
    const processed = transform(currentItem); //?
    return reducer(accumulator, processed); //?
  };
};

const arrayReducer = (acc, item) => acc.concat(item);

const getName = map(dragon => dragon.name);
const upperCaseName = map(name => name.toUpperCase());

// dragons.reduce(upperCaseName(getName(arrayReducer))) //?
getName(arrayReducer)([], { name: 'test' }); //?
