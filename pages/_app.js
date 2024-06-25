// pages/_app.js
import { ApolloProvider } from '@apollo/client';
import client from '@/apollo-client'; // Adjust path if using custom alias @/*

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
