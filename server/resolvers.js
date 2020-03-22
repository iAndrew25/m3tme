var userDataService = require("./data-services/users-data-service.js");
var postsDataService = require("./data-services/posts-data-service.js");
var setupService = require("./data-services/setup-service.js");

const Query = {
  profile: (_, __, { req }) => userDataService.getUser(_, __, { req }),
  initialSetup: () => setupService.setupData(),
  deleteAllData: () => setupService.deleteAllData(),
  login: (_, __, { req }) => userDataService.login(_, __, { req }),
  loggedInUser: (_, __, { req }) =>
    userDataService.loggedInUser(_, __, { req }),
  getAllPosts: () => postsDataService.getAllPosts()
};

const Mutation = {
  addPost: (_, __, { req }) => postsDataService.addPost(_, __, { req })
};

module.exports = { Query, Mutation };
