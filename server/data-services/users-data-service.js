const { sign } = require("jsonwebtoken");
const { verify } = require("jsonwebtoken");
const { AuthenticationError } = require("apollo-server-express");
const isEmpty = require("lodash/isEmpty");
const { setTokens } = require("./set-tokens");

const mongo = require('mongodb').MongoClient
let PostModel = require('../models/post');
const UserModel = require('../models/user');
let mongoose = require('mongoose');

module.exports = {
	getUser: async function (_, __, { req }) {
		let userId = req.user.id;
		var result = await UserModel.find({_id: userId})
  		.exec()
		.then(users => users);
		var user = result[0];
		return{
			username: user.username,
			fullName: user.fullName,
			location: user.location,
			avatar: user.avatar,
			followersCount: user.followersCount,
			followingCount: user.followingCount,
			postsCount: user.postsCount,
			likesCount: user.likesCount
		}
	},

saveUser: function(){
	let post = new PostModel({
		username: 'CAMILULU'
  })
			  post.save(function() {
				PostModel.findById(post._id, function(err, user) {
				  console.log(user);
				})
			  });


			  PostModel.create({
				username: "Joe"
			  },function(err,result){
				PostModel.findById(result._id, function(err, post) {
					console.log(post);
				  })
			  });
},

getPosts: function(){
	PostModel.find({}, function(err, posts) {
		console.log(posts)
		  });

},
	login: async function(_, __, { req }){	  
		const {username, password} = req.body.variables;		
		var result = await UserModel.find({username: username})
  		.exec()
  		.then(users => users);

  		const user = {
  			id: result[0].id
  		};
  		if (!user) return null;

  		const passwordValid = true;

  		if (!passwordValid) return null;

  		return setTokens(user);
	},

	loggedInUser: async function(_, __, { req }) {
	  if (isEmpty(req.user)) throw new AuthenticationError("Must authenticate");
	  const user = {
  			id: "123",
  			token: "abc",
  			tokenCount: "1"
  		};
	  return user;
	}
};