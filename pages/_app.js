import "../styles/globals.css";
import Head from "next/head";

export default function Frisbee({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Frisbee Documentation</title>
        <meta property="og:title" content="Frisbee Documentation" key="title" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
