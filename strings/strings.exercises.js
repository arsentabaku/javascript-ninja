// 1. Write a JavaScript function to check whether an `input` is a string or not.
function isString(valueToCheck) {
  if (typeof valueToCheck === "string" || valueToCheck instanceof String) {
    return true;
  } else {
    return false;
  }
}

console.log("1. Is value a string? => ", isString("123"));
// console.log("1. Is value a string? => ", isString(new String(123)));

// 2. Write a JavaScript function to check whether a string is blank or not.
function isStringBlank(stringToCheck) {
  if (stringToCheck === "") {
    return true;
  } else {
    return false;
  }
}

console.log("2. Is string blank? => ", isStringBlank(""));

// 3. Write a JavaScript function to split a string and convert it into an array of words.
function convertStringIntoArray(stringToConvert) {
  return stringToConvert.trim().split(" ");
}

console.log("3", convertStringIntoArray("Apple Orange Mango Kiwi"));

// 4. Write a JavaScript function to extract a specified number of characters from a string.
function extractSpecifiedNumberOfCharsFromAString(
  stringToExtract,
  numberOfCharsToExtract
) {
  return stringToExtract.slice(0, numberOfCharsToExtract);
}

console.log(
  "4. Extracted string => ",
  extractSpecifiedNumberOfCharsFromAString("Extract a number of chars", 5)
);

// 5. Write a JavaScript function to convert a string in abbreviated form.
function convertStringToAbbreviatedForm(stringToConvert) {
  const arrayOfStrings = stringToConvert.trim().split(" ");

  let abbreviatedString = "";
  for (let i = 0; i < arrayOfStrings.length; i++) {
    abbreviatedString += arrayOfStrings[i].charAt(0);
  }

  return abbreviatedString;
}

console.log(
  "5. Abbreviated form of given string is: ",
  convertStringToAbbreviatedForm("Software Engineering")
);

// 6. Write a JavaScript function to hide email addresses to protect from unauthorized user.
function protectEmailAddress(emailAddress) {
  const splittedEmailAddress = emailAddress.split("@");
  const splittedEmailPartOneHalf = splittedEmailAddress[0].slice(
    0,
    splittedEmailAddress[0].length / 2
  );

  return splittedEmailPartOneHalf + "...@" + splittedEmailAddress[1];
}

console.log(
  "6. Protected email is: ",
  protectEmailAddress("arsentabaku@gmail.com")
);

// 7. Write a JavaScript function to parameterize a string.
function parameterizeString(stringToParameterize) {
  const arrayOfStrings = stringToParameterize.toLowerCase().split(" ");
  let parameterizedString = "";

  for (let i = 0; i < arrayOfStrings.length; i++) {
    if (i === arrayOfStrings.length - 1) {
      parameterizedString += arrayOfStrings[i];
      continue;
    }

    parameterizedString += arrayOfStrings[i] + "-";
  }

  return parameterizedString;
}

console.log(
  "7. Parameterized string is: ",
  parameterizeString("Robin Singh from USA")
);

// 8. Write a JavaScript function to capitalize the first letter of a string.
function capitalizeFirstWordInAString(stringToCapitalize) {
  if (stringToCapitalize.length === 0) {
    return "ERROR - String to manipulate is undefined";
  }

  return (
    stringToCapitalize.charAt(0).toUpperCase() + stringToCapitalize.slice(1)
  );
}

console.log(
  "8. Capitalized string is: ",
  capitalizeFirstWordInAString("js string exercises")
);

// 9. Write a JavaScript function to capitalize the first letter of each word in a string.
function capitalizeEveryWordInAString(stringToCapitalize) {
  const arrayOfStrings = stringToCapitalize.toLowerCase().split(" ");
  let capitalizedString = "";

  for (let i = 0; i < arrayOfStrings.length; i++) {
    capitalizedString +=
      arrayOfStrings[i].charAt(0).toUpperCase() +
      arrayOfStrings[i].slice(1, arrayOfStrings[i].length) +
      " ";
  }

  return capitalizedString;
}

console.log(
  "9. Capitalized string is: ",
  capitalizeEveryWordInAString("js string exercises")
);

// 10. Write a JavaScript function that takes a string which has lower and upper case letters as a parameter and converts
// upper case letters to lower case, and lower case letters to upper case.
function swapCaseForEachChar(stringToSwapCase) {
  let swappedString = "";

  // NOTE: Spaces are considered as lowercase
  for (let i = 0; i < stringToSwapCase.length; i++) {
    if (stringToSwapCase[i] === stringToSwapCase[i].toLowerCase()) {
      swappedString += stringToSwapCase[i].toUpperCase();
    } else if (stringToSwapCase[i] === stringToSwapCase[i].toUpperCase()) {
      swappedString += stringToSwapCase[i].toLowerCase();
    }
  }

  return swappedString;
}

console.log(
  "10. Swaped string is: ",
  swapCaseForEachChar("AaB bcCd dDeE EEF Fff")
);

// 11. Write a JavaScript function to convert a string into camel case.
function camelizeString(stringToCamelize) {
  return stringToCamelize.replace(/\W+(.)/g, function (match, chr) {
    return chr.toUpperCase();
  });
}

console.log(
  "11. Camelized string is: ",
  camelizeString("best JavaScript exercises")
);

// 12. Write a JavaScript function to uncamelize a string.
function uncamelizeString(str, separator) {
  if (typeof separator == "undefined") {
    separator = " ";
  }

  return str.replace(/[A-Z]/g, function (char) {
    return separator + char.toLowerCase();
  });
}

