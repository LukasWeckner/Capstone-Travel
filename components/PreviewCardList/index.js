import styled from "styled-components";
import { StyledList } from "../StyledList";
import { StyledListItem } from "../StyledListItem";
import { StyledLink } from "../StyledLink";
import Image from "next/image";

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
            <StyledHeading>{destination}</StyledHeading>
            <FlexContainer>
              <FlexDate>{`Start date:\n${startDate}`}</FlexDate>
              <FlexDate>{`End date:\n${endDate}`}</FlexDate>
            </FlexContainer>
            <PositionedLink href={`/my-trips/${slug}`}>
              Show Details
            </PositionedLink>
            <PositionedDeleteSVG
              src="/delete.svg"
              alt="Delete Symbol"
              width={30}
              height={30}
              onClick={() => handleDelete(slug)}
            />
          </StyledListItem>
        ))}
    </StyledList>
  );
}

const StyledHeading = styled.h2`
  color: #026873;
  margin: 0;
  text-align: center;
`;

const PositionedLink = styled(StyledLink)`
  position: absolute;
  bottom: 8%;
  left: 50%;
  transform: translateX(-50%);
  background-color: #84bfbf;
  box-shadow: 3px 3px 5px -5px #000000;
  color: #fff;
`;

const FlexContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
`;

const FlexDate = styled.p`
  white-space: pre-line;
  flex-basis: 50%;
  text-align: center;
`;

const PositionedDeleteSVG = styled(Image)`
  position: absolute;
  top: 1%;
  right: 1%;
`;
