import Document, {
  Html,
  Head,
  Main,
  NextScript,
} from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta property="og:title" content="Campaign Manager" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="http://localhost:3000/" />
          <meta property="og:image" content="http://localhost:3000/favicon.ico" />
          

          <meta name="description" content="A site to manage marketing campaigns" />
          <link rel="icon" href="/favicon.ico" />

          <link href="https://fonts.googleapis.com/css2?family=Merriweather&family=Nunito&display=swap" rel="stylesheet"></link>
        </Head>
        <body className="bg-[#181c20] text-gray-50 overflow-y-scroll h-full min-h-full font-sans">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument