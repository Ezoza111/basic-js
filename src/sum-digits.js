const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  function getSum(number) {
  let str =  number.toString();
  let arr = [];
  for (let i = 0; i< str.length; i++) {
   arr.push(str[i])
  }
  let sum = 0;
  function findSum (arr){
   for (let i = 0; i < arr.length; i++) {
    sum += Number(arr[i]);
   }
   return sum;
 }
 findSum(arr)
  return sum
}
let result = getSum(n)
if (result < 9) {
  return result
} else { return getSum(result)}
 }

module.exports = {
  getSumOfDigits
};
