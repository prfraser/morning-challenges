// # In Array
// #
// # Write a method that will take two arguments: a string and an array.
// # Return a boolean indicating whether or not the string
// # is found in the array.
// #
// # Difficulty:
// # 2/10
// #
// # Example:
// # in_array("hello", ["hi", "howdy", "hello"]) should return true
// # in_array("drake", ["jayz", "kanye", "yachty"]) should return false
// #

const inArray = (needle, haystack) => {
	return haystack.some(word => word === needle);
}

console.log(inArray("hello", ["hi", "howdy", "hello"]));
console.log(inArray("drake", ["jayz", "kanye", "yachty"]));

