import styled from "styled-components";

export default function Header({ heading }) {
  return <HeaderHeading>{heading}</HeaderHeading>;
}

const HeaderHeading = styled.h1`
  position: fixed;
  top: 0;
  z-index: 10;
  width: 100%;
  margin: 0;
  padding: 0.6rem;
  font-size: 1.6rem;
  text-align: center;
  color: var(--secondary-color);
  background-color: var(--header-footer-color);
`;
