const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  str = String(str);
  options = options === undefined ? {} : options;
  options.repeatTimes = options.repeatTimes === undefined ? 1 : Number(options.repeatTimes);
  options.separator = options.separator === undefined ? '+' : String(options.separator);
  options.addition = options.addition === undefined ? '' : String(options.addition);
  options.additionRepeatTimes = options.additionRepeatTimes === undefined ? 1 : Number(options.additionRepeatTimes);
  options.additionSeparator = options.additionSeparator === undefined ? '|' : String(options.additionSeparator);

  const additionWithSeparator = options.addition + options.additionSeparator;
  const repeatedAddWithSeparator = additionWithSeparator.repeat(options.additionRepeatTimes).slice(0, -(options.additionSeparator.length)); 
  const resultString = (str + repeatedAddWithSeparator + options.separator).repeat(options.repeatTimes).slice(0, -(options.separator.length));
  return resultString;
}

module.exports = {
  repeater
};
