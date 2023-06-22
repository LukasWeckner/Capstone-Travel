import Link from "next/link";
import styled from "styled-components";

// I intentially didn't add a <footer> tag around the <nav> here in the component, so that every single page of my app uses a clear semantic structure of <header>, <main> and <footer>. Meaning the FooterNavigation component is surrounded by <footer> tags on every page of the app.

export default function FooterNavigation() {
  return (
    <StyledNavWrapper>
      <StyledNav>
        <StyledLink href={"/"}>My trips</StyledLink>
        <StyledLink href={"/new-trip"}>New trip</StyledLink>
      </StyledNav>
    </StyledNavWrapper>
  );
}

const StyledNavWrapper = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 1rem;
  background-color: grey;
`;

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-evenly;
  gap: 2rem;
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
`;
