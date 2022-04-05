const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (arr instanceof Array) {
    const copy = arr.slice();
    for (let i = 0; i < copy.length; i++) {
      switch (copy[i]) {
        case '--discard-next':
          i === (copy.length - 1) ? copy.pop() : copy.splice((i + 1), 1);
          break;

        case '--discard-prev':
          i === 0 ? copy.shift() : copy.splice((i - 1), 2);
          break;

        case '--double-next':
          i === (copy.length - 1) ? copy.pop() : copy[i] = copy[i + 1];
          break;

        case '--double-prev':
          if (i === 0) {
            copy.shift()
          }
          else {
            copy[i - 1] === '--discard-next' ? copy.splice((i - 1), 2) : copy[i] = copy[i - 1];
          }
          break; 
      }
    }
    copy.forEach((item, index) => {
      if (item === '--discard-next') {
        copy.splice(index, 1);
      }
    });
    return copy;
  } 
  else {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
}

module.exports = {
  transform
};
