import styled from "styled-components";
import Button, { StyledBasicButton } from "../Button";
import { StyledList } from "../StyledList";
import { StyledListItem } from "../StyledListItem";
import { StyledLink } from "../StyledLink";

export default function PreviewCardList({ tripsList, setTripsList }) {
  //helper function to format startDate of the trips array, so that sort method can be used on the dates
  function formatDate(dateString) {
    const [day, month, year] = dateString.split("/");
    return new Date(`${year}-${month}-${day}`);
  }

  function handleDelete(slug) {
    const updatedTrips = tripsList.filter((trip) => trip.slug !== slug);
    setTripsList([...updatedTrips]);
  }

  return (
    <StyledList>
      {tripsList
        .slice()
        .sort((a, b) => {
          const startDateA = formatDate(a.startDate);
          const startDateB = formatDate(b.startDate);
          return startDateA - startDateB;
        })
        .map(({ slug, destination, startDate, endDate }) => (
          <StyledListItem key={slug}>
            <div>
              <h2>{destination}</h2>
              <p>{startDate}</p>
              <p>{endDate}</p>
            </div>
            <FlexContainer>
              <StyledLink href={`/my-trips/${slug}`}>Show Details</StyledLink>
              <StyledButton onClick={() => handleDelete(slug)}>
                Delete
              </StyledButton>
            </FlexContainer>
          </StyledListItem>
        ))}
    </StyledList>
  );
}

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  position: absolute;
  top: 40%;
  right: 5%;
`;

const StyledButton = styled(StyledBasicButton)`
  background-color: #f56c6c;
`;
