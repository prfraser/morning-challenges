// # Count Letters
// #
// # Write a method that will take a string, keep count
// # of each letter and return the totals as a hash.
// #
// # Difficulty:
// # 5/10
// #
// # Example:
// # count_letters("hello") should return {"h"=>1, "e"=>1, "l"=>2, o=>1}
// # count_letters("abcba") should return {"a"=>2, "b"=>2, "c"=>1}

const count_letters = (string) => {
  // Your code here
  return string.split('').reduce((result, letter) => {
    if (!result[letter]) {
      result[letter] = 0
    }

    result[letter]++;
    return result
  }, {});
}

console.log(count_letters("hello"));
console.log(count_letters("abcba"));
