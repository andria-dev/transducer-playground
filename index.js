export const tMap = transform => reducer => {
  return (accumulator, currentItem) => {
    const processed = transform(currentItem);
    return reducer(accumulator, processed);
  };
};

export const tFilter = predicate => reducer => {
  return (accumulator, currentItem) => {
    if (predicate(currentItem)) {
      return reducer(accumulator, currentItem);
    }

    return accumulator;
  };
};

export const arrayReducer = (acc, item) => {
  acc.push(item);
  return acc;
};
export const stringReducer = (acc, item) => acc + item;
export const objectReducer = (acc, [key, value]) => ({ ...acc, [key]: value });

export const composeReducer = (acc, reducer) => val => acc(reducer(val));
export const compose = (...reducers) => reducers.reduceRight(composeReducer);

/* MUCH MUCH SLOWER
export function compose(...reducers) {
  let reducer;

  do {
    reducer = reducers.shift();
  } while (reducers.length);

  return reducer;
} */
