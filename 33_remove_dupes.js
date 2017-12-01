/* 
  
  Remove Dupes TDD

  This is a TDD challenge. Write the tests first.

  Try doing this without Googling!
  Use a .forEach loop and .includes to solve the problem.
  
  Syntax help: [1,2,3].includes(1) -> true, [1,2,3].includes(4) -> false

  removeDupes should take an array of strings, remove duplicates and return a new array.
  
  1. There's an empty test file in `/tests`. Reference other JS tests to get started.
  2. Write some tests for removeDupes. They should fail.
  3. Implement removeDupes, run your tests to check they pass.

  Beast mode:

  1. Following TDD, update removeDupes to work for numbers too.
  E.g. "1" and 1 should be treated as different values.

*/


<<<<<<< HEAD
const removeDupes = (input) => {
  return input.reduce((res, val) => {
    if (!res.includes(val)) {
      res.push(val)
    } 
    return res 
  }, [])
}

// console.log(removeDupes(['1','2','3']))
// console.log(removeDupes(['a','b','1','1']))
=======
const removeDupes = (input) {

}
>>>>>>> 8ba17f26e018640bf56bbe2c4e2bb18072d5228c

// Export removeDupes so we can test it!
module.exports = removeDupes;