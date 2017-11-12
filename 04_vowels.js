// # Vowels
// #
// # Write a method that will take a string and
// # return an array of vowels used in that string.
// #
// # Difficulty:
// # 4/10
// #
// # Example:
// # count_vowels("The quick brown fox") should return ["e","u","i","o","o"]
// # count_vowels("Hello World") should return ["e","o","o"]

const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
const count_vowels = string => {
	splitString = string.split("")
	vowelMatches = []
	for (var i in splitString) {
		if (vowels.includes(splitString[i])) {
			vowelMatches.push(splitString[i]);
		}
	}
	console.log(vowelMatches);
}

count_vowels("The quick brown fox")
count_vowels("Hello World")