/*
  Sum finder

  This function takes two arguments:
  numbers (an array of integers) and sum (an integer).

  Return true if any two numbers in the array can be added together to
  equal sum. Otherwise return false.

  For example:
  sumFinder([1,1], 2) -> true (1 and 1 = 2)
  sumFinder([1,3], 2) -> false (no two numbers sum to 2)
  sumFinder([1,8,9,5], 6) -> true (5 and 1 = 6)

  Tests: mocha tests/37_sum_finder_test.js

  Beast mode:
  - What is the time complexity of your algorithm?
  - Get your algorithm working with strings and integers ([1,"2",3,"4"])
  - Strip non-numbers from the array first. E.g. keep 3 and "3" but remove "a"

*/

const sumFinder = (numbers, sum) => {
  // Your code here
  let result = false
  const numSum = (num1, num2) => {return num1+num2}
  numbers.forEach((number1, index1) => {
    numbers.forEach((number2, index2) => {
      if (index1 != index2) {
        let sumNumber = number1 + number2
        if (sumNumber === sum) {
          result = true
        } 
      }
    })
  })
  return result
}

console.log(sumFinder([1,1], 2))
console.log(sumFinder([1,3], 2))
console.log(sumFinder([1,8,9,5], 6))

module.exports = sumFinder;
