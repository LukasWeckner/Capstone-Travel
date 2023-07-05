import { useRouter } from "next/router";
import TripDay from "../../components/TripDay";
import FooterNavigation from "../../components/FooterNavigation";
import Header from "../../components/Header";
import { StyledList } from "../../components/StyledList";
import { StyledLink } from "../../components/StyledLink";
import PreviewTripInfo from "../../components/PreviewTripInfo";

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
        <Header heading="Trip Details" displayBackButton href="/" />
      </header>

      <main>
        <PreviewTripInfo
          destination={destination}
          startDate={`Start date:\n${startDate}`}
          endDate={`End date:\n${endDate}`}
        />
        <StyledLink href={`/edit-trip/${slug}`}>Edit trip</StyledLink>
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
