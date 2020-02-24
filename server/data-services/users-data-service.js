const { sign } = require("jsonwebtoken");
const { verify } = require("jsonwebtoken");
const { AuthenticationError } = require("apollo-server-express");
const isEmpty = require("lodash/isEmpty");
const { setTokens } = require("./set-tokens");
const mongo = require('mongodb').MongoClient

module.exports = {
	getUserData: function (_, __, { req }) {
		if(!username){
			return {
			id: "1",
			username: "userData",
		};
		}
	   return {
			id: "1",
			username: username
		};
	},

	login: async function(_, __, { req }){
		const db = req.app.locals.db;
		const collection = db.collection('Test');
		collection.find().toArray((err, items) => {
  			console.log(items)
		});

		const {username, password} = req.body.variables;
  		const user = {
  			id: "123",
  			token: "abc",
  			tokenCount: "1"
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