console.log("12. Uncamelized string is: ", uncamelizeString("helloWoRld", "-"));

// 13. Write a JavaScript function to concatenates a given string n times (default is 1).
function concatenateStringNTimes(stringToConcatenate, numberOfConcatenations) {
  let concatenatedResult = "";

  for (let i = 0; i < numberOfConcatenations; i++) {
    concatenatedResult += stringToConcatenate;
  }

  return concatenatedResult;
}

console.log("13. Concatenated string is: ", concatenateStringNTimes("Name", 2));

// 14. Write a JavaScript function to insert a string within a string at a particular position (default is 1).
function insertStringAtGivenIndex(string, stringToBeAdded, index) {
  return (
    string.slice(0, index) +
    stringToBeAdded +
    string.slice(index, string.length)
  );
}

console.log(
  "14. Inserted string is: ",
  insertStringAtGivenIndex("This is a JS tutorial", "ADDED", 2)
);

// 15. Write a JavaScript function to humanized number (Formats a number to a human-readable string.)
function humanizeString(stringToHumanize) {
  if (stringToHumanize.charAt(stringToHumanize.length - 1) === "1") {
    return stringToHumanize + "st";
  } else if (stringToHumanize.charAt(stringToHumanize.length - 1) === "2") {
    return stringToHumanize + "nd";
  } else if (stringToHumanize.charAt(stringToHumanize.length - 1) === "3") {
    return stringToHumanize + "rd";
  } else {
    return stringToHumanize + "th";
  }
}

console.log("15. Humanized string is: ", humanizeString("2056"));

// 16. Write a JavaScript function to truncates a string if it is longer than the specified
// number of characters. Truncated strings will end with a translatable ellipsis sequence ("…")
// (by default) or specified characters.
function truncateString(stringToTruncate, maxLength, endingSequence) {
  if (stringToTruncate.length <= maxLength) {
    return stringToTruncate;
  }

  if (!endingSequence) {
    return stringToTruncate.slice(0, maxLength) + "...";
  }
  return stringToTruncate.slice(0, maxLength) + endingSequence;
}

console.log(
  "16. Truncated string is: ",
  truncateString("JS is very powerful and is being used everywhere", 25, "!!!")
);

// 17. Write a JavaScript function to chop a string into chunks of a given length.
function splitStringIntoChunksOfSpecificLength(stringToSplit, chunkLength) {
  let arrayOfSplittedStrings = [];

  for (let i = 0; i < stringToSplit.length - chunkLength; i += chunkLength) {
    arrayOfSplittedStrings.push(stringToSplit.slice(i, i + chunkLength));
  }

  return arrayOfSplittedStrings;
}

console.log(
  "17. Chunks of the splitted string are: ",
  splitStringIntoChunksOfSpecificLength("Mathematics", 3)
);

// 18. Write a JavaScript function to count the occurrence of a substring in a string.
function findNumberOfOccurrences(string, stringToCheckOccurrences) {
  return string.toLowerCase().match(new RegExp(stringToCheckOccurrences, "g"))
    .length;
}

console.log(
  "18. Number of occurrences is: ",
  findNumberOfOccurrences("The quick brown fox jumps over the lazy dog", "the")
);

// 19. Write a JavaScript function that can pad (left, right) a string to get to a determined length.
function padString(format, stringToPad, side) {
  if (
    stringToPad.length === format.length ||
    stringToPad.length > format.length
  ) {
    return stringToPad;
  }

  if (side === "l") {
    return (format + stringToPad).slice(format.length - stringToPad.length - 1);
  } else {
    return (stringToPad + format).slice(0, format.length);
  }
}

console.log("19. Padded string is: ", padString("0000000", "123", "r"));

// 20. Write a JavaScript function to get the part of a string before or after a specified character.
function getPartOfStringBeforeOrAfterSpecifiedChar(
  stringToTrim,
  charToCheck,
  space
) {
  if (space === "before") {
    return stringToTrim.substring(0, stringToTrim.indexOf(charToCheck));
  } else {
    return stringToTrim.substring(stringToTrim.indexOf(charToCheck));
  }
}

console.log(
  "20. Extracted string is: ",
  getPartOfStringBeforeOrAfterSpecifiedChar(
    "w3resource: JavaScript Exercises",
    ":",
    "after"
  )
);

// 21. Write a JavaScript function to alphabetize a given string.
function alphabetizeString(string) {
  return string.split("").sort().join("");
}

console.log("21. Alphabetized string is: ", alphabetizeString("United States"));

// 22. Write a JavaScript function to remove the first occurrence of a given 'search string' from a string.
function removeFirstOccurance(string, searchString) {
  var indexOfFirstOccurance = string.indexOf(searchString);
  return (
    string.slice(0, indexOfFirstOccurance) +
    string.slice(indexOfFirstOccurance + searchString.length)
  );
}

console.log(
  "22. String with first occurance removed is: ",
  removeFirstOccurance("The quick brown fox jumps over the lazy dog", "the")
);

// 23. Write a JavaScript function to find a word within a string.
function findNumberOfWords(string, searchString) {
  return string.match(new RegExp(searchString, "g")).length;
}

console.log(
  "23. Number of occurrences is: ",
  findNumberOfWords("aa, bb, cc, dd, aa", "aa")
);

// 24. Write a JavaScript function check if a string ends with specified suffix.
function checkIfStringEndsWithSuffix(string, suffix) {
  return string.slice((string.length - suffix.length), string.length)  === suffix;
}

console.log(
  "24. Does string ends with a suffix: ",
  checkIfStringEndsWithSuffix("JS PHP PYTHON", "PYT1HON")
);
