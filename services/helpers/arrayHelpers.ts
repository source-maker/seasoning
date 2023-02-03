/* eslint-disable @typescript-eslint/no-explicit-any */
export function jsonToArray(json: any): { key: any; value: any }[] {
  const arr: any = [];
  Object.keys(json).forEach(function (key) {
    arr.push({ key: key, value: json[key] });
  });
  return arr;
}
