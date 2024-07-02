export default function cleanSet(set, startString) {
  if (startString.length > 0) {
    const filteredValues = Array.from(set).filter((value) => value.startsWith(startString));
    const cleanedValues = filteredValues.map((value) => value.substring(startString.length));
    return cleanedValues.join('-');
  }
  return '';
export default function cleanSet(set, startString) {
  const list = [];

  if (
    typeof set !== 'object'
    || typeof startString !== 'string'
    || startString.length === 0
  ) {
    return '';
  }

  for (const item of set) {
    if (item && item.startsWith(startString)) {
      list.push(item.slice(startString.length));
    }
  }

  return list.join('-');
}
