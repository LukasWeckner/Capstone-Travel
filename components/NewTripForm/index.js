import styled from "styled-components";
import { trips } from "../../lib/data";
import { useRouter } from "next/router";

export default function NewTripForm() {
  // default value till flexible trip duration will be implemented
  const tripDurationInDays = 3;
  const router = useRouter();

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

    // push newTrip object to mock data array
    trips.push(newTripData);

    // redirect user to new created details page after submit
    router.push(`/my-trips/${newTripData.slug}`);
  }

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
