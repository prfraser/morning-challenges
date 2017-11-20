// # In Array Advanced
// #
// # Don't use any array helper methods except for .each
// #
// # This is the same as yesterday's challenge with one improvement.
// # in_array_advanced takes an additional boolean argument 'strict'.
// # If strict is true, in_array should care about leTteR CasIng.
// # If strict is false, in_array should return true for any match.
// #
// # Difficulty:
// # 4/10
// #
// # Example:
// # in_array("HeLLo", ["hi", "howdy", "HeLLo"], true) should return true
// # in_array("DrAkE", ["jayz", "kanye", "drake"], false) should return true
// # in_array("DrAkE", ["jayz", "kanye", "yachty"], false) should return false

const inArray = (needle, haystack, strict) => {
	if(strict){
		haystack.forEach(word => {
			if(word === needle){
				console.log('strict match');
			}
		});
	} else {
		haystack.forEach(word => {
			if (word.toLowerCase() === needle.toLowerCase()){
				console.log('not strict match');
			}
		});
	}
	return false
}
console.log(inArray("HeLLo", ["hi", "howdy", "HeLLo"], true));
console.log(inArray("DrAkE", ["jayz", "kanye", "drake"], false));
console.log(inArray("DrAkE", ["jayz", "kanye", "yachty"], false));