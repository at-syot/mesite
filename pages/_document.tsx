import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <head>
        <meta name="viewport" content="width=device-width; initial-scale=1.0" />
        <title>OatCoding</title>
        <meta property="og:title" content="Oat Software Engineer - CA|TH" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://oatcoding.vercel.app/" />
        <meta property="og:image" content="images/preview_cover.png" />
      </head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
