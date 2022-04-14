const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    if (!(arr.some(element => Array.isArray(element)))) { // if there are not subarrays in arr
      return 1;
    } 
    else {
      let depths = [];
      for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
          depths.push(1 + this.calculateDepth(arr[i]));
        }
      }
      depths.sort((a, b) => b - a);
      return depths[0];          
    }
  }
}

module.exports = {
  DepthCalculator
};
