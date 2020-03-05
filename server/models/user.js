let mongoose = require('mongoose')
const mongooseConn = require('../db-connection');

var userSchema = new mongoose.Schema({
		username: String,
		password: String,
	    displayName: String,
	    location: String,
	    avatarUrl: String,
	    followers: [{
			id: mongoose.Types.ObjectId,
			isRevealed: Boolean
		}],
	    following: [{
			id: mongoose.Types.ObjectId,
			isRevealed: Boolean
		}],
	    posts: [{
			id: mongoose.Types.ObjectId,
		}]
	});

module.exports = mongoose.model('userModel', userSchema);