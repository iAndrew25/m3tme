let mongoose = require('mongoose')
const mongooseConn = require('../db-connection');

var postSchema = new mongoose.Schema({
			username: String
		});
// postSchema.pre('find', function() {
//   this.populate('post');
// });
// postSchema.pre("save", function(next) {
//     if(!this.trial){
//         //do your job here
//     }
//     next();
// });

postSchema.pre('save', function(next){
    next();
});
module.exports = mongoose.model('PostModel', postSchema);