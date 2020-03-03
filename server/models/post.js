let mongoose = require('mongoose')
const mongooseConn = require('../db-connection');

var postSchema = new mongoose.Schema({
			username: String
		});
module.exports = mongoose.model('PostModel', postSchema);