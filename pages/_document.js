import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <meta charSet="UTF-8" />
        <meta
          name="description"
          content="vhm portfolio website"
        />
        <meta name="keywords" content="Next.js" />
        <meta name="author" content="M. Shahanwaz" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600;700&family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link
          rel="preload"
          href="/fonts/PlusJakartaSans/PlusJakartaSans-ExtraBold.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/PlusJakartaSans/PlusJakartaSans-Bold.ttf"
          as="font"
          crossOrigin=""
        />
        <link rel="shortcut icon" href="/icons/favicon.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
