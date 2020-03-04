var userDataService = require('./data-services/users-data-service.js');
var postsDataService = require('./data-services/posts-data-service.js');
var setupService = require('./data-services/setup-service.js');

const Query= { 
	profile: (_, __, { req }) => userDataService.getUser(_, __, { req }),
	initialSetup: () => setupService.setupFirstUser(),
  	login: (_, __, { req }) => userDataService.login(_, __, { req }),
  	loggedInUser: (_, __, { req }) => userDataService.loggedInUser(_, __, { req })
  };

module.exports = {Query}