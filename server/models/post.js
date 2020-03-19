let mongoose = require('mongoose')
const mongooseConn = require('../db-connection');

var postSchema = new mongoose.Schema({
	content: String,
	likes: [{
		userId: mongoose.Types.ObjectId
	}],
	comments: [{
		id: mongoose.Types.ObjectId,
		content: String,
		userId: mongoose.Types.ObjectId
	}]
});
module.exports = mongoose.model('PostModel', postSchema);