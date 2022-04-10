const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let string = String(n); // 'n' f.e '152'
  let digitsArray = [+(string.slice(1)), +(string.slice(0, -1))]; // array [52, 15]
  for (let i = 1; i < string.length - 1; i++) {
    digitsArray.push(+(string.slice(0, i) + string.slice(i + 1))); // '1' + '2' -> '12'
  }
  digitsArray.sort((a, b) => b - a);
  return digitsArray[0];
}

module.exports = {
  deleteDigit
};
