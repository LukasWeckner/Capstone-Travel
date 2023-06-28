import FooterNavigation from "../components/FooterNavigation";
import Header from "../components/Header";
import PreviewCardList from "../components/PreviewCardList";

export default function Home({ tripsList, setTripsList }) {
  return (
    <>
      <header>
        <Header heading="My Trips" />
      </header>

      <main>
        <PreviewCardList tripsList={tripsList} setTripsList={setTripsList} />
      </main>

      <footer>
        <FooterNavigation />
      </footer>
    </>
  );
}
