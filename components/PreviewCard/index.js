import { trips } from "../../lib/data";
import styled from "styled-components";

export default function PreviewCard() {
  const StyledListItem = styled.li`
    border: 2px solid black;
    border-radius: 1rem;
    width: 90%;
  `;
  const StyledList = styled.ul`
    list-style-type: none;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  `;

  return (
    <StyledList>
      {trips.map(({ slug, destination, startDate, endDate }) => (
        <StyledListItem key={slug}>
          <h2>{destination}</h2>
          <p>{startDate}</p>
          <p>{endDate}</p>
        </StyledListItem>
      ))}
    </StyledList>
  );
}
