import styled from "styled-components";
import FooterNavigation from "../../components/FooterNavigation";
import Header from "../../components/Header";
import fetchData from "../../utils/fetchData";
import calculateTripDuration from "../../utils/calculateTripDuration";
import { useState } from "react";
import { ContainerCenterElement } from "../../components/StyledComponents/ContainerCenterElement";
import { StyledBasicButton } from "../../components/Button";
import { StyledLabel } from "../../components/StyledComponents/StyledLabel";
import { GridForm } from "../../components/StyledComponents/GridForm";
import { FormContainer } from "../../components/StyledComponents/FormContainer";
import { StyledInput } from "../../components/StyledComponents/StyledInput";
import { StyledLink } from "../../components/StyledComponents/StyledLink";
import { useRouter } from "next/router";
import { format } from "date-fns";
import Image from "next/image";

export default function IdeaGenerator({ tripsList, setTripsList }) {
  const router = useRouter();

  const [startDateAI, setStartDateAI] = useState("");
  const [endDateAI, setEndDateAI] = useState("");
  const [isFetching, setIsFetching] = useState(false); // loading state
  const [hasError, setHasError] = useState(false);

  function handleStartDateAiChange(event) {
    const startDateAiValue = event.target.value;
    setStartDateAI(startDateAiValue);
  }
  function handleEndDateAiChange(event) {
    const endDateAiValue = event.target.value;
    setEndDateAI(endDateAiValue);
  }
  // Used to disable the user to generate longer trips than 14 days with the AI
  function calculateMaxEndDate() {
    if (startDateAI) {
      const startDate = new Date(startDateAI);
      const maxEndDate = new Date(
        startDate.getTime() + 13 * 24 * 60 * 60 * 1000
      ); // Add 13 days in milliseconds
      return maxEndDate.toISOString().split("T")[0]; // Format date as "YYYY-MM-DD"
    }
    return "";
  }

  const currentDate = format(new Date(), "yyyy-MM-dd");
  // minDate for min attribute of date input field "end-date", so that the end-date can't be earlier than the start-date of the trip
  const minimumEndDate = startDateAI ? startDateAI : "";
  // maxStartDate for max attribute of date input field "start-date", so that the start-date can't be later than the end-date of the trip
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
    try {
      // New data object created by AI
      const aiTripData = await fetchData(
        destinationData,
        startDateData,
        endDateData,
        tripDurationInDays
      );
      setIsFetching(false); //stop loading
      //push new trip to data array in local storage
      setTripsList([...tripsList, aiTripData]);
      // redirect user after submit
      router.push(`/my-trips/${aiTripData.slug}`);
    } catch (error) {
      setIsFetching(false);
      setHasError(true);
      console.error("Error:", error.message);
    }
  }

  return (
    <>
      <header>
        <Header heading="Idea Generator" />
      </header>
      <main>
        {isFetching ? (
          <GifContainer>
            <GifText>Your new trip is being created!</GifText>
            <Gif
              src="/generate.gif"
              alt="circle creating gif"
              width={300}
              height={300}
            />
          </GifContainer>
        ) : hasError === true ? (
          <>
            <TextContainer>
              <StyledText>
                The AI tool used to generate your trip is currently overloaded
                with various user requests. Sorry for that! Please try again
                later.
              </StyledText>
            </TextContainer>
            <ContainerCenterElement>
              <StyledLink href={"/"}>Cancel</StyledLink>
            </ContainerCenterElement>
          </>
        ) : (
          <>
            <TextContainer>
              <StyledText>
                To generate trip ideas, simply provide the destination city and
                trip dates. The max trip duration the AI can create is 2 weeks.
              </StyledText>
            </TextContainer>
            <FormContainer>
              <GridForm onSubmit={handleSubmit} autoComplete="off">
                <StyledLabel htmlFor="destination">Destination:</StyledLabel>
                <StyledInput
                  type="text"
                  name="destination"
                  id="destination"
                  maxLength={25}
                  required
                />

                <StyledLabel htmlFor="start-date">Start date:</StyledLabel>
                <StyledInput
                  type="date"
                  name="start-date"
                  id="start-date"
                  onChange={handleStartDateAiChange}
                  min={currentDate}
                  max={maximumStartDate}
                  required
                />

                <StyledLabel htmlFor="end-date">End date: </StyledLabel>
                <StyledInput
                  type="date"
                  name="end-date"
                  id="end-date"
                  onChange={handleEndDateAiChange}
                  min={minimumEndDate}
                  max={calculateMaxEndDate()}
                  required
                />
                <ContainerCenterElement>
                  <StyledBasicButton>Generate</StyledBasicButton>
                </ContainerCenterElement>
              </GridForm>
            </FormContainer>
          </>
        )}
      </main>
      <footer>
        <FooterNavigation />
      </footer>
    </>
  );
}

//info text
const TextContainer = styled.div`
  border-top: 0.5px solid --subtle-dividing-line-color;
  border-bottom: 0.5px solid --subtle-dividing-line-color;
  background-color: #fff;
  margin-top: 5.5rem;
`;

const StyledText = styled.p`
  width: 90%;
  margin: auto;
  text-align: center;
  padding: 1.7rem 0;
  line-height: 1.3rem;
`;

//animation after submit
const GifContainer = styled.div`
  position: relative;
  height: 100vh;
`;

const GifText = styled.p`
  position: absolute;
  top: 10%;
  left: 53%;
  transform: translateX(-50%);
  z-index: 20;
  color: #026873;
  font-weight: 700;
  font-size: 1.5rem;
`;

const Gif = styled(Image)`
  position: absolute;
  top: 22%;
  left: 50%;
  transform: translateX(-50%);
`;
