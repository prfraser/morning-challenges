// # Unique
// #
// # Ruby has a handy array.unique helper which removes
// # duplicates. Imlpement your own version of the helper,
// # without using .unique.
// #
// # Difficulty:
// # 5/10
// #
// # Example:
// # unique([1,2,3,3]) should return [1,2,3]
// # unique(["tom", "tom", "tom"]) should return ["tom"]
// #
// # Hints:
// # A hash could be helpful in your solution.
// #

function unique(array){
	return array.reduce((res, item) => {
		if(!res.includes(item)) {
			res.push(item);
		}
		return res
	}, []);
}

console.log(unique([1,2,3,3]));
console.log(unique(["tom", "tom", "tom"]));