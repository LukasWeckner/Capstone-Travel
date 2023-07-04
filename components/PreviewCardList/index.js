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
            <div>
              <StyledHeading>{destination}</StyledHeading>
              <p>{startDate}</p>
              <p>{endDate}</p>
            </div>
            <PositionedDeleteSVG
              src="/delete.svg"
              alt="Delete Symbol"
              width={24}
              height={24}
              onClick={() => handleDelete(slug)}
            />
            <PositionedLink href={`/my-trips/${slug}`}>
              Show Details
            </PositionedLink>
          </StyledListItem>
        ))}
    </StyledList>
  );
}

const PositionedLink = styled(StyledLink)`
  gap: 0.5rem;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 5%;
`;

const PositionedDeleteSVG = styled(Image)`
  position: absolute;
  top: 2%;
  right: 2%;
`;

const StyledHeading = styled.h2`
  color: #026873;
  margin: 0;
`;
