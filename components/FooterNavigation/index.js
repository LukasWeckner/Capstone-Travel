import Link from "next/link";
import styled from "styled-components";
import { useRouter } from "next/router";

// I intentially didn't add a <footer> tag around the <StyledNav> here in the component, so that every single page of my app uses a clear semantic structure of <header>, <main> and <footer>. Meaning the FooterNavigation component is surrounded by <footer> tags on every page of the app.

export default function FooterNavigation() {
  const router = useRouter();

  return (
    <StyledNavWrapper>
      <StyledNav>
        {/*router.asPath identifies the current pathname of the page you are currently on */}
        <StyledLink href={"/"} pathname={router.asPath}>
          My Trips
        </StyledLink>
        <StyledLink href={"/idea-generator"} pathname={router.asPath}>
          Idea Generator
        </StyledLink>
        <StyledLink href={"/new-trip"} pathname={router.asPath}>
          New Trip
        </StyledLink>
      </StyledNav>
    </StyledNavWrapper>
  );
}

const StyledNavWrapper = styled.div`
  margin-top: 6rem;
`;

const StyledNav = styled.nav`
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 1.5rem 0.5rem;
  background-color: grey;
  display: flex;
  justify-content: space-around;
  gap: 2rem;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: bold;
  //Check if the href prop of the link equals the current pages url-path.
  color: ${({ href, pathname }) => (href === pathname ? "orange" : "black")};
`;
