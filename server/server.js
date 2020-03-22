const express = require('express');
const { ApolloServer } = require("apollo-server-express");
const { makeExecutableSchema } = require('graphql-tools');
const fs = require('fs')
const typeDefs = fs.readFileSync('./schema.graphql',{encoding:'utf-8'})
const {validateTokensMiddleware} = require('./data-services/validate-tokens-middleware');
const resolvers = require('./resolvers')
const app = express();
const { gql } = require("apollo-server-express");

const mongo = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017'

app.use(validateTokensMiddleware);
const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

const apolloServer = new ApolloServer({
  schema,
  context: ({ req, res }) => ({ req, res })
});
apolloServer.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
  console.log(
    `Server ready`
  )
);



