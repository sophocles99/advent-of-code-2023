const input = require("./input");
const inputLines = input.split("\n");

const FIRST_DIGIT_REGEX = /^\D*(\d)/;
const LAST_DIGIT_REGEX = /(\d)\D*$/;
const NUMBER_WORDS = {
  one: "1",
  two: "2",
  three: "3",
  four: "4",
  five: "5",
  six: "6",
  seven: "7",
  eight: "8",
  nine: "9",
};

const total = inputLines.reduce((acc, inputLine) => {
  let firstNumberWord = "";
  let lastNumberWord = "";
  let indexOfFirstNumberWord = Number.MAX_SAFE_INTEGER;
  let indexOfLastNumberWord = -1;

  for (const word in NUMBER_WORDS) {
    const indexOfCurrentWord = inputLine.indexOf(word);
    if (
      indexOfCurrentWord > -1 &&
      indexOfCurrentWord < indexOfFirstNumberWord
    ) {
      indexOfFirstNumberWord = indexOfCurrentWord;
      firstNumberWord = word;
    }
    const lastIndexOfCurrentWord = inputLine.lastIndexOf(word);
    if (
      lastIndexOfCurrentWord > -1 &&
      lastIndexOfCurrentWord > indexOfLastNumberWord
    ) {
      indexOfLastNumberWord = lastIndexOfCurrentWord;
      lastNumberWord = word;
    }
  }

  const firstDigit = inputLine.match(FIRST_DIGIT_REGEX)[1];
  const lastDigit = inputLine.match(LAST_DIGIT_REGEX)[1];
  const indexOfFirstDigit = inputLine.indexOf(firstDigit);
  const indexOfLastDigit = inputLine.lastIndexOf(lastDigit);

  let firstDigitString = "";
  let lastDigitString = "";
  if (indexOfFirstNumberWord < indexOfFirstDigit) {
    firstDigitString = NUMBER_WORDS[firstNumberWord];
  } else firstDigitString = firstDigit;
  if (indexOfLastNumberWord > indexOfLastDigit) {
    lastDigitString = NUMBER_WORDS[lastNumberWord];
  } else lastDigitString = lastDigit;

  return acc + Number(firstDigitString + lastDigitString);
}, 0);

console.log(total);
