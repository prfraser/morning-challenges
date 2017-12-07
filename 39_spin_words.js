/*

Spin words (From codewars)

Write a function that takes in a string of one or more words,
and returns the same string, but with all five or more letter
words reversed. Strings passed in will consist of only letters
and spaces. Spaces will be included only when more than one
word is present.

Examples:
spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw"
spinWords( "This is a test") => returns "This is a test"
spinWords( "This is another test" )=> returns "This is rehtona test"

Write the tests first and then make your tests pass!

*/
const spinWords = (words) => {
	let splitWords = words.split(' ');
	// return splitWords.reduce((res, word) => {
	// 	word.length < 5 ? res.push(word) : res.push(word.split('').reverse().join(''))
	// 	return res
	// }, []).join(' ')
	let res = []
	splitWords.map(word => {
		word.length < 5 ? res.push(word) : res.push(word.split('').reverse().join(''))
	})
	return res.join(' ')
}

console.log(spinWords("Hey fellow warriors"))
console.log(spinWords("This is a test"))
console.log(spinWords("This is another test"))

module.exports = spinWords
