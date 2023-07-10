import FooterNavigation from "../components/FooterNavigation";
import Header from "../components/Header";
import NoTripsCreated from "../components/NoTripsCreated";
import PreviewCardList from "../components/PreviewCardList";

export default function Home({ tripsList, setTripsList }) {
  return (
    <>
      <header>
        <Header heading="My Trips" />
      </header>

      <main>
        {tripsList.length === 0 ? (
          <NoTripsCreated />
        ) : (
          <PreviewCardList tripsList={tripsList} setTripsList={setTripsList} />
        )}
      </main>

      <footer>
        <FooterNavigation />
      </footer>
    </>
  );
}
