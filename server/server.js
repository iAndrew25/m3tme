const express = require('express');
const { ApolloServer } = require("apollo-server-express");
const { makeExecutableSchema } = require('graphql-tools');
const fs = require('fs')
const typeDefs = fs.readFileSync('./schema.graphql',{encoding:'utf-8'})
const {validateTokensMiddleware} = require('./data-services/validate-tokens-middleware');
// const graphiql = require("graphiql");
const resolvers = require('./resolvers')
const app = express();

const { gql } = require("apollo-server-express");

app.use(validateTokensMiddleware); // middleware to be built
const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

const apolloServer = new ApolloServer({
  schema,
  context: ({ req, res }) => ({ req, res })
});
apolloServer.applyMiddleware({ app });

 // app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));
 // app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));
app.listen({ port: 4000 }, () =>
  console.log(
    `Server ready`
  )
);



