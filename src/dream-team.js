const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let letters = [];
  let result;
  if (members instanceof Array && members.length > 0) {
    members.forEach((item) => {
      if (typeof item === 'string') {
        item = item.trim(); // очищаем каждую строку от пробелов в начале и конце
        item = item.slice(0, 1); // получаем вырезанные первые буквы
        item = item.toUpperCase(); // переводим в верхний регистр
        letters.push(item); // каждую букву помещаем в массив
        letters.sort(); // сортировка
        result = letters.join(''); // в результате - строка со всеми элементами массива, разделенными пустой строкой
      }
    })
  } 
  else {
    result = false;
  }
  return result;
}

module.exports = {
  createDreamTeam
};
