import { useState } from "react";
import GlobalStyle from "../styles";
import Head from "next/head";
import { trips } from "../lib/data";
import useLocalStorageState from "use-local-storage-state";

export default function App({ Component, pageProps }) {
  const [tripsList, setTripsList] = useLocalStorageState("trips", {
    defaultValue: [],
  });
  return (
    <>
      <GlobalStyle />
      <Head>
        <title>Capstone Project</title>
      </Head>
      <Component
        {...pageProps}
        tripsList={tripsList}
        setTripsList={setTripsList}
      />
    </>
  );
}
