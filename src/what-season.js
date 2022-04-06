const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  const seasons = {
    winter: [11, 0, 1],
    spring: [2, 3, 4],
    summer: [5, 6, 7],
    autumn: [8, 9, 10],
  };
  if (date === undefined) {
    return 'Unable to determine the time of year!';
  }
  else if (date instanceof Date && Object.getOwnPropertySymbols(date).length === 0) {
    const month = date.getMonth();
    for (let key in seasons) {
      if (seasons[key].includes(month)) {
        return key;
      }
    }
  }
  throw new Error('Invalid date!');
}

module.exports = {
  getSeason
};
