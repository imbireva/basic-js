const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(inputString) {
  const splitNumbers = inputString.split('-');

  const possibleNumbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const possibleLetters = ['A', 'B', 'C', 'D', 'E', 'F'];

  if (splitNumbers.length === 6) {
    if (splitNumbers.every(str => str.length === 2)) {
      if (splitNumbers.every(str => {
        return ((possibleNumbers.includes(str[0]) || possibleLetters.includes(str[0])) &&
        possibleNumbers.includes(str[1]) || possibleLetters.includes(str[1]));
      })) {
        return true;
      }
    }
  }
  return false;
}

module.exports = {
  isMAC48Address
};
