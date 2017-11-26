const { mongoose, db } = require('../database');
const User = db.model('user', { 
	email: String,
	password: String,
	attempts: Number
});

module.exports = User;