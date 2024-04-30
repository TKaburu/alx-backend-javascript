export default function cleanSet(set, startString) {
  // Check the type for set
  if (typeof set !== 'object' || typeof startString !== 'string' || startString.length === 0) {
    return '';
  }
  const list = [];
  for (const value of set) {
    if (typeof value === 'string' && value.startsWith(startString)) {
      list.push(value.slice(startString.length));
    }
  }
  return list.join('-');
}
