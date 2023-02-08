export function formatYen(num: number): string {
  return num.toLocaleString('ja-JP', { style: 'currency', currency: 'JPY' });
}

export function limitLength(string = '', limit = 0) {
  return string.substring(0, limit);
}

// capitalize first letter in string
export function capitalize(string = '') {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
