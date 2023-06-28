import { useRouter } from "next/router";
import TripDay from "../../components/TripDay";
import FooterNavigation from "../../components/FooterNavigation";
import Header from "../../components/Header";
import { StyledList } from "../../components/PreviewCardList";
import { StyledLink } from "../../components/PreviewCardList";

export default function Trip({ tripsList }) {
  const router = useRouter();
  const { slug } = router.query;

  const currentTrip = tripsList.find((trip) => trip.slug === slug);
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
        <StyledLink href={`/`}>Back to Current Trips</StyledLink>
        <h2>{`Destination: ${destination}`}</h2>
        <p>{`Start date: ${startDate}`}</p>
        <p>{`End date: ${endDate}`}</p>
        <StyledLink href={`/edit-trip`}>Edit trip</StyledLink>
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
