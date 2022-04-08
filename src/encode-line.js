const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let counter = 0;
  let result = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      counter++;
    } 
    else {
      counter++;
      (counter === 1) ? (result += str[i]) : (result = result + counter + str[i]);
      counter = 0;
    }  
  }
  return result;
}

module.exports = {
  encodeLine
};
