import React from 'react';
import { APP_ROUTES } from '../lib/constants';
import Link from 'next/link';
import Head from 'next/head';
import { Rubik } from '@next/font/google';

const rubik = Rubik({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '700'],
  subsets: ['cyrillic', 'latin'],
  variable: '--font-rubik'
})

export default function Layout({ Component, pageProps, children }) {
  
  return (
    <main className={rubik.variable}>
      <Head>
        {Component.title
          ? <title>{Component.title + ' | deep'}</title>
          : <title>deep IT, Design and beyond</title>
        }
        {Component.description
          ? <meta name="description" content={Component.description + " | deep IT, Design and beypnd"} />
          : <meta name="description" content="deep IT, Design and beypnd" />
        }
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <meta charSet='utf-8' />
        <meta name="keywords" content="deep, it, web, react, developer" />
        <meta name="robots" content="all" />
      </Head>
      {children}
    </main>
  );
}
