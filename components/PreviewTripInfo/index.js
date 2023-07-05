import styled from "styled-components";

export default function PreviewTripInfo({ destination, startDate, endDate }) {
  return (
    <>
      <StyledHeading>{destination}</StyledHeading>
      <FlexContainer>
        <FlexDate>{startDate}</FlexDate>
        <FlexDate>{endDate}</FlexDate>
      </FlexContainer>
    </>
  );
}

const StyledHeading = styled.h2`
  margin: 0;
  text-align: center;
`;

const FlexContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
`;

const FlexDate = styled.p`
  white-space: pre-line;
  flex-basis: 50%;
  text-align: center;
`;
