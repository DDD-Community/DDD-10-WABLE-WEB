type Writeable<T> = { -readonly [P in keyof T]: T[P] };

export function isLastIndex<T>(index: number, array: T[]) {
  return Array.isArray(array) && index === array.length - 1;
}
