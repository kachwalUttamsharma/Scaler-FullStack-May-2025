const nestedArray = [1, [2, 3], [4, [5, 6]]];
// op : [1,2,3,4,5,6]

function flattenArray(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      const res = flattenArray(arr[i]); // [4, [5,6]] => [4,5,6]
      result.push(...res); // 4,5,6
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}

function flattenArrayReduce(arr) {
  return arr.reduce((flat, item) => {
    return flat.concat(Array.isArray(item) ? flattenArrayReduce(item) : item);
  }, []);
}

console.log(flattenArray(nestedArray));
console.log(flattenArrayReduce(nestedArray));
