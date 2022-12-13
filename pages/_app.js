import React from 'react';
import Layout from '../components/Layout';
import '../assets/styles/globals.css';
import client from '../lib/apolloClient';
import { ApolloProvider } from '@apollo/client';

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout Component={Component} pageProps={pageProps} >
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </Layout>
  );
}