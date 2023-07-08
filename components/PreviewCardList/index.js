import styled from "styled-components";
import { StyledList } from "../StyledComponents/StyledList";
import { StyledListItem } from "../StyledComponents/StyledListItem";
import { StyledLink } from "../StyledComponents/StyledLink";
import Image from "next/image";
import PreviewTripInfo from "../PreviewTripInfo";
import { useState } from "react";
import DeleteConfirmationModal from "../DeleteConfirmationModal";

export default function PreviewCardList({ tripsList, setTripsList }) {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [tripToDelete, setTripToDelete] = useState(null);

  //helper function to format startDate of the trips array, so that sort method can be used on the dates
  function formatDate(dateString) {
    const [day, month, year] = dateString.split("/");
    return new Date(`${year}-${month}-${day}`);
  }

  function handleDelete(slug) {
    setTripToDelete(slug);
    setShowConfirmation(true);
  }

  function confirmDelete() {
    const updatedTrips = tripsList.filter((trip) => trip.slug !== tripToDelete);
    setTripsList([...updatedTrips]);
    setShowConfirmation(false);
  }

  function cancelDelete() {
    setShowConfirmation(false);
  }

  return (
    <>
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
      <DeleteConfirmationModal
        show={showConfirmation}
        onCancel={cancelDelete}
        onConfirm={confirmDelete}
      />
    </>
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
