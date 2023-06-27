import { trips } from "../../lib/data";
import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";
import Button from "../Button";

export default function PreviewCardList() {
  const router = useRouter();

  //helper function to format startDate of the trips array, so that sort method can be used on the dates
  function formatDate(dateString) {
    const [day, month, year] = dateString.split("/");
    return new Date(`${year}-${month}-${day}`);
  }

  return (
    <StyledList>
      {trips
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
              <Button>Delete</Button>
            </FlexContainer>
          </StyledListItem>
        ))}
    </StyledList>
  );
}

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  position: absolute;
  top: 40%;
  right: 10%;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  padding: 0 1rem;
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
