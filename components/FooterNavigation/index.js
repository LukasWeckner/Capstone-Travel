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
          My trips
        </StyledLink>
        <StyledLink href={"/new-trip"} pathname={router.asPath}>
          New trip
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
  padding: 1rem;
  background-color: grey;
  display: flex;
  justify-content: space-evenly;
  gap: 2rem;
`;

const StyledLink = styled(Link)`
  // check react-styled-components handout in section "Adapting based on props" to understand why I used a template literal here. I destructured the props of StyledLink like in the last line of example code in the handouts section.
  color: ${({ href, pathname, children }) =>
    //Checks if the href prop of the link equals the current pages path.
    href === pathname ||
    /*  I use the or-operator || because I also want to apply the color "#f2d5a3" to the my "My trips" navigation item when a user is on a details page. The first condition "href === pathname" of line 43 doesn't cover this case because the pathname won't equal the href.
    
    As my details pages are the only pages which start with the pathname "/my-trips/" I set this as a condition. The "&& children === "My trips"" additionally checks if the name of my navigation item is "My trips" because else both navigation items would be colored with "#f2d5a3".
    */
    (pathname.startsWith("/my-trips/") && children === "My trips")
      ? "orange"
      : "black"};
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: bold;
`;
