const nestedObj = {
  a: 1,
  b: {
    c: 2,
    d: {
      e: 3,
    },
  },
};

const op = {
  a: 1,
  "b.c": 2,
  "b.d.e": 3,
};

function flattenObject(obj, prefix = "", result = {}) {
  for (let key in obj) {
    if (typeof obj[key] === "object" && obj[key] !== null) {
      flattenObject(obj[key], prefix + key + ".", result);
    } else {
      result[prefix + key] = obj[key];
    }
  }
  return result;
}

console.log(flattenObject(nestedObj));
