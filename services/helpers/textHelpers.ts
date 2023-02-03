export function formatYen(num: number): string {
  return num.toLocaleString('ja-JP', { style: 'currency', currency: 'JPY' });
}

export function limitLength(string = '', limit = 0) {
  return string.substring(0, limit);
}
