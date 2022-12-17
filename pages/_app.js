import React from 'react';

import client from '../lib/apolloClient';
import { ApolloProvider } from '@apollo/client';
import { appWithTranslation } from "next-i18next";

import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

import Layout from '../components/Layout';
import '../assets/styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <Layout Component={Component} pageProps={pageProps} >
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </Layout>
  );
}

export default appWithTranslation(MyApp);