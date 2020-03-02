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

app.use(validateTokensMiddleware); // middleware to be built
const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});
const uri = 'mongodb://localhost:27017';

// let mongoose = require('mongoose');
// (async function() {

//   try {
//     const conn = await mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});
//     console.log(conn.connections)

//  //    const db = conn.db.db('admin');  

// 	// app.locals.db = db;

	
//   } catch(e) {
//     console.error(e);
//   } finally {
//     mongoose.disconnect();
//   }
// })();

 // mongoose.connect(url)
 //       .then(() => {
 //        const db = client.db('admin')
 //  		app.locals.db = db;
 //       })
 //       .catch(err => {
 //         console.error('Database connection error')
 //       })

// mongo.connect(url, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
//   }, (err, client) => {
//   if (err) {
//     console.error(err)
//     return
//   }
//   const db = client.db('admin')
//   app.locals.db = db;
// })

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



