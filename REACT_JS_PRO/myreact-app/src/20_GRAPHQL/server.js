const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { buildSchema } = require("graphql");

// Define GraphQL Schema
const schema = buildSchema(`
  type Query {
    message: String
  }
`);

// Define Resolvers
const root = {
  message: () => "Hello, GraphQL!"
};

// Create Express Server
const app = express();
app.use("/graphql", graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true // Enables GraphQL Playground
}));

app.listen(4000, () => console.log("Server running at http://localhost:4000/graphql"));
