let mongoose = require('mongoose')
const mongooseConn = require('../db-connection');

var userSchema = new mongoose.Schema({
		username: String,
		password: String,
	    displayName: String,
	    location: String,
	    avatarUrl: String,
	    followersCount: Number,
	    followingCount: Number,
	    postsCount: Number,
	    likesCount: Number
	});

module.exports = mongoose.model('userModel', userSchema);