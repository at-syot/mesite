import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta property="og:title" content="Oat Software Engineer - CA|TH" />
        <meta property="og:description" content="Hi there, I'm Oat, a software engineer from Thailand now living in Canada. I'm actively searching for a software engineering role where I can bring my skills to the table and make a meaningful contribution." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://oatcoding.vercel.app/" />
        <meta property="og:image" content="images/preview_cover.png" />
      </Head>
      <head>
        <meta name="viewport" content="width=device-width; initial-scale=1.0" />
        <title>OatCoding</title>
      </head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
