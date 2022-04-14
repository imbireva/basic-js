const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) { // domains = ['code.yandex.ru', 'music.yandex.ru', 'yandex.ru']
  let DNSStats = {};

  if (!domains.length) {  // if domains array is empty
    return DNSStats;     // returns empty object
  }
  
  let domainsCopy = domains.slice();

  domainsCopy = domainsCopy.map(domainString => {
    let reverseDomainArray = domainString.split('.').reverse();
    reverseDomainArray = reverseDomainArray.map(string => '.' + string);
    return reverseDomainArray;  // [ ['.ru', '.yandex', '.code'], ['.ru', '.yandex', '.music'], ['.ru', '.yandex'] ]
  });

  for (let i = 0; i < domainsCopy.length; i++) {
    let domain = '';
    for (let j = 0; j < domainsCopy[i].length; j++) {
      domain += domainsCopy[i][j];
      DNSStats[domain] = countDomains(domain, domainsCopy);
    }
  }

  function countDomains(domain, array) {
    let counter = 0;
    for (let i = 0; i < array.length; i++) {
      let string = array[i].join('');
      if (string.includes(domain)) {
        counter++;
      }
    }
    return counter;
  }

  return DNSStats;
}

module.exports = {
  getDNSStats
};
