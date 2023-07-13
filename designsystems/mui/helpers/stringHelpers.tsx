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

// convert translation json to line break string
export function convertStringToJSX(text) {
  // Split the text by line break, then map each line to a JSX element
  const lines = text.split('\n').map((line, index) => (
    <span key={index}>
      {line}
      <br />
    </span>
  ));

  return <>{lines}</>;
}
