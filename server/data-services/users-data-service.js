const { sign } = require("jsonwebtoken");
const { verify } = require("jsonwebtoken");
const { AuthenticationError } = require("apollo-server-express");
const isEmpty = require("lodash/isEmpty");
const { setTokens } = require("./set-tokens");

const mongo = require("mongodb").MongoClient;
let PostModel = require("../models/post");
const UserModel = require("../models/user");
let mongoose = require("mongoose");

module.exports = {
  getUser: async function(_, __, { req }) {
    let userId = req.user.id;
    var result = await UserModel.find({ _id: userId })
      .exec()
      .then(users => users);
    var user = result[0];
    return {
      username: user.username,
      displayName: user.displayName,
      location: user.location,
      avatarUrl: user.avatarUrl,
      followersCount: user.followers.length,
      followingCount: user.following.length,
      postsCount: user.posts.length
    };
  },

  getPosts: function() {
    PostModel.find({}, function(err, posts) {
      console.log(posts);
    });
  },
  login: async function(_, __, { req }) {
    const { username, password } = req.body.variables;
    var result = await UserModel.find({ username: username })
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
