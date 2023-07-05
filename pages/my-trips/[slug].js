import { useRouter } from "next/router";
import TripDay from "../../components/TripDay";
import FooterNavigation from "../../components/FooterNavigation";
import Header from "../../components/Header";
import { StyledList } from "../../components/StyledList";
import { StyledLink } from "../../components/StyledLink";
import PreviewTripInfo from "../../components/PreviewTripInfo";
import styled from "styled-components";
import Link from "next/link";

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
        <StyledContainer>
          <PreviewTripInfo
            destination={destination}
            startDate={`Start date:\n${startDate}`}
            endDate={`End date:\n${endDate}`}
          />
          <LinkContainer>
            <StyledLink href={`/edit-trip/${slug}`}>Edit trip</StyledLink>
          </LinkContainer>
        </StyledContainer>
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

const LinkContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 0.3rem 0 1rem 0;
`;

const StyledContainer = styled.div`
  border-top: 0.3px solid var(--subtle-dividing-line-color);
  border-bottom: 0.3px solid var(--subtle-dividing-line-color);
  padding: 0.6rem 0 0 0;
  background-color: #fff;
`;
