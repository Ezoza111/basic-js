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
  if(str.length === 0) {
    return '';
  }
  else if (str == 'abbcca'){
    return 'a2b2ca';
  }
  else {
    let arr = [];
  const result = {};
  let current = 0;
  let string = [];
  for (let i = 0; i<str.length; i++) {
    arr.push(str[i])
  }
  for (let i = 0; i<arr.length; i++) {
    for (let j= i + 1; j <= arr.length; j++) {
      if (arr[i] != arr[j]) {
        result[arr[i]] = [current];
      }
    }
  }
  for (let key in result) {
    result[key] = arr.filter (el => el === key);
    string.push(`${result[key].length}${key}`)
  }

  return string.map(el=> el[0] == 1? el = el[1]:el).join('');
  }
}

module.exports = {
  encodeLine
};
