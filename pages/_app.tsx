/*
  ==============================================================================
    (c) 2022. quantum universe All rights reserved.
    author : EUNHYE KIM
    start date : 12/5/2022
  ==============================================================================
*/ import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>하이원플러스</title>
        <meta name="description" content="Put your description here." />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
