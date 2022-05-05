import "../styles/globals.css";

import Layout from "../components/layout";

export default function Frisbee({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
