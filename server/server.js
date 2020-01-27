
const express = require('express');
const bodyParser = require('body-parser');
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
const { makeExecutableSchema } = require('graphql-tools');
const app = express();
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

const fs = require('fs')
const typeDefs = fs.readFileSync('./schema.graphql',{encoding:'utf-8'})
const resolvers = require('./resolvers')

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});
app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));

app.listen(3000, () => {
  console.log('Go to http://localhost:3000/graphiql to run queries!');
});