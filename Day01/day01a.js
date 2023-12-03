const input = require("./input");
const inputLines = input.split("\n");

const FIRST_DIGIT_REGEX = /^\D*(\d)/;
const LAST_DIGIT_REGEX = /(\d)\D*$/;

const total = inputLines.reduce((acc, inputLine) => {
  const firstDigit = inputLine.match(FIRST_DIGIT_REGEX)[1];
  const lastDigit = inputLine.match(LAST_DIGIT_REGEX)[1];
  return acc + Number(firstDigit + lastDigit);
}, 0);

console.log(total);
