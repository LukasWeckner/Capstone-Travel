import { useRouter } from "next/router";
import { trips } from "../../lib/data";
import TripDay from "../../components/TripDay";
import { StyledList } from "../../components/PreviewCardList";
import Link from "next/link";
import FooterNavigation from "../../components/FooterNavigation";
import Header from "../../components/Header";

export default function Trip() {
  const router = useRouter();
  const { slug } = router.query;

  const currentTrip = trips.find((trip) => trip.slug === slug);
  if (!currentTrip) {
    return null;
  }

  const { destination, startDate, endDate, dayDetails } = currentTrip;

  return (
    <>
      <header>
        <Header heading="Trip Details" />
      </header>

      <main>
        <Link href={`/`}>Back to Current Trips</Link>
        <h2>{`Destination: ${destination}`}</h2>
        <p>{`Start date: ${startDate}`}</p>
        <p>{`End date: ${endDate}`}</p>
        <StyledList>
          {dayDetails.titles.map((title, index) => (
            <TripDay
              key={index}
              title={title}
              activities={dayDetails.activities[index]}
            />
          ))}
        </StyledList>
      </main>

      <footer>
        <FooterNavigation />
      </footer>
    </>
  );
}
