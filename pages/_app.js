import "../styles/globals.css";
import Head from "next/head";
import { usePanelbear } from '@panelbear/panelbear-nextjs';
import { withPasswordProtect } from "@storyofams/next-password-protect";
import {LoginComponent} from "../components/login";

const panelbear = process.env.PANELBEAR;
const password = process.env.PASSWORD;

function Frisbee({ Component, pageProps }) {
    if (panelbear) {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        usePanelbear(panelbear, { scriptSrc: "/bear.js", debug: true });
    }
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

export default password ? withPasswordProtect(Frisbee, {loginApiUrl: "/api/login", checkApiUrl: "/api/passwordCheck", loginComponent: LoginComponent}) : Frisbee;
