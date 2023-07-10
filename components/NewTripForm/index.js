import calculateTripDuration from "../../utils/calculateTripDuration";
import { useRouter } from "next/router";
import { useState } from "react";
import { FormContainer } from "../StyledComponents/FormContainer";
import { GridForm } from "../StyledComponents/GridForm";
import { GridFieldset } from "../StyledComponents/GridFieldset";
import { StyledLegend } from "../StyledComponents/StyledLegend";
import { StyledLabel } from "../StyledComponents/StyledLabel";
import { StyledInput } from "../StyledComponents/StyledInput";
import { StyledTextarea } from "../StyledComponents/StyledTextarea";
import { StyledBasicButton } from "../Button";
import { ContainerCenterElement } from "../StyledComponents/ContainerCenterElement";

export default function NewTripForm({ tripsList, setTripsList }) {
  const router = useRouter();

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [tripDurationInDays, setTripDurationInDays] = useState(0);

  // handler for the onChange attribute of "start-date" input field
  function handleStartDateChange(event) {
    const startDateValue = event.target.value;
    setStartDate(startDateValue);
    const duration = calculateTripDuration(startDateValue, endDate); //the second argument "endDate" is the useState value
    setTripDurationInDays(duration);
  }
  // handler for the onChange attribute of "end-date" input field
  function handleEndDateChange(event) {
    const endDateValue = event.target.value;
    setEndDate(endDateValue);
    const duration = calculateTripDuration(startDate, endDateValue); // the first argument "startDate" is the useState value
    setTripDurationInDays(duration);
  }

  // Create minimumEndDate for min attribute of date input field "end-date", so that the end-date can't be earlier than the start-date of the trip
  const minimumEndDate = startDate ? startDate : "";

  // Create maximunStartDate for max attribute of date input field "start-date", so that the start-date can't be later than the end-date of the trip
  const maximumStartDate = endDate ? endDate : "";

  function handleSubmit(event) {
    event.preventDefault();

    //store form data values in variables to use them to create an object which can then be pushed to the mock data array displaying the data of all trips
    const formElements = event.target.elements;

    const destinationData = formElements.destination.value;
    const startDateData = formElements["start-date"].value;
    const endDateData = formElements["end-date"].value;

    const formElementsArray = Array.from(formElements); // create an array out of formElements so that array methods can be used on it

    const titlesDataArray = formElementsArray
      .filter((element) => element.getAttribute("name")?.startsWith("title"))
      .map((element) => element.value);
    const activitiesDataArray = formElementsArray
      .filter((element) =>
        element.getAttribute("name")?.startsWith("activities")
      )
      .map((element) => element.value);

    // format start and end date to be DD//MM//YYYY instead of the default: YYYY-MM-DD
    const formattedStartDateData = formatDate(startDateData);
    const formattedEndDateData = formatDate(endDateData);

    //helper function to format date
    function formatDate(dateInputValue) {
      const dateArray = dateInputValue.split("-"); // splits the date format and saves it in an array: 2023-06-10 becomes [2023, 06, 10]
      const [year, month, day] = dateArray;
      return `${day}/${month}/${year}`;
    }

    //create object which can then be pushed to the mock data array displaying the data of all trips
    const newTripData = {
      slug: destinationData.toLowerCase(),
      destination: destinationData,
      startDate: formattedStartDateData,
      endDate: formattedEndDateData,
      dayDetails: {
        titles: titlesDataArray,
        activities: activitiesDataArray,
      },
    };

    // push newTrip object to data array in local storage
    setTripsList([...tripsList, newTripData]);

    // redirect user to new created details page after submit
    router.push(`/my-trips/${newTripData.slug}`);
  }

  // The inputs fields "Day title" and "Activities" need to be displayed based on the duration of the trip in days. So I use a loop for that and call the function which returns the right amount of input fields in the <fieldset aria-describedby="description">{createMultipleDays()}</fieldset> of my form
  function createMultipleDays() {
    const tripDays = [];

    for (let i = 0; i < tripDurationInDays; i++) {
      tripDays.push(
        <GridFieldset key={`day-${i}`}>
          <StyledLegend>{`Day ${i + 1}`}</StyledLegend>
          <StyledLabel htmlFor={`title-${i}`}>{`Day title:`}</StyledLabel>
          <StyledInput
            type="text"
            name={`title-${i}`}
            id={`title-${i}`}
            maxLength={60}
          />

          <StyledLabel htmlFor={`activities-${i}`}>{`Activities:`}</StyledLabel>
          <StyledTextarea
            name={`activities-${i}`}
            id={`activities-${i}`}
            maxLength={500}
            rows={4}
          ></StyledTextarea>
        </GridFieldset>
      );
    }
    return tripDays;
  }

  return (
    <FormContainer variant="new-trip">
      <GridForm onSubmit={handleSubmit}>
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
          onChange={handleStartDateChange}
          max={maximumStartDate}
          required
        />

        <StyledLabel htmlFor="end-date">End date: </StyledLabel>
        <StyledInput
          type="date"
          name="end-date"
          id="end-date"
          onChange={handleEndDateChange}
          min={minimumEndDate}
          required
        />

        <ContainerCenterElement>
          <h2 id="description">Trip Days</h2>
        </ContainerCenterElement>
        <div aria-describedby="description">{createMultipleDays()}</div>
        <ContainerCenterElement>
          <StyledBasicButton type="submit">Save trip</StyledBasicButton>
        </ContainerCenterElement>
      </GridForm>
    </FormContainer>
  );
}
