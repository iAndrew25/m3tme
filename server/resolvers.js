var userDataService = require('./data-services/users-data-service.js');
var postsDataService = require('./data-services/posts-data-service.js');

const Query= { 
  	profile: () => postsDataService.getProfile(),
  	userData: (_, __, { req }) => userDataService.getUserData(_, __, { req }),
  	login: (_, __, { req }) => userDataService.login(_, __, { req }),
  	loggedInUser: (_, __, { req }) => userDataService.loggedInUser(_, __, { req })
  };

module.exports = {Query}