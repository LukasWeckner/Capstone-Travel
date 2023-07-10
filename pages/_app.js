import GlobalStyle from "../styles";
import Head from "next/head";
import useLocalStorageState from "use-local-storage-state";

export default function App({ Component, pageProps }) {
  const [tripsList, setTripsList] = useLocalStorageState("trips", {
    defaultValue: [],
  });
  return (
    <>
      <GlobalStyle />
      <Head>
        <title>journAI</title>
      </Head>
      <Component
        {...pageProps}
        tripsList={tripsList}
        setTripsList={setTripsList}
      />
    </>
  );
}
