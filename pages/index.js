import PreviewCard from "../components/PreviewCard";
import Link from "next/link";
import styled from "styled-components";

export default function Home() {
  return (
    <main>
      <h1>Current trips</h1>
      <div>
        <StyledLink href={"/new-trip"}>Create New Trip</StyledLink>
      </div>
      <PreviewCard />
    </main>
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
