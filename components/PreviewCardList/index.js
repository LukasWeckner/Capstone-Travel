import styled from "styled-components";
import Link from "next/link";
import Button, { StyledBasicButton } from "../Button";

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
  gap: 1.3rem;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 10%;
`;

const StyledButton = styled(StyledBasicButton)`
  background-color: #f56c6c;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  padding: 0.5rem 1rem;
  color: black;
  background-color: #f2d5a3;
  border-radius: 4px;
  cursor: pointer;
`;

export const StyledList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

export const StyledListItem = styled.li`
  border: 2px solid black;
  border-radius: 1rem;
  width: 90%;
  position: relative;
`;
