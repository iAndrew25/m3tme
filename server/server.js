var dataService = require('./dataService.js');

const express = require('express');
const bodyParser = require('body-parser');
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
const { makeExecutableSchema } = require('graphql-tools');
const app = express();
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

// The GraphQL schema in string form
const typeDefs = `
	type Profile { 
	  	id: String, 
	  	username: String, 
	  	fullName: String, 
	  	location: String, 
	  	avatar: String, 
	  	followersCount: Int, 
	  	followingCount: Int, 
	  	postsCount: Int, 
	  	likesCount: Int 
	  }, 
	  type UserData {
		id: String, 
	  	username: String
	  }
	  type Query { profile: Profile, userData(username: String): UserData }
`;

// The resolvers
const resolvers = {
  Query: { 
  	profile: () => dataService.getProfile(),
  	userData: (root,args,context,info) => dataService.getUserData(args.username)
  }
};

// Put together a schema
const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});
app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));


// Start the server
app.listen(3000, () => {
  console.log('Go to http://localhost:3000/graphiql to run queries!');
});