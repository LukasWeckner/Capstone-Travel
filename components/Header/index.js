import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";

export default function Header({ heading, displayBackButton, href }) {
  return (
    <HeaderContainer>
      {displayBackButton && (
        <RelativeLink href={href}>
          <Image src="/backArrow.svg" alt="back arrow" width={24} height={24} />
        </RelativeLink>
      )}
      <HeaderHeading>{heading}</HeaderHeading>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  z-index: 10;
  width: 100%;
  padding: 0.6rem;
  background-color: var(--header-footer-color);
`;

const HeaderHeading = styled.h1`
  font-size: 1.6rem;
  margin: 0;
  text-align: center;
  color: var(--secondary-color);
`;

const RelativeLink = styled(Link)`
  position: absolute;
  left: 5%;
`;
