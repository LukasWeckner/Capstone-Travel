import styled from "styled-components";

export default function NewTripForm() {
  // default value till flexible trip duration will be implemented
  const tripDurationInDays = 5;

  // The inputs fields "Day title" and "Activities" need to be displayed based on the duration of the trip in days. So I use a loop here and call the function in line 45
  function createMultipleDays() {
    const tripDays = [];

    for (let i = 0; i < tripDurationInDays; i++) {
      tripDays.push(
        <div>
          <label htmlFor="title">
            Day title:
            <input type="text" name="title" id="title" />
          </label>
          <label htmlFor="activities">
            Activities:
            <textarea name="activities" id="activities"></textarea>
          </label>
        </div>
      );
    }
    return tripDays;
  }

  return (
    <form>
      <StyledFieldSet>
        <label htmlFor="destination">
          Destination:
          <input type="text" name="destination" id="destination" />
        </label>
        <label htmlFor="start-date">
          Start date:
          <input type="date" name="start-date" id="start-date" />
        </label>
        <label htmlFor="end-date">
          End date:
          <input type="date" name="end-date" id="end-date" />
        </label>
      </StyledFieldSet>
      <h2 id="description">Trip Days</h2>
      <fieldset aria-describedby="description">{createMultipleDays()}</fieldset>
    </form>
  );
}

const StyledFieldSet = styled.fieldset`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 5px;
`;
