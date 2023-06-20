import { trips } from "../../lib/data";
import styled from "styled-components";
import Button from "../Button";

export default function PreviewCard() {
  return (
    <StyledList>
      {trips.map(({ slug, destination, startDate, endDate }) => (
        <StyledListItem key={slug}>
          <div>
            <h2>{destination}</h2>
            <p>{startDate}</p>
            <p>{endDate}</p>
          </div>
          <Button>Show Details</Button>
        </StyledListItem>
      ))}
    </StyledList>
  );
}

const StyledList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const StyledListItem = styled.li`
  border: 2px solid black;
  border-radius: 1rem;
  width: 90%;
  display: flex;
  justify-content: space-around;
`;
