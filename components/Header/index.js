import styled from "styled-components";

export default function Header({ heading }) {
  return <CenteredHeading>{heading}</CenteredHeading>;
}

const CenteredHeading = styled.h1`
  text-align: center;
`;
