import { useState } from "react";
import styled from "styled-components";

export default function NewTripForm() {
  // default value till flexible trip duration will be implemented
  const tripDurationInDays = 3;

  // The inputs fields "Day title" and "Activities" need to be displayed based on the duration of the trip in days. So I use a loop for that and call the function which returns the right amount of input fields in line 45
  function createMultipleDays() {
    const tripDays = [];

    for (let i = 0; i < tripDurationInDays; i++) {
      tripDays.push(
        <StyledFieldSet key={`day-${i}`}>
          <StyledLegend>{`Day ${i + 1}`}</StyledLegend>
          <label htmlFor={`title-${i}`}>{`Day title:`}</label>
          <input type="text" name={`title-${i}`} id={`title-${i}`} />

          <label htmlFor={`activities-${i}`}>{`Activities:`}</label>
          <textarea
            name={`activities-${i}`}
            id={`activities-${i}`}
            rows={4}
          ></textarea>
        </StyledFieldSet>
      );
    }
    return tripDays;
  }

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const tripData = Object.fromEntries(formData);

    console.log(tripData);
    event.target.reset();
  }

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <StyledFieldSet>
          <label htmlFor="destination">Destination:</label>
          <input type="text" name="destination" id="destination" required />

          <label htmlFor="start-date">Start date:</label>
          <input type="date" name="start-date" id="start-date" required />

          <label htmlFor="end-date">End date: </label>
          <input type="date" name="end-date" id="end-date" required />
        </StyledFieldSet>
        <ContainerCenterElement>
          <h2 id="description">Trip Days</h2>
        </ContainerCenterElement>
        <fieldset aria-describedby="description">
          {createMultipleDays()}
        </fieldset>
        <ContainerCenterElement>
          <StyledSubmitButton type="submit">Save trip</StyledSubmitButton>
        </ContainerCenterElement>
      </fieldset>
    </form>
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
