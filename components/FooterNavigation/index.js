import Link from "next/link";
import styled from "styled-components";
import { useRouter } from "next/router";
import Image from "next/image";

// I intentially didn't add a <footer> tag around the <StyledNav> here in the component, so that every single page of my app uses a clear semantic structure of <header>, <main> and <footer>. Meaning the FooterNavigation component is surrounded by <footer> tags on every page of the app.

export default function FooterNavigation() {
  const router = useRouter();

  return (
    <StyledNavWrapper>
      <StyledNav>
        {/*router.asPath identifies the current pathname of the page you are currently on */}
        <StyledNavItem>
          <FilterSVG
            alt="Backpack"
            src="/trips.svg"
            width={25}
            height={25}
            href={"/"}
            pathname={router.asPath}
          />
          <StyledLink href={"/"} pathname={router.asPath}>
            My Trips
          </StyledLink>
        </StyledNavItem>
        <StyledNavItem>
          <FilterSVG
            alt="Light bulb"
            src="/generate.svg"
            width={25}
            height={25}
            href={"/idea-generator"}
            pathname={router.asPath}
          />
          <StyledLink href={"/idea-generator"} pathname={router.asPath}>
            Idea Generator
          </StyledLink>
        </StyledNavItem>
        <StyledNavItem>
          <FilterSVG
            alt="Plus"
            src="/new.svg"
            width={25}
            height={25}
            href={"/new-trip"}
            pathname={router.asPath}
          />
          <StyledLink href={"/new-trip"} pathname={router.asPath}>
            New Trip
          </StyledLink>
        </StyledNavItem>
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
  padding: 0.5rem;
  background-color: var(--secondary-color);
  display: flex;
  justify-content: space-evenly;
  gap: 2rem;
  border-top: 0.5px solid #e3e3e3;
`;

const StyledNavItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const FilterSVG = styled(Image)`
  align-self: center;
  // used filter caluclater to roughly get same color as text below svg
  filter: ${({ href, pathname }) =>
    href === pathname
      ? "invert(39%) sepia(12%) saturate(5240%) hue-rotate(147deg) brightness(92%) contrast(87%)"
      : "none"};
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 1rem;
  font-weight: bold;
  // Style based on props
  color: ${({ href, pathname }) =>
    href === pathname ? "var(--header-footer-color)" : "black"};
`;
