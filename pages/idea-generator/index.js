import styled from "styled-components";
import FooterNavigation from "../../components/FooterNavigation";
import Header from "../../components/Header";
import { useState } from "react";
import { ContainerCenterElement } from "../../components/NewTripForm";
import { StyledBasicButton } from "../../components/Button";
import { useRouter } from "next/router";
import fetchData from "../../utils/fetchData";
import calculateTripDuration from "../../utils/calculateTripDuration";

export default function IdeaGenerator({ tripsList, setTripsList }) {
  const router = useRouter();

  const [startDateAI, setStartDateAI] = useState("");
  const [endDateAI, setEndDateAI] = useState("");
  const [isFetching, setIsFetching] = useState(false); // loading state

  function handleStartDateAiChange(event) {
    const startDateAiValue = event.target.value;
    setStartDateAI(startDateAiValue);
  }
  function handleEndDateAiChange(event) {
    const endDateAiValue = event.target.value;
    setEndDateAI(endDateAiValue);
  }

  // Create minimumEndDate for min attribute of date input field "end-date", so that the end-date can't be earlier than the start-date of the trip
  const minimumEndDate = startDateAI ? startDateAI : "";
  // Create maximunStartDate for max attribute of date input field "start-date", so that the start-date can't be later than the end-date of the trip
  const maximumStartDate = endDateAI ? endDateAI : "";

  async function handleSubmit(event) {
    event.preventDefault();
    setIsFetching(true); //start loading
    //store form data in variables to hand them to the AI, will be used in next commits
    const formElements = event.target.elements;
    const destinationData = formElements.destination.value;
    const startDateData = formElements["start-date"].value;
    const endDateData = formElements["end-date"].value;

    const tripDurationInDays = calculateTripDuration(
      startDateData,
      endDateData
    );
    // New data object created by AI
    const aiTripData = await fetchData(
      destinationData,
      startDateData,
      endDateData,
      tripDurationInDays
    );
    setIsFetching(false); //stop loading
    //push new trip to data array in local storage
    setTripsList([...tripsList, aiTripData]); // value will be set after implementation of openAI API
    // redirect user after submit
    router.push(`/my-trips/${aiTripData.slug}`);
  }

  return (
    <>
      <header>
        <Header heading="Idea Generator" />
      </header>
      <main>
        <StyledText>
          To let the AI generate ideas for your trip simply provide the
          destination (city) you want to go to, the start date and the end date
          for your trip.
        </StyledText>
        <form onSubmit={handleSubmit}>
          <StyledFieldSet>
            <label htmlFor="destination">Destination:</label>
            <input
              type="text"
              name="destination"
              id="destination"
              maxLength={25}
              required
            />

            <label htmlFor="start-date">Start date:</label>
            <input
              type="date"
              name="start-date"
              id="start-date"
              onChange={handleStartDateAiChange}
              max={maximumStartDate}
              required
            />

            <label htmlFor="end-date">End date: </label>
            <input
              type="date"
              name="end-date"
              id="end-date"
              onChange={handleEndDateAiChange}
              min={minimumEndDate}
              required
            />
            <ContainerCenterElement>
              <StyledButton disabled={isFetching}>
                {isFetching ? "Loading..." : "Generate"}
              </StyledButton>
            </ContainerCenterElement>
          </StyledFieldSet>
        </form>
      </main>
      <footer>
        <FooterNavigation />
      </footer>
    </>
  );
}

const StyledFieldSet = styled.fieldset`
  display: grid;
  gap: 0.3rem;
  margin: auto;
  margin-top: 2rem;
  width: 80%;
`;

const StyledText = styled.p`
  width: 80%;
  margin: auto;
  margin-top: 2rem;
  padding: 1rem;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.2);
`;

const StyledButton = styled(StyledBasicButton)`
  background-color: #f2d5a3;
`;
