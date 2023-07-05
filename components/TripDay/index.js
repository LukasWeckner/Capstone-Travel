import styled from "styled-components";

import { StyledListItem } from "../StyledListItem";
export default function TripDay({ title, activities }) {
  return (
    <StyledListItem>
      <StyledHeading>{title}</StyledHeading>
      <StyledActivities>{activities}</StyledActivities>
    </StyledListItem>
  );
}

const StyledHeading = styled.h3`
  margin: 0;
`;

const StyledActivities = styled.p`
  line-height: 1.3rem;
`;
