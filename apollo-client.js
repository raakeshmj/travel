// src/apollo-client.js
import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:1337/graphql', // Replace with your GraphQL endpoint URI
  cache: new InMemoryCache(),
});

export default client;
