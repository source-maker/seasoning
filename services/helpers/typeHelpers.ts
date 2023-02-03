// helper to overwrite properties of an existing type
export type Overwrite<T, U> = Omit<T, keyof U> & U;
