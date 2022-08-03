import "../styles/globals.css";
import Head from "next/head";
import { usePanelbear } from '@panelbear/panelbear-nextjs';
import { withPasswordProtect } from "@storyofams/next-password-protect";
import {LoginComponent} from "../components/login";

function Frisbee({ Component, pageProps }) {
 usePanelbear('HjrnquHievf', { scriptSrc: "/bear.js" });
  return (
    <>
      <Head>
        <title>Frisbee Documentation</title>
        <meta property="og:title" content="fRPC Documentation" key="title" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default withPasswordProtect(Frisbee, {loginApiUrl: "/api/login", checkApiUrl: "/api/passwordCheck", loginComponent: LoginComponent});