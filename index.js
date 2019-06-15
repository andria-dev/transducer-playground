export const tMap = transform => reducer => {
  return (accumulator, currentItem) => {
    const processed = transform(currentItem);
    return reducer(accumulator, processed);
  };
};

export const arrayReducer = (acc, item) => acc.concat(item);
export const stringReducer = (acc, item) => acc + item;
export const objectReducer = (acc, [key, value]) => ({ ...acc, [key]: value });
