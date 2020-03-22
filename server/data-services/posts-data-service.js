const mongo = require("mongodb").MongoClient;
let PostModel = require("../models/post");
const UserModel = require("../models/user");
let mongoose = require("mongoose");

module.exports = {
  getProfile: function() {
    return {};
  },

  getAllPosts: async function() {
    var postsArray = null;
    var result = await PostModel.find({})
      .exec()
      .then(posts => posts);
    var arr = result.map(post => {
      return {
        content: post.content,
        id: post.id
      };
    });
    return arr;
  },

  addPost: async function(_, { input }, { req }) {
    let loggedInUser = req.user.id;
    var postToAdd = {
      content: input.content
    };

    PostModel.create(postToAdd).then(createdPost =>
      this.attachPostToUser(loggedInUser, createdPost.id)
    );

    return true;
  },
  attachPostToUser: async function(loggedInUser, postId) {
    UserModel.findOneAndUpdate(
      { _id: loggedInUser },
      { $push: { posts: { id: postId } } },
      {}
    );
  },

  getPost: async function(_, __, { req }) {
    const { postId } = req.body.variables;
    var result = await PostModel.find({ _id: postId })
      .exec()
      .then(posts => posts);
  },

  getLoggedInUserPosts: function() {}
};
