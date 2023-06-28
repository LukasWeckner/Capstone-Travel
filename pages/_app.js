import { useState } from "react";
import GlobalStyle from "../styles";
import Head from "next/head";
import { trips } from "../lib/data";

export default function App({ Component, pageProps }) {
  const [tripsList, setTripsList] = useState(trips);
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
