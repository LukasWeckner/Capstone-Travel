import PreviewCard from "../components/PreviewCard";
import Link from "next/link";
import styled from "styled-components";
import FooterNavigation from "../components/FooterNavigation";
import Header from "../components/Header";

export default function Home() {
  return (
    <>
      <header>
        <Header heading="My Trips" />
      </header>

      <main>
        <div>
          <StyledLink href={"/new-trip"}>Create New Trip</StyledLink>
        </div>
        <PreviewCard />
      </main>

      <footer>
        <FooterNavigation />
      </footer>
    </>
  );
}

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  padding: 10px 20px;
  background-color: #f2d5a3;
  border-radius: 4px;
  cursor: pointer;
`;
