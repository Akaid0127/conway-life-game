import { getRandomStatus } from "./getRandomStatus";

export function getInitArr(a: number, b: number): number[][] {
  let arr: number[][] = Array.from({ length: a }, () =>
    Array.from({ length: b }, () => getRandomStatus())
  );
  return arr;
}
