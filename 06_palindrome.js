// # Palindrome
// #
// # Write a method that will take a word as a string and
// # return a boolean indicating whether or not the word
// # is a palindrome.
// #
// # Difficulty:
// # 3/10
// #
// # Example:
// # palindrome("hello") should return false
// # palindrome("racecar") should return true

const palindrome = string => {
	reversedString = string.split("").reverse().join("");
	return string === reversedString
}

console.log(palindrome("hello"));
console.log(palindrome("racecar"));