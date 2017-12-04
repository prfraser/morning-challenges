/*
  An anagram is a word or a phrase made by rearranging the letters of
  another word or phrase; for example, “act” is an anagram of “cat”.

  allAnagrams takes a word (a) and an array of potential anagrams (b).

  Return an array of actual anagrams.
  
  For example:
  allAnagrams("cat", ["act","dog","god","tac"]) should return: ["act, tac"]

  Tests:
  mocha tests/35_anagram_test.js

*/

const allAnagrams = (a, b) => {
	const aSplit = a.split('').sort().join()
	return b.reduce((result, word) => {
		let bSplit = word.split('').sort().join()
		if (aSplit === bSplit) {
			result.push(word)
		}
		return result
	}, [])
}

console.log(allAnagrams("cat", ["act","dog","god","tac"]))

module.exports = allAnagrams;
