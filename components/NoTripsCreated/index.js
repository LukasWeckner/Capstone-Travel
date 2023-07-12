import { StyledList } from "../StyledComponents/StyledList";
import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";

export default function NoTripsCreated() {
  return (
    <>
      <TextContainer>
        <CenteredHeading>Welcome to journAI!</CenteredHeading>
        <StyledText>
          You have no upcoming trips yet. Choose how you want to create your
          first trip:
        </StyledText>
      </TextContainer>

      <StyledList>
        <StyledLink href="/idea-generator">
          <li>
            <Image
              src="/generate.svg"
              alt="Light bulb"
              width={40}
              height={40}
            />
            <StyledCardText>Let AI Idea Generator create a trip</StyledCardText>
          </li>
        </StyledLink>

        <StyledLink href="/new-trip">
          <li>
            <Image src="/new.svg" alt="Plus" width={40} height={40} />
            <StyledCardText>Manually create your own trip</StyledCardText>
          </li>
        </StyledLink>
      </StyledList>
    </>
  );
}

const CenteredHeading = styled.h2`
  text-align: center;
  padding: 1rem 0 0.5rem 0;
  font-size: 1.2rem;
`;

const StyledText = styled.p`
  text-align: center;
  margin-bottom: 3rem;
  padding: 0 2rem 1rem 2rem;
`;

const StyledCardText = styled.p`
  color: var(--alternative-color);
  font-weight: 700;
  text-align: center;
`;

const TextContainer = styled.div`
  border-top: 0.5px solid --subtle-dividing-line-color;
  border-bottom: 0.5px solid --subtle-dividing-line-color;
  background-color: #fff;
  margin-top: 5.5rem;
`;

const StyledLink = styled(Link)`
  border-radius: 1rem;
  width: 90%;
  padding: 0.5rem 1rem;
  position: relative;
  box-shadow: 2px 5px 10px -7px #000000, 0px -2px 10px -7px #000000;
  background-color: #fff;
  position: relative;
  height: 110px;
  overflow: visible;
  text-align: center;
  text-decoration: none;
`;
