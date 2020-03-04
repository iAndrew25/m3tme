let mongoose = require('mongoose')
const mongooseConn = require('../db-connection');

var userSchema = new mongoose.Schema({
		username: String,
		password: String,
	    fullName: String,
	    location: String,
	    avatar: String,
	    followersCount: Number,
	    followingCount: Number,
	    postsCount: Number,
	    likesCount: Number
	});

module.exports = mongoose.model('userModel', userSchema);