import { useRouter } from "next/router";
import { useState } from "react";
import { StyledLink } from "../../components/PreviewCardList";
import Header from "../../components/Header";
import styled from "styled-components";

export default function EditTrip({ tripsList, setTripsList }) {
  const router = useRouter();
  const { slug } = router.query;

  const tripIndex = tripsList.findIndex((trip) => trip.slug === slug);
  const tripToUpdate = tripsList[tripIndex];

  console.log(tripToUpdate);

  const [editedDestination, setEditedDestination] = useState(
    tripToUpdate.destination
  );

  const [editedTitles, setEditedTitles] = useState(
    tripToUpdate.dayDetails.titles
  );

  const [editedActivities, setEditedActivities] = useState(
    tripToUpdate.dayDetails.activities
  );
  function handleSubmit(event) {
    event.preventDefault();

    //create copy of trip to update
    const updatedTrip = { ...tripToUpdate };

    //update data
    updatedTrip.destination = editedDestination;
    updatedTrip.dayDetails.titles = editedTitles;
    updatedTrip.dayDetails.activities = editedActivities;

    //update tripsList state with updated trip
    const updatedTripsList = [...tripsList];
    updatedTripsList[tripIndex] = updatedTrip;
    setTripsList(updatedTripsList);

    // redirect user to edited
    router.push(`/my-trips/${slug}`);
  }

  return (
    <>
      <header>
        <Header heading="Edit Trip" />
      </header>
      <StyledLink href={`/my-trips/${slug}`}>Cancel</StyledLink>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <StyledFieldSet>
            <label htmlFor="destination">Destination:</label>
            <input
              type="text"
              name="destination"
              id="destination"
              maxLength={25}
              value={editedDestination}
              onChange={(event) => setEditedDestination(event.target.value)}
              required
            />
          </StyledFieldSet>
          <ContainerCenterElement>
            <h2 id="description">Trip Days</h2>
          </ContainerCenterElement>

          {tripToUpdate.dayDetails.activities.map((activity, index) => (
            <StyledFieldSet aria-describedby="description" key={index}>
              <StyledLegend>{`Day ${index + 1}`}</StyledLegend>

              <label htmlFor={`title${index}`}>Title:</label>
              <input
                type="text"
                name={`title${index}`}
                id={`title${index}`}
                maxLength={60}
                value={editedTitles[index]}
                onChange={(event) => {
                  const updatedTitles = [...editedTitles];
                  updatedTitles[index] = event.target.value;
                  setEditedTitles(updatedTitles);
                }}
              />

              <label htmlFor={`activity${index}`}>Activities:</label>
              <textarea
                name={`activity${index}`}
                id={`activity${index}`}
                rows={4}
                maxLength={500}
                value={editedActivities[index]}
                onChange={(event) => {
                  const updatedActivities = [...editedActivities];
                  updatedActivities[index] = event.target.value;
                  setEditedActivities(updatedActivities);
                }}
              ></textarea>
            </StyledFieldSet>
          ))}

          <ContainerCenterElement>
            <StyledSubmitButton type="submit">Save trip</StyledSubmitButton>
          </ContainerCenterElement>
        </fieldset>
      </form>
    </>
  );
}

// displays all child elements of fieldset below each other with a 100% width
const StyledFieldSet = styled.fieldset`
  display: grid;
  gap: 0.3rem;
`;

const StyledSubmitButton = styled.button`
  padding: 10px 20px;
  background-color: #f2d5a3;
`;

const StyledLegend = styled.legend`
  font-weight: bold;
`;

export const ContainerCenterElement = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`;
