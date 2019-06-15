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

export const arrayReducer = (acc, item) => acc.concat(item);
export const stringReducer = (acc, item) => acc + item;
export const objectReducer = (acc, [key, value]) => ({ ...acc, [key]: value });
