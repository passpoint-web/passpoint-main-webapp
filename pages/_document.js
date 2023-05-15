import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/fav.svg" />
        <link rel="icon" type="image/png" sizes="32x32" href="/fav.svg" />
        <link rel="icon" type="image/png" sizes="16x16" href="/fav.svg" />
        <link rel="mask-icon" href="/fav.svg" color="#009EC5" />
        <meta name="msapplication-TileColor" content="#009EC5" />
        <link rel="icon" href="./fav.svg" />
        <meta name="theme-color" content="#009EC5" />
        <meta
          name="title"
          content="Passpoint | Travel Anywhere, Anytime With seamless payment Gateways "
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
