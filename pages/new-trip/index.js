import FooterNavigation from "../../components/FooterNavigation";
import Header from "../../components/Header";
import NewTripForm from "../../components/NewTripForm";
import Link from "next/link";

export default function NewTrip() {
  return (
    <>
      <header>
        <Header heading="New Trip" />
      </header>

      <main>
        <Link href={"/"}>Back to My Trips</Link>
        <NewTripForm />
      </main>

      <footer>
        <FooterNavigation />
      </footer>
    </>
  );
}
