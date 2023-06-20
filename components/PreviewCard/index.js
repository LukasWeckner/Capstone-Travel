import { trips } from "../../lib/data";
import styled from "styled-components";
import BasicButton from "../Button";
import Link from "next/link";
import { useRouter } from "next/router";

export default function PreviewCard() {
  const router = useRouter();

  // I will get rid of the handleClick and the StyledButton in 25 in the next commit as I noticed I only need the Link
  function handleClick() {
    console.log("Button was klicked");
  }

  return (
    <StyledList>
      {trips.map(({ slug, destination, startDate, endDate }) => (
        <StyledListItem key={slug}>
          <div>
            <h2>{destination}</h2>
            <p>{startDate}</p>
            <p>{endDate}</p>
          </div>
          <Link href={`/my-trips/${slug}`}>
            <StyledButton onClick={handleClick}>Show Details</StyledButton>
          </Link>
        </StyledListItem>
      ))}
    </StyledList>
  );
}

const StyledButton = styled(BasicButton)`
  position: absolute;
  top: 40%;
  right: 10%;
`;

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
  position: relative;
`;
