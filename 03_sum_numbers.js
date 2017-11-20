// # Sum Numbers
// #
// # Write a method that will take an array of numbers,
// # and return their sum.
// #
// # Difficulty:
// # 3/10
// #
// # Example:
// # sum_numbers([1,1,1]) should return 3
// # sum_numbers([5,2,100,0,10]) should return 117

const sum_numbers = (array) => array.reduce((total, value) => { return total + value; }, 0);

console.log(sum_numbers([1,1,1]));
console.log(sum_numbers([5,2,100,0,10]));
