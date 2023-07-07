import Header from "../../components/Header";
import styled from "styled-components";
import { useRouter } from "next/router";
import { useState } from "react";
import { useEffect } from "react";

import { StyledLink } from "../../components/StyledComponents/StyledLink";
import { FormContainer } from "../../components/StyledComponents/FormContainer";
import { GridForm } from "../../components/StyledComponents/GridForm";
import { StyledLabel } from "../../components/StyledComponents/StyledLabel";
import { StyledInput } from "../../components/StyledComponents/StyledInput";
import { StyledTextarea } from "../../components/StyledComponents/StyledTextarea";
import { StyledBasicButton } from "../../components/Button";
import { ContainerCenterElement } from "../../components/StyledComponents/ContainerCenterElement";

//data for initial state
const initialDestination = "";
const initialTitles = [];
const initialActivities = [];

export default function EditTrip({ tripsList, setTripsList }) {
  const router = useRouter();
  const { slug } = router.query;

  // selects the trip where the edit button was clicked (tripToUpdate)
  const tripIndex = tripsList.findIndex((trip) => trip.slug === slug);
  const tripToUpdate = tripsList[tripIndex];

  //states for editation
  const [editedDestination, setEditedDestination] =
    useState(initialDestination);
  const [editedTitles, setEditedTitles] = useState(initialTitles);
  const [editedActivities, setEditedActivities] = useState(initialActivities);

  useEffect(() => {
    if (tripsList[tripIndex]) {
      setEditedDestination(tripToUpdate.destination);
      setEditedTitles(tripToUpdate.dayDetails.titles);
      setEditedActivities(tripToUpdate.dayDetails.activities);
    }
  }, [tripToUpdate, tripIndex, tripsList]);

  function handleSubmit(event) {
    event.preventDefault();

    //spread trip to update and add changes to it
    const updatedTrip = {
      ...tripToUpdate,
      destination: editedDestination,
      dayDetails: { titles: editedTitles, activities: editedActivities },
    };

    //update tripsList state with updated trip
    const updatedTripsList = [...tripsList];
    updatedTripsList[tripIndex] = updatedTrip; //assigns value of updated trip to the element (here: object) at the specified index. Aka it replaces the existing trip with the updated trip
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
      <FormContainer>
        <GridForm onSubmit={handleSubmit}>
          <StyledLabel htmlFor="destination">Destination:</StyledLabel>
          <StyledInput
            type="text"
            name="destination"
            id="destination"
            maxLength={25}
            value={editedDestination}
            onChange={(event) => setEditedDestination(event.target.value)}
            required
          />

          <ContainerCenterElement>
            <h2 id="description">Trip Days</h2>
          </ContainerCenterElement>

          {tripToUpdate &&
            tripToUpdate.dayDetails &&
            tripToUpdate.dayDetails.activities.map((activity, index) => (
              <StyledFieldSet aria-describedby="description" key={index}>
                <StyledLegend>{`Day ${index + 1}`}</StyledLegend>

                <StyledLabel htmlFor={`title${index}`}>Title:</StyledLabel>
                <StyledInput
                  type="text"
                  name={`title${index}`}
                  id={`title${index}`}
                  maxLength={60}
                  value={editedTitles[index] || ""}
                  onChange={(event) => {
                    const updatedTitles = [...editedTitles];
                    updatedTitles[index] = event.target.value;
                    setEditedTitles(updatedTitles);
                  }}
                />

                <StyledLabel htmlFor={`activity${index}`}>
                  Activities:
                </StyledLabel>
                <StyledTextarea
                  name={`activity${index}`}
                  id={`activity${index}`}
                  rows={4}
                  maxLength={500}
                  value={editedActivities[index] || ""}
                  onChange={(event) => {
                    const updatedActivities = [...editedActivities];
                    updatedActivities[index] = event.target.value;
                    setEditedActivities(updatedActivities);
                  }}
                ></StyledTextarea>
              </StyledFieldSet>
            ))}

          <ContainerCenterElement>
            <StyledSubmitButton type="submit">Save Changes</StyledSubmitButton>
          </ContainerCenterElement>
        </GridForm>
      </FormContainer>
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
