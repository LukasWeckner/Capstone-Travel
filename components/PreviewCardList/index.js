import styled from "styled-components";
import { StyledList } from "../StyledList";
import { StyledListItem } from "../StyledListItem";
import { StyledLink } from "../StyledLink";
import Image from "next/image";
import PreviewTripInfo from "../PreviewTripInfo";

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
            <PreviewTripInfo
              destination={destination}
              startDate={`Start date:\n${startDate}`}
              endDate={`End date:\n${endDate}`}
            />
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

const PositionedLink = styled(StyledLink)`
  position: absolute;
  bottom: 8%;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 3px 3px 5px -5px #000000;
`;

const PositionedDeleteSVG = styled(Image)`
  position: absolute;
  top: 1%;
  right: 1%;
`;
