/* 
  Our login form is broken!

  Right now, users can get through with any password. Try it out.

  Help!

  1. Only let users through if they enter the password 'dog'.
     (Hint: you'll need body-parser to get the form info)
  2. Return a 401 if any other password is entered.

  Beast mode:

  1. Only let users through if they also check "I agree".
  2. Add an email field to the login form. Update your password check.
  3. Store a list of users, along with their passwords in an array of objects.
     Update your password check to use this array for authentication.
  4. Keep count of login failures. Display these on the 401 page.
     E.g. "You've tried to login 3 times". Make sure it works per user.
  5. Reset the login failures to 0 if they successfully log in.
  6. Store the users in mongo instead on this file.
*/

// Sessions
//
// Carry on from challenge #29 (broken login form)
//
// Challenge:
// 1. Implement https://github.com/expressjs/session
// 2. When a use logs in, store their email in the session.
//    Hint: use req.session - this is unique to each user.
//    Hint: e.g. req.session.email = 'user@blah.ccom'
//  
// 3. Allow the user to GET /secure if they are logged in.
//
// Beast mode:
// 1. Add a logout link which destroys their session.


const express = require('express');
const app = express();
const bodyParser = require('body-parser');
let user = require('./models/user');
const session = require('express-session')

// Allow access to everything in /public.
// This is for our stylesheets & images.
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
  secret: 'keyboard cat',
  cookie: { }
}))

// Views #thepuglifechoseme
app.set('view engine', 'pug')


app.get("/", (req, res) => {
  console.log(req.session.email)
  if(req.session.email) {
    console.log(req.session.email, 'session found. redirected to secure')
    res.render('secure');
  } else {
    res.render('login');
  }
});

app.post("/secure", (req, res) => {
  let userEmail = req.body.email
  let userPassword = req.body.password
  user.findOne({ 'email': userEmail }).then((result) => {
    console.log(result)
    if(result && result.password === userPassword && req.body.agree === 'on') {
      req.session.email = userEmail
      console.log(req.session.email)
      // userFound.attempts = 0
      res.render('secure');
    } else {
      user.findOneAndUpdate( { result }, { $inc: { attempts: 1 } } )
      res.status(401).send(`You've tried to login ${result.attempts} times.`)
    }
  })
});

app.get('/logout', (req, res) => {
  req.session.destroy(function(err) {
    // cannot access session here
    console.log(err)
  });
  res.render('login');
})

app.listen(3000);
console.log("Lift off!");
