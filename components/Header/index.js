import styled from "styled-components";

export default function Header({ heading }) {
  return <HeaderHeading>{heading}</HeaderHeading>;
}

const HeaderHeading = styled.h1`
  margin: 0 0 2rem 0;
  padding: 1.8rem;
  text-align: center;
  color: var(--secondary-color);
  background-color: var(--header-footer-color);
`;
