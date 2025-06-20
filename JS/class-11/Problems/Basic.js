// Write a function convertTemperature(temp, unit) that:
//   Converts Celsius to Fahrenheit and vice versa.
//   Returns the converted temperature.
//   Example: convertTemperature(100, "C") → 212F.

function CelToFah(celsius) {
  return (celsius * 9) / 5 + 32;
}

function FahToCel(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

function convertTemperature(temp, unit) {
  if (unit === "C") {
    return CelToFah(temp) + "F";
  } else if (unit === "F") {
    return FahToCel(temp) + "C";
  } else {
    return "Invalid unit, please pass C or F";
  }
}

// console.log(convertTemperature(100, "C"));
// console.log(convertTemperature(32, "F"));
// console.log(convertTemperature(40, "A"));

// -----------------------------------------------------------

// Create a function reverseWords(sentence) that:
//     Takes a string sentence.
//     Returns a new string where the order of words is reversed.
//     Example: "Hello world" → "world Hello".
// Approach: Think of a way to convert the string into an array of words.

function reverseWords(sentence) {
  const words = sentence.split(" ");
  const reversed = [];

  while (words.length > 0) {
    // console.log(words.pop());
    reversed.push(words.pop());
  }
  return reversed.join(" ");
}

console.log(reverseWords("Hello world")); // "world Hello"
console.log(reverseWords("JavaScript is fun")); // "fun is JavaScript"
