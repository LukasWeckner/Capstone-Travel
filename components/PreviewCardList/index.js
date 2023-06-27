import { trips } from "../../lib/data";
import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";

export default function PreviewCardList() {
  const router = useRouter();

  return (
    <StyledList>
      {trips.map(({ slug, destination, startDate, endDate }) => (
        <StyledListItem key={slug}>
          <div>
            <h2>{destination}</h2>
            <p>{startDate}</p>
            <p>{endDate}</p>
          </div>
          <StyledLink href={`/my-trips/${slug}`}>Show Details</StyledLink>
        </StyledListItem>
      ))}
    </StyledList>
  );
}

const StyledLink = styled(Link)`
  position: absolute;
  top: 40%;
  right: 10%;
  text-decoration: none;
  padding: 10px 20px;
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
