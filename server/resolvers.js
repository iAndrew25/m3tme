var userDataService = require('./data-services/users-data-service.js');
var postsDataService = require('./data-services/posts-data-service.js');

const Query= { 
  	profile: () => postsDataService.getProfile(),
  	userData: (root,args,context,info) => userDataService.getUserData(args.username)
  };

module.exports = {Query}