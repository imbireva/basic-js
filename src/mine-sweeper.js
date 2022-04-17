const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let matrixNumbers = [];
  for (let i = 0; i < matrix.length; i++) {
    let subarray = [];

    for (let j = 0; j < matrix[i].length; j++) {
      let resultNumber;

      if (i === 0) {
        if (j === 0) {
          resultNumber = Number(matrix[i][j + 1]) +
          Number(matrix[i + 1][j]) + Number(matrix[i + 1][j + 1]);
        }
        else if (j === matrix[i].length - 1) {
          resultNumber = Number(matrix[i][j - 1]) + Number(matrix[i + 1][j - 1]) +
          Number(matrix[i + 1][j]);
        }
        else {
          resultNumber = Number(matrix[i][j - 1]) + Number(matrix[i][j + 1]) +
          Number(matrix[i + 1][j - 1]) + Number(matrix[i + 1][j] + Number(matrix[i + 1][j + 1]));
        }
        subarray.push(resultNumber);        
      }

      else if (i === matrix.length - 1) {
        if (j === 0) {
          resultNumber = Number(matrix[i - 1][j]) +
          Number(matrix[i - 1][j + 1]) + Number(matrix[i][j + 1]);
        }
        else if (j === matrix[i].length - 1) {
          resultNumber = Number(matrix[i - 1][j]) + Number(matrix[i - 1][j - 1]) +
          Number(matrix[i][j - 1]);
        }
        else {
          resultNumber = Number(matrix[i - 1][j - 1]) + Number(matrix[i - 1][j]) +
          Number(matrix[i - 1][j + 1]) + Number(matrix[i][j - 1] + Number(matrix[i][j + 1]));
        }
        subarray.push(resultNumber);       
      }

      else {
        if (j === 0) {
          resultNumber = Number(matrix[i - 1][j]) +
          Number(matrix[i - 1][j + 1]) + Number(matrix[i][j + 1]) + Number(matrix[i + 1][j] + 
          Number(matrix[i + 1][j + 1]));
        }
        else if (j === matrix[i].length - 1) {
          resultNumber = Number(matrix[i - 1][j]) + Number(matrix[i - 1][j - 1]) +
          Number(matrix[i][j - 1]) + Number(matrix[i + 1][j]) + Number(matrix[i + 1][j - 1]);
        }
        else {
          resultNumber = Number(matrix[i - 1][j - 1]) + Number(matrix[i - 1][j]) +
          Number(matrix[i - 1][j + 1]) + Number(matrix[i][j - 1] + Number(matrix[i][j + 1])) + 
          Number(matrix[i + 1][j - 1]) + Number(matrix[i + 1][j]) + Number(matrix[i + 1][j + 1]);
        }
        subarray.push(resultNumber);        
      }
    }
    matrixNumbers.push(subarray);
  }
  return matrixNumbers;
}

module.exports = {
  minesweeper
};
