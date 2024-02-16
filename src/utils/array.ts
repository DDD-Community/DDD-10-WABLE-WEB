type Writeable<T> = { -readonly [P in keyof T]: T[P] };

function isLastIndex<T>(index: number, array: T[]) {
  return Array.isArray(array) && index === array.length - 1;
}

function chunk(array: any[], size: number) {
  const arr = [];

  for (let i = 0; i < array.length; i += size) {
    arr.push(array.slice(i, i + size));
  }

  return arr;
}

export { isLastIndex, chunk };
