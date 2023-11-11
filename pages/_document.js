import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/fav.svg" />
        <link rel="icon" type="image/png" sizes="32x32" href="/fav.svg" />
        <link rel="icon" type="image/png" sizes="16x16" href="/fav.svg" />
        <meta name="theme-color" content="#009EC5" />
      </Head>
      
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
