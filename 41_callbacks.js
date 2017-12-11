/*

Callbacks in JavaScript are functions that are passed as arguments to other
functions. This is a very important feature of asynchronous programming, and it
enables the function that receives the callback to call our code when it
finishes a long task, while allowing us to continue the execution of the code.


EXAMPLE 1
---------
Below we have a sayHello function. We can use the built in setTimeout method to
run sayHello after a delay. In this case, 'sayHello' is our callback.

*/

// const sayHello = () => {
//   console.log('Hello!')
// }

// // Run sayHello after a two second delay.
// setTimeout(sayHello, 2000);


/*

EXAMPLE 2
---------
When you use forEach, you're actually using a callback, you just don't usually
give it a name. This is called an anonymous function.

*/

// const names = ['Jane', 'John', 'Jack']

// names.forEach((name) => {
//   // I'm a function, too 😢
//   // #anonymousFunctionsAreFunctionsToo #neverForget #whadaYaMeanWhadaYaMean
//   console.log(name)
// })


/*

EXAMPLE 3
---------
Here's the exact same thing but this time we give our callback a name.
Anonymous no more, my friend.

*/

// const printName = (name) => {
//   console.log(name)
// }

// names.forEach(printName)




// CHALLENGE
// ---------

// https://gist.github.com/scottdixon/ce988c99b67ddd9f7678cca7be89828c

// Line 13 is calling 'sayGreetings' and handing it a callback 'sayNiceToMeetYou'
// Line 14 is calling 'sayGreetings' and handing it a callback 'sayGoodbye'

// const sayGreetings = (cb) => {
//   console.log('Greetings!')
//   cb()
// }

// const sayNiceToMeetYou = () => {
//   console.log('Nice to meet you!')
// }

// const sayGoodbye = () => {
//   console.log('Goodbye!')
// }

// sayGreetings(sayNiceToMeetYou)
// sayGreetings(sayGoodbye)

// Fix the 'sayGreetings' function so it runs the callback each time.

// DESIRED OUTPUT:
// Greetings!
// Nice to meet you!
// Greetings!
// Goodbye!



// BEAST MODE
// ----------
// Warning: brain explosion ahead. Push through:

// https://gist.github.com/scottdixon/6cede0935d2367c5453a74170c08c944

// Remind yourself how .filter works. Build it yourself using only .forEach.
// We've started you off.

// const filter = (items, callback) => {
//   const results = []
//   // Your code here
//   // results.push(items.forEach(callback()))
//   items.forEach((item) => {
//   	if (callback(item)) {
//   		results.push(item)
//   	}
//   	// results.push(callback(item))
//   })

//   return results
// }

const map = (items, callback) => {
  // Your code here
  let results = []
  // results.push(items.forEach(callback()))
  items.forEach((item) => {
  	results.push(callback(item))
  })

  return results
}
// I'm using your Filter method to return even numbers.
// If your filter method is correct, this code should return: [2, 4]
// console.log(filter([1,2,3,4], (item) => {
//   return item % 2 === 0
// }))

console.log(map([1,2,3,4], (item) => {
  return item + 1
}))

// GOT THIS FAR?
// -------------
// Implement .map


