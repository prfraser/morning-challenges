const jwt = require('jsonwebtoken');
const colors = require('colors');
const inquirer = require('inquirer');
const prompt = inquirer.createPromptModule();
 

class SimpleJwt {
  constructor(password){
    this.password = password
  }
  sign (payload) {
    // Return a JWT
    const token = jwt.sign(payload, this.password);
    console.log(token.rainbow) 
  }
  verify (webToken) {
    // return the contents or a message re failure
    try {
      return jwt.verify(webToken, this.password)
    } catch (error) {
      console.log('You have recieved an error: '.red, `${error}`.red)
    }
  }
}

const simpleJwt = new SimpleJwt('password123')
const question = {
  type: 'input',
  name: 'answer',
  message: 'Would you like to verify or sign?'
}

prompt(question).then(answers => {
  if (answers.answer === 'sign') {
    simpleJwt.sign('hello')
  } else if (answers.answer === 'verify') {
    console.log(simpleJwt.verify('eyJhbGciOiJIUzI1NiJ9.aGVsbG8.1lPhcTXIbroD8qey8e7dRdg0Bx_sUysO0zXt0Y2zIME').blue)
  } else {
    console.log(`Sorry, I don't know what ${answers.answer} is.`.red)
  }
})

// simpleJwt.sign('hello');
// console.log(simpleJwt.verify('eyJhbGciOiJIUzI1NiJ9.aGVsbG8.1lPhcTXIbroD8qey8e7dRdg0Bx_sUysO0zXt0Y2zIME').blue)

/*

  CHALLENGE
  ---------

  Review + run the code.

  1. We're hard coding 'abc' as the password. Pass this into the constructor
  instead. e.g. new SimpleJwt('abc'). Update your methods.

  2. Notice the colors package we're importing? Make the console log rainbow 🌈

  3. Test that verifyJwt works.

  4. Wrap the .verify in a try/catch. If everything looks good, return the
  decoded JWT (green). Otherwise show an error (red)

  BEAST MODE
  ----------

  1. Implement https://www.npmjs.com/package/inquirer
  Ask the user if they want to sign or verify a token.

*/
