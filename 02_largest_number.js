// # Largest Number
// #
// # Write a method that will take two numbers,
// # and return whichever is the largest.
// #
// # Difficulty:
// # 2/10
// #
// # Example:
// # largest_number(100,50) should return 100
// # largest_number(10,20) should return 20

const largest_number = (a, b) => { a > b ? return a : return b }

console.log(largest_number(100,50));
console.log(largest_number(10,20));
