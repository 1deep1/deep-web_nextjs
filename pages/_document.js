import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="robots" content="index, follow" />
      </Head>
      <body id='deep_dark_web' className='bg-deep_gray text-white'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